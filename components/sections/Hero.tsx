'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { ScrambleText } from '@/components/anim/ScrambleText';
import { SearchBar } from '@/components/sections/SearchBar';
import { stats } from '@/lib/data/site';
import type { Locale } from '@/lib/types';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const root = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', {
        y: 46,
        opacity: 0,
        duration: 1.15,
        ease: 'power3.out',
        stagger: 0.11,
        delay: 0.15,
      });
      gsap.from('[data-hero-canvas]', {
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out',
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="grain relative flex min-h-dvh flex-col justify-center overflow-hidden pb-40 pt-28"
    >
      {/* 3D backdrop */}
      <div data-hero-canvas className="absolute inset-0 z-0">
        <HeroCanvas />
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

          <h1 className="font-display text-[clamp(2.6rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-tight">
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

          {/* stats */}
          <div data-hero className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="font-display text-3xl font-bold text-gold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[0.72rem] uppercase tracking-wider text-cloud/45">
                  {s.label[locale]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* search bar */}
      <div className="container-lux absolute inset-x-0 bottom-10 z-10">
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
