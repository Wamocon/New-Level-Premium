'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ScrollTrigger, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { ArrowDown } from 'lucide-react';

const FRAMES = 100;
const frameSrc = (i: number) => `/buildings/flythrough/f-${String(i + 1).padStart(3, '0')}.webp`;

/**
 * Scroll-piloted cinematic drone fly-through. The user drives the flight by
 * scrolling: a sticky full-viewport <canvas> paints a frame sequence (extracted
 * from our real aerial footage) scrubbed by a GSAP ScrollTrigger — no janky
 * video seeking. Frames stream in on idle so nothing blocks paint; reduced-motion
 * shows a single still. The heading/cue sit in the DOM (SEO + a11y), not pixels.
 */
export function AerialFlythrough() {
  const t = useTranslations('flythrough');
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useIsomorphicLayoutEffect(() => {
    const cv = canvas.current;
    const el = root.current;
    if (!cv || !el) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let current = -1;
    let cancelled = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const sizeCanvas = () => {
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
    };

    const draw = (i: number) => {
      const img = images[i];
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = cv.width;
      const ch = cv.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (cr > ir) {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      } else {
        dh = ch;
        dw = ch * ir;
        dy = 0;
        dx = (cw - dw) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
      current = i;
    };

    const render = (frac: number) => {
      const i = Math.min(FRAMES - 1, Math.max(0, Math.round(frac * (FRAMES - 1))));
      if (i !== current && images[i]?.complete) draw(i);
    };

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (i === 0 && current < 0) draw(0);
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(i);
        images[i] = img;
      });

    sizeCanvas();

    // Frame 0 first (poster), then the rest in idle-batched chunks.
    load(0).then(() => {
      const loadFrom = (start: number) => {
        if (cancelled || start >= FRAMES) return;
        const end = Math.min(FRAMES, start + 8);
        Promise.all(Array.from({ length: end - start }, (_, k) => load(start + k))).then(() => {
          const idle = window.requestIdleCallback ?? ((f: () => void) => window.setTimeout(f, 60));
          idle(() => loadFrom(end));
        });
      };
      loadFrom(1);
    });

    const onResize = () => {
      sizeCanvas();
      draw(current >= 0 ? current : 0);
    };
    window.addEventListener('resize', onResize);

    let st: ScrollTrigger | undefined;
    if (prefersReducedMotion()) {
      // Static hero still, no scrub.
      load(Math.floor(FRAMES / 2)).then(() => draw(Math.floor(FRAMES / 2)));
    } else {
      registerGsap();
      st = ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => render(self.progress),
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
      st?.kill();
    };
  }, []);

  return (
    <section ref={root} className="relative h-[280vh]">
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-obsidian">
        <canvas ref={canvas} className="grade-warm absolute inset-0 size-full" />
        {/* cinematic vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_45%,transparent_52%,rgba(8,8,10,0.72)_100%)]"
        />

        <div className="on-dark relative z-10 flex h-dvh flex-col justify-between py-[11vh]">
          <div className="container-lux">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
              {t('eyebrow')}
            </span>
            <h2 className="display mt-4 max-w-2xl font-bold text-cloud">{t('heading')}</h2>
          </div>

          <div className="container-lux">
            <p className="max-w-md text-lg leading-relaxed text-cloud/80">{t('subline')}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-cloud/50">
              <ArrowDown className="size-3.5 animate-bounce motion-reduce:hidden" />
              {t('cue')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
