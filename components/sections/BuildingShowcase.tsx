'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { buildingShots } from '@/lib/data/buildings';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const N = buildingShots.length;
const STEP = 360 / N;

/**
 * A slow, auto-rotating 3D coverflow of the real New Level Premium buildings.
 * Pure CSS 3D driven by GSAP's ticker (no second WebGL canvas, so it stays
 * light on performance) with drag-to-rotate, per-card depth dimming and photo
 * reflections. Building info lives in the DOM for SEO / accessibility.
 */
export function BuildingShowcase() {
  const t = useTranslations('showcase');
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cards = useRef<Array<HTMLDivElement | null>>([]);
  const st = useRef({ rot: 0, radius: 340, auto: true, dragging: false, lastX: 0 });

  useIsomorphicLayoutEffect(() => {
    const stage = stageRef.current;
    const ring = ringRef.current;
    if (!stage || !ring) return;
    const s = st.current;

    const measure = () => {
      const cw = cards.current[0]?.offsetWidth || 340;
      // Inscribed-ring radius: at *1.0 the cards sit edge-to-edge, so a slight
      // 0.98 pulls them into a seamless, gap-free band (was 1.42 = big gaps).
      s.radius = ((cw / 2) / Math.tan(Math.PI / N)) * 0.98;
      stage.style.perspective = `${Math.round(s.radius * 2.5)}px`;
    };

    const apply = () => {
      ring.style.transform = `rotateY(${s.rot}deg)`;
      for (let i = 0; i < N; i++) {
        const el = cards.current[i];
        if (!el) continue;
        const ang = (((i * STEP + s.rot) % 360) + 360) % 360;
        const f = Math.cos((ang * Math.PI) / 180) * 0.5 + 0.5; // 1 = front, 0 = back
        el.style.transform = `translate(-50%,-50%) rotateY(${i * STEP}deg) translateZ(${s.radius}px) scale(${0.82 + 0.18 * f})`;
        el.style.opacity = String(0.18 + 0.82 * f);
        el.style.filter = `brightness(${0.55 + 0.45 * f}) saturate(${0.9 + 0.1 * f})`;
        el.style.zIndex = String(Math.round(f * 100));
        el.style.pointerEvents = f > 0.86 ? 'auto' : 'none';
      }
    };

    measure();
    apply();
    const onResize = () => {
      measure();
      apply();
    };
    window.addEventListener('resize', onResize);

    if (prefersReducedMotion()) {
      return () => window.removeEventListener('resize', onResize);
    }

    const SPEED = 4.2; // deg / second (dialed back ~40% for a calmer, classier drift)
    const tick = (_time: number, delta: number) => {
      if (s.auto && !s.dragging) s.rot -= (SPEED * delta) / 1000;
      apply();
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onDown = (e: React.PointerEvent) => {
    const s = st.current;
    s.dragging = true;
    s.auto = false;
    s.lastX = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = st.current;
    if (!s.dragging) return;
    s.rot += (e.clientX - s.lastX) * 0.3;
    s.lastX = e.clientX;
  };
  const onUp = () => {
    const s = st.current;
    if (!s.dragging) return;
    s.dragging = false;
    window.setTimeout(() => {
      if (!s.dragging) s.auto = true;
    }, 1800);
  };

  return (
    <section id="residences" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />
          <Reel label={t('reelLabel')} />
        </div>

        {/* 3D coverflow */}
        <div
          ref={stageRef}
          className="relative mt-12 h-[54vh] min-h-[360px] touch-pan-y select-none md:h-[60vh]"
          style={{ perspective: '900px', cursor: 'grab' }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
        >
          <div
            ref={ringRef}
            className="absolute left-1/2 top-1/2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {buildingShots.map((b, i) => (
              <div
                key={b.src}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                className="absolute left-0 top-0 w-[clamp(258px,40vw,440px)]"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/12 shadow-[0_36px_90px_-34px_rgba(0,0,0,0.75)]"
                  style={{
                    WebkitBoxReflect:
                      'below 3px linear-gradient(to bottom, transparent 58%, rgba(0,0,0,0.28))',
                  }}
                >
                  <Image
                    src={b.src}
                    alt="New Level Premium, Alanya"
                    fill
                    sizes="(max-width: 768px) 62vw, 40vw"
                    placeholder="blur"
                    blurDataURL={b.blur}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-cloud/45">
            <MousePointer2 className="size-3.5" />
            {t('dragHint')}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-cloud/60">{t('caption')}</p>
          <Button asChild variant="outline">
            <Link href="/complexes">
              {t('cta')}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/** Vertical drone-tour reel, played only while in view. */
function Reel({ label }: { label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion()) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play?.().catch(() => {});
        else v.pause?.();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="on-dark relative hidden w-[176px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] md:block">
      <video
        ref={ref}
        className="grade-warm block aspect-[9/16] w-full object-cover"
        poster="/buildings/tour-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/buildings/tour.mp4" type="video/mp4" />
      </video>
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-obsidian/55 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-wider text-cloud backdrop-blur-sm">
        <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
        {label}
      </span>
    </div>
  );
}
