'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { ScrambleText } from '@/components/anim/ScrambleText';
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
  const video = useRef<HTMLVideoElement>(null);

  // Play the aerial backdrop only while the hero is on screen / the tab is visible.
  useIsomorphicLayoutEffect(() => {
    const v = video.current;
    if (!v || prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !document.hidden) v.play?.().catch(() => {});
        else v.pause?.();
      },
      { threshold: 0.1 },
    );
    io.observe(v);
    const onVis = () => {
      if (document.hidden) v.pause?.();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      // Staggered entrance. One extra node (trust ribbon) now, so tighten the
      // cadence a touch so the stats/search don't arrive noticeably later.
      gsap.from('[data-hero]', {
        y: 46,
        opacity: 0,
        duration: 1.15,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.1,
      });
      // Slow scroll parallax on the backdrop so it drifts under the content as
      // the hero hands off to the next section.
      if (backdrop.current) {
        gsap.fromTo(
          backdrop.current,
          { yPercent: -5 },
          {
            yPercent: 5,
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
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="grain on-dark relative flex min-h-dvh flex-col justify-start overflow-hidden bg-[linear-gradient(180deg,#1c1610_0%,#14131a_52%,#0a0b0e_100%)] pb-16 pt-28 lg:justify-center lg:pb-40"
    >
      {/* aerial video backdrop — poster paints first (LCP); the muted video
          crossfades in over it, with a slow Ken Burns push + scroll parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={backdrop} className="absolute inset-x-0 top-[-6%] h-[112%]">
          <div className="relative size-full motion-safe:animate-[heroDrift_26s_ease-in-out_infinite_alternate] motion-reduce:animate-none">
            <Image
              src="/buildings/aerial-poster.jpg"
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <video
              ref={video}
              className="grade-warm absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out"
              muted
              loop
              playsInline
              preload="none"
              onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
            >
              <source src="/buildings/aerial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* atmospheric gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_0%,transparent_35%,rgba(8,8,10,0.65)_78%,#08080A_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-obsidian to-transparent"
      />

      {/* content */}
      <div className="container-lux relative z-10">
        <div className="max-w-3xl">
          <div
            data-hero
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(201,162,75,0.8)]" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cloud/70">
              {t('eyebrow')}
            </span>
          </div>

          <h1 className="display font-extrabold">
            <span data-hero className="block text-cloud">
              {t('headlineTop')}
            </span>
            <span data-hero className="block">
              <ScrambleText text={t('headlineAccent')} className="text-metal" duration={1.8} delay={0.6} />
            </span>
          </h1>

          <p
            data-hero
            className="mt-7 max-w-xl text-base leading-relaxed text-cloud/65 sm:text-lg"
          >
            {t('subline')}
          </p>

          <div data-hero className="mt-9 flex flex-wrap items-center gap-3.5">
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
            className="group/ribbon mt-9 flex max-w-2xl flex-col gap-4 rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,rgba(201,162,75,0.12),rgba(216,185,104,0.04))] px-5 py-4 shadow-[0_0_50px_-18px_rgba(201,162,75,0.45)] ring-1 ring-inset ring-white/5 backdrop-blur-md transition-colors duration-500 hover:border-gold/45 sm:flex-row sm:items-center sm:gap-6"
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
          <div data-hero className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
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
