'use client';

import { useTranslations, useLocale } from 'next-intl';
import { reviews } from '@/lib/data/reviews';
import { site } from '@/lib/data/site';
import type { Locale } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

export function Reviews() {
  const t = useTranslations('reviews');
  const locale = useLocale() as Locale;

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            <Button asChild variant="outline">
              <a href={site.reviews.google.url} target="_blank" rel="noopener noreferrer">
                {t('google')}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.reviews.ataberk.url} target="_blank" rel="noopener noreferrer">
                {site.reviews.ataberk.name}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal stagger={0.08} y={40} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-3xl border border-white/8 bg-graphite/60 p-6 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30"
            >
              <Quote className="size-7 text-gold/40" />
              <div className="mt-3 flex gap-0.5" aria-label={`${r.rating} / 5`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cloud/75">{r.text[locale]}</p>
              <div className="mt-6 border-t border-white/8 pt-4">
                <div className="font-display text-base text-cloud">{r.name}</div>
                <div className="text-xs text-cloud/45">{r.location[locale]}</div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
