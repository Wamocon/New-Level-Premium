'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { propertyTypeCards, propertyTypeLabels } from '@/lib/data/properties';
import type { Locale } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { ArrowUpRight } from 'lucide-react';

export function PropertyTypes() {
  const t = useTranslations('types');
  const locale = useLocale() as Locale;

  return (
    <section id="types" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subline={t('subline')}
        />

        <Reveal
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5"
          stagger={0.08}
          y={40}
        >
          {propertyTypeCards.map((card) => (
            <Link
              key={card.type}
              href={{ pathname: '/properties', query: { type: card.type } }}
              aria-label={propertyTypeLabels[card.type][locale]}
              className="group relative block overflow-hidden rounded-3xl border border-white/8 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={propertyTypeLabels[card.type][locale]}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                />

                {/* dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent" />

                {/* gold hover arrow */}
                <div className="absolute right-4 top-4 flex size-9 -translate-y-1 items-center justify-center rounded-full bg-gold text-obsidian opacity-0 transition-all duration-500 ease-lux group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </div>

                {/* label */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold tracking-tight text-linen">
                    {propertyTypeLabels[card.type][locale]}
                  </h3>
                  <p className="mt-1 text-sm text-cloud/60">
                    {t('count', { count: card.count })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
