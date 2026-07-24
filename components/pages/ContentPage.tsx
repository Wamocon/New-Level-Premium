'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/lib/types';
import type { ContentPageData } from '@/lib/data/contentPages';
import { RichText } from '@/components/complexes/RichText';
import { site, stats } from '@/lib/data/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { Phone } from 'lucide-react';

export function ContentPage({ page }: { page: ContentPageData }) {
  const t = useTranslations('page');
  const locale = useLocale() as Locale;

  const hero = page.images[0];
  const rest = page.images.slice(1);
  const intro = page.intro[locale].split('\n').map((l) => l.trim()).filter(Boolean);
  const cards = page.cards[locale];
  const isTimeline = page.layout === 'timeline';
  const isAbout = page.slug === 'about';
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(page.title[locale])}`;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        {/* hero: two columns with an image, otherwise a centred reading column */}
        {hero ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
                {page.title[locale]}
              </h1>
              {intro.length > 0 && (
                <div className="mt-6 space-y-4">
                  {intro.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-cloud/70">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8 bg-ink shadow-[0_30px_90px_-42px_rgba(0,0,0,0.45)]">
              <Image
                src={hero}
                alt={page.title[locale]}
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={
                  isAbout
                    ? 'object-cover motion-safe:animate-[heroDrift_18s_ease-in-out_infinite_alternate]'
                    : 'object-cover'
                }
                priority
              />
              {isAbout && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent"
                  />
                  <div className="on-dark absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                    {stats.slice(0, 2).map((stat) => (
                      <div
                        key={stat.value}
                        className="rounded-full border border-white/15 bg-obsidian/55 px-3.5 py-2 backdrop-blur-md"
                      >
                        <span className="font-display text-lg font-bold text-gold">{stat.value}</span>
                        <span className="ml-2 text-[0.65rem] uppercase tracking-wider text-cloud/70">
                          {stat.label[locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
              {page.title[locale]}
            </h1>
            {intro.length > 0 && (
              <div className="mt-6 space-y-4">
                {intro.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-cloud/70">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* body */}
        {page.body[locale] && (
          <div className={`mt-14 max-w-3xl${hero ? '' : ' mx-auto'}`}>
            <RichText text={page.body[locale]} />
          </div>
        )}

        {/* timeline */}
        {isTimeline && cards.length > 0 && (
          <ol className="relative mt-16 space-y-10 border-l border-white/10 pl-8 md:pl-10">
            {cards.map((c, i) => {
              const m = c.title.match(/^(\d{4})[\s,.:-]*(.*)$/);
              const year = m ? m[1] : '';
              const label = m ? m[2] : c.title;
              return (
                <li key={i} className="relative">
                  <span className="absolute -left-[2.35rem] top-1.5 size-2.5 rounded-full bg-gold ring-4 ring-obsidian md:-left-[2.85rem]" />
                  {year && (
                    <div className="font-display text-sm font-semibold tracking-wide text-gold">
                      {year}
                    </div>
                  )}
                  <h3 className="mt-1 font-display text-xl text-cloud">{label}</h3>
                  {c.text && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cloud/65">{c.text}</p>
                  )}
                </li>
              );
            })}
          </ol>
        )}

        {/* cards grid */}
        {!isTimeline && cards.length > 0 && (
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl border border-white/8 bg-white/5 p-6 transition-colors duration-500 hover:border-gold/30"
              >
                <h3 className="font-display text-lg text-cloud">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud/60">{c.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* gallery */}
        {rest.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {rest.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8"
              >
                <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* consultation band */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gold/20 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(201,162,75,0.12),transparent)] p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-cloud md:text-3xl">{t('ctaTitle')}</h2>
              <p className="mt-2 max-w-xl text-cloud/70">{t('ctaText')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="metal">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  {t('cta')}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
