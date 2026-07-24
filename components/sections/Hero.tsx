'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { CountUp } from '@/components/anim/CountUp';
import { SearchBar } from '@/components/sections/SearchBar';
import { site, stats } from '@/lib/data/site';
import type { Locale } from '@/lib/types';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { ArrowRight, ArrowDown, Star, BadgeCheck, ArrowUpRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const root = useRef<HTMLElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const cursorLayer = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  // Play the aerial backdrop only while the hero is on screen / the tab is visible.
  useIsomorphicLayoutEffect(() => {
    const v = video.current;
    if (!v) return;

    v.defaultPlaybackRate = 1.08;
    v.playbackRate = 1.08;
    if (prefersReducedMotion()) {
      v.pause();
      return;
    }

    let inView = true;
    const syncPlayback = () => {
      if (inView && !document.hidden) v.play?.().catch(() => {});
      else v.pause?.();
    };
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.1 },
    );
    io.observe(v);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();
    let onMove: ((e: PointerEvent) => void) | undefined;
    const ctx = gsap.context(() => {
      // One deliberate cinematic entrance. Transform + opacity stay on the
      // compositor and remain smooth at the display's native refresh rate.
      gsap.from('[data-hero]', {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.065,
        delay: 0.06,
        clearProps: 'transform,opacity',
      });
      // Slow scroll parallax on the backdrop so it drifts under the content as
      // the hero hands off to the next section.
      if (backdrop.current) {
        gsap.fromTo(
          backdrop.current,
          { yPercent: -2 },
          {
            yPercent: 2,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }
      // Cursor parallax: the backdrop drifts opposite the pointer for depth.
      // Pointer devices only; the layer is pre-scaled so the drift never reveals
      // an edge. GSAP owns the transform (scale + translate) on this layer.
      const layer = cursorLayer.current;
      if (layer && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        // Keep movement restrained so the 720p source is not visibly enlarged.
        gsap.set(layer, { scale: 1.012 });
        const xTo = gsap.quickTo(layer, 'x', { duration: 0.55, ease: 'power3' });
        const yTo = gsap.quickTo(layer, 'y', { duration: 0.55, ease: 'power3' });
        onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          xTo(-nx * 5);
          yTo(-ny * 4);
        };
        window.addEventListener('pointermove', onMove);
      }
    }, root);
    return () => {
      if (onMove) window.removeEventListener('pointermove', onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="grain on-dark relative flex min-h-dvh flex-col justify-start overflow-hidden bg-[linear-gradient(180deg,#1c1610_0%,#14131a_52%,#0a0b0e_100%)] pb-16 pt-28 lg:justify-center lg:pb-40"
    >
      {/* One HD video for the homepage. The poster paints first for LCP and the
          muted video starts immediately, with no frame-scrubbing or seeking. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={backdrop} className="absolute inset-x-0 top-[-3%] h-[106%]">
          <div ref={cursorLayer} className="size-full will-change-transform">
            <div className="relative size-full">
            <Image
              src="/buildings/aerial-poster.jpg"
              alt=""
              aria-hidden
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
            <video
              ref={video}
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700 ease-out"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/buildings/aerial-poster.jpg"
              onLoadedMetadata={(e) => {
                e.currentTarget.defaultPlaybackRate = 1.08;
                e.currentTarget.playbackRate = 1.08;
              }}
              onCanPlay={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.play?.().catch(() => {});
              }}
            >
              <source src="/buildings/aerial.mp4" type="video/mp4" />
            </video>
            </div>
          </div>
        </div>
      </div>

      {/* atmospheric gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(120%_82%_at_52%_0%,transparent_48%,rgba(8,8,10,0.34)_82%,rgba(8,8,10,0.88)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-obsidian/45 via-obsidian/10 to-transparent"
      />
      <div aria-hidden className="hero-light-pass pointer-events-none absolute z-[1]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-t from-obsidian/95 via-obsidian/30 to-transparent"
      />

      {/* content */}
      <div className="container-lux relative z-10">
        <div className="max-w-3xl">
          <div
            data-hero
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(201,162,75,0.8)]" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cloud/70">
              {t('eyebrow')}
            </span>
          </div>

          <h1 className="display font-extrabold">
            <span className="block overflow-hidden pb-[0.04em]">
              <span data-hero className="block text-cloud">
                {t('headlineTop')}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero className="text-metal block">
                {t('headlineAccent')}
              </span>
            </span>
          </h1>

          <p
            data-hero
            className="mt-5 max-w-xl text-base leading-relaxed text-cloud/72 sm:text-lg"
          >
            {t('subline')}
          </p>

          <div data-hero className="mt-7 flex flex-wrap items-center gap-3.5">
            <Button asChild size="lg" variant="metal">
              <Link href="/properties">
                {t('ctaPrimary')}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacts">{t('ctaSecondary')}</Link>
            </Button>
          </div>

          {/* trust ribbon — verified Google reviews + sister-agency listing +
              real client testimonials. Warm champagne-gold, lit from within. */}
          <div
            data-hero
            className="group/ribbon mt-7 flex max-w-2xl flex-col gap-4 rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,rgba(201,162,75,0.12),rgba(216,185,104,0.04))] px-5 py-4 shadow-[0_0_50px_-18px_rgba(201,162,75,0.45)] ring-1 ring-inset ring-white/5 backdrop-blur-md transition-colors duration-500 hover:border-gold/45 sm:flex-row sm:items-center sm:gap-6"
          >
            {/* Google 5.0 — New Level Group's verified developer profile */}
            <a
              href={site.reviews.google.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('trust.googleAria')}
              className="group flex items-center gap-3 transition-colors duration-500 ease-lux hover:text-cloud"
            >
              {/* authentic multicolour Google "G" — kept small, never recoloured */}
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden>
                <path fill="#4285F4" d="M23.06 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.2a5.3 5.3 0 0 1-2.3 3.48v2.89h3.72c2.18-2 3.44-4.96 3.44-8.38z" />
                <path fill="#34A853" d="M12 23.5c3.11 0 5.72-1.03 7.62-2.79l-3.72-2.89c-1.03.69-2.35 1.1-3.9 1.1-3 0-5.54-2.03-6.45-4.75H1.7v2.98A11.5 11.5 0 0 0 12 23.5z" />
                <path fill="#FBBC05" d="M5.55 14.17a6.9 6.9 0 0 1 0-4.34V6.85H1.7a11.5 11.5 0 0 0 0 10.3l3.85-2.98z" />
                <path fill="#EA4335" d="M12 4.75c1.69 0 3.21.58 4.4 1.72l3.3-3.3C17.72 1.24 15.11.25 12 .25A11.5 11.5 0 0 0 1.7 6.85l3.85 2.98C6.46 6.78 9 4.75 12 4.75z" />
              </svg>
              <span className="font-display text-2xl font-bold leading-none text-metal">
                {site.reviews.google.rating.toFixed(1)}
              </span>
              <span className="flex gap-0.5" role="img" aria-label={t('trust.starsAria')}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-3.5 fill-gold text-gold drop-shadow-[0_1px_2px_rgba(201,162,75,0.35)]"
                  />
                ))}
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="inline-flex items-center gap-1 text-[0.8rem] font-medium text-cloud/85">
                  {t('trust.googleRating')}
                  <ArrowUpRight className="size-3.5 text-gold/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="text-[0.68rem] uppercase tracking-wider text-cloud/45">
                  {t('trust.verifiedDeveloper')}
                </span>
              </span>
            </a>

            <span
              aria-hidden
              className="hidden h-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent sm:block"
            />

            {/* Ataberk Real Estate — sister agency, verified Google listing (no number) */}
            <a
              href={site.reviews.ataberk.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('trust.ataberkAria')}
              className="group flex items-center gap-2.5 transition-colors duration-500 ease-lux hover:text-cloud"
            >
              <BadgeCheck className="size-5 shrink-0 text-gold" aria-hidden />
              <span className="flex flex-col leading-tight">
                <span className="inline-flex items-center gap-1 text-[0.8rem] font-medium text-cloud/85">
                  {site.reviews.ataberk.name}
                  <ArrowUpRight className="size-3.5 text-gold/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="text-[0.68rem] uppercase tracking-wider text-cloud/45">
                  {t('trust.ataberk')}
                </span>
              </span>
            </a>

            <span
              aria-hidden
              className="hidden h-8 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent sm:block"
            />

            {/* Real client testimonials — internal link to /reviews */}
            <Link
              href="/reviews"
              aria-label={t('trust.reviewsAria')}
              className="group flex items-center gap-2.5 transition-colors duration-500 ease-lux hover:text-cloud"
            >
              <Star className="size-4 shrink-0 fill-gold text-gold" aria-hidden />
              <span className="inline-flex items-center gap-1 text-[0.8rem] font-medium text-cloud/85">
                {t('trust.reviews')}
                <ArrowUpRight className="size-3.5 text-gold/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* stats */}
          <div data-hero className="mt-9 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {stats.map((s) => {
              const m = /^(\d[\d,]*)(.*)$/.exec(s.value);
              return (
                <div key={s.value}>
                  <div className="font-display text-3xl font-bold text-gold sm:text-4xl">
                    {m ? (
                      <CountUp value={Number(m[1].replace(/,/g, ''))} suffix={m[2]} />
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-wider text-cloud/45">
                    {s.label[locale]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* search bar: flows under the hero on mobile, pinned to the base on desktop */}
      <div className="container-lux relative z-10 mt-10 w-full lg:absolute lg:inset-x-0 lg:bottom-10 lg:mt-0">
        <SearchBar />
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-cloud/40 lg:flex">
        <ArrowDown className="size-3.5 animate-bounce" />
        {t('scroll')}
      </div>
    </section>
  );
}
