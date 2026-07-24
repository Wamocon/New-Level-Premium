'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { buildingShots } from '@/lib/data/buildings';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const N = buildingShots.length;
const STEP = 360 / N;

/**
 * A scroll-piloted 3D coverflow of the real New Level buildings: the section's
 * scroll progress turns the ring so the visitor "walks around" it themselves,
 * over a whisper of idle drift, with drag-to-rotate on top. Pure CSS 3D driven
 * by GSAP's ticker + ScrollTrigger (no second WebGL canvas), per-card depth
 * dimming and reflections. Reduced motion renders a static ring. Building info
 * lives in the DOM for SEO / accessibility.
 */
export function BuildingShowcase() {
  const t = useTranslations('showcase');
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cards = useRef<Array<HTMLDivElement | null>>([]);
  // rot = idle drift + scroll-pilot + drag. The user "walks the ring" by
  // scrolling; a whisper of idle keeps it alive; drag still overrides.
  const st = useRef({
    rot: 0,
    rendered: 0,
    idle: 0,
    scroll: 0,
    drag: 0,
    radius: 340,
    dragging: false,
    lastX: 0,
  });

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

    const apply = (rotation = s.rendered) => {
      ring.style.transform = `rotateY(${rotation}deg)`;
      for (let i = 0; i < N; i++) {
        const el = cards.current[i];
        if (!el) continue;
        const ang = (((i * STEP + rotation) % 360) + 360) % 360;
        const f = Math.cos((ang * Math.PI) / 180) * 0.5 + 0.5; // 1 = front, 0 = back
        el.style.transform = `translate(-50%,-50%) rotateY(${i * STEP}deg) translateZ(${s.radius}px) scale(${0.82 + 0.18 * f})`;
        el.style.opacity = String(0.1 + 0.9 * f);
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

    registerGsap();
    const IDLE = 0.9; // visible ambient life without visually running away
    const SWEEP = 165; // responsive partial orbit while the section crosses the viewport
    const tick = (_time: number, delta: number) => {
      if (!s.dragging) s.idle -= (IDLE * delta) / 1000;
      s.rot = s.idle + s.scroll + s.drag;
      const alpha = 1 - Math.exp(-Math.min(delta, 64) / 115);
      s.rendered += (s.rot - s.rendered) * alpha;
      apply();
    };
    gsap.ticker.add(tick);

    // Scroll piloting: the section's progress through the viewport drives rotation
    // so the visitor "walks the ring" themselves; drag adds on top.
    const trigger = ScrollTrigger.create({
      trigger: stage,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        s.scroll = -self.progress * SWEEP;
      },
    });

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onDown = (e: React.PointerEvent) => {
    const s = st.current;
    s.dragging = true;
    s.lastX = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = st.current;
    if (!s.dragging) return;
    s.drag += (e.clientX - s.lastX) * 0.18;
    s.lastX = e.clientX;
  };
  const onUp = () => {
    const s = st.current;
    if (!s.dragging) return;
    s.dragging = false;
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
          className="relative mt-10 h-[42vh] min-h-[320px] max-h-[470px] touch-pan-y select-none md:h-[48vh]"
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
                className="absolute left-0 top-0 w-[clamp(190px,28vw,300px)]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                }}
              >
                <div
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/12 shadow-[0_36px_90px_-34px_rgba(0,0,0,0.75)]"
                  style={{
                    WebkitBoxReflect:
                      'below 2px linear-gradient(to bottom, transparent 72%, rgba(0,0,0,0.2))',
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

/** Lightweight vertical project still. The homepage keeps one video only. */
function Reel({ label }: { label: string }) {
  return (
    <div className="on-dark relative hidden w-[150px] shrink-0 overflow-hidden rounded-[1.4rem] border border-white/12 shadow-[0_26px_70px_-30px_rgba(0,0,0,0.7)] md:block">
      <div className="relative aspect-[9/16]">
        <Image
          src="/buildings/tour-poster.jpg"
          alt=""
          aria-hidden
          fill
          sizes="150px"
          quality={92}
          className="object-cover"
        />
      </div>
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-obsidian/55 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-wider text-cloud backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-gold" />
        {label}
      </span>
    </div>
  );
}
