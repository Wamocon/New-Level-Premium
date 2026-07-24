'use client';

import { useTranslations, useLocale } from 'next-intl';
import { reviews } from '@/lib/data/reviews';
import { site } from '@/lib/data/site';
import type { Locale } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

export function ReviewsPage() {
  const t = useTranslations('reviews');
  const locale = useLocale() as Locale;
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
          {t('eyebrow')}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {t('heading')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cloud/70">{t('pageSubline')}</p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-metal">{avg}</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs text-cloud/50">Google</div>
            </div>
          </div>
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
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>

        {/* leave a review band */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gold/20 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(201,162,75,0.12),transparent)] p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-cloud md:text-3xl">{t('leaveTitle')}</h2>
              <p className="mt-2 max-w-xl text-cloud/70">{t('leaveText')}</p>
            </div>
            <Button asChild variant="metal">
              <a href={site.reviews.google.url} target="_blank" rel="noopener noreferrer">
                {t('google')}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
