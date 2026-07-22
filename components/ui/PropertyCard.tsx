'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Property, Locale } from '@/lib/types';
import { projectById } from '@/lib/data/projects';
import { formatPrice, cn } from '@/lib/utils';
import { Bed, Maximize, Building, Waves, Heart } from 'lucide-react';

const CATEGORY_STYLES: Record<string, string> = {
  new: 'bg-gold text-obsidian',
  hot: 'bg-red-500/90 text-white',
  investment: 'bg-sea-soft text-white',
};

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const t = useTranslations('featured');
  const locale = useLocale() as Locale;
  const [fav, setFav] = useState(false);
  const project = projectById(property.projectId);
  const primaryCat = property.category[0];

  const catLabel: Record<string, string> = {
    new: t('tabNew'),
    hot: t('tabHot'),
    investment: t('tabInvestment'),
  };

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-graphite/60 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/10 to-transparent" />

        {/* badges */}
        <div className="absolute left-4 top-4 flex gap-2">
          {property.category.slice(0, 2).map((c) => (
            <span
              key={c}
              className={cn(
                'rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider',
                CATEGORY_STYLES[c],
              )}
            >
              {catLabel[c]}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setFav((v) => !v);
          }}
          aria-label="Save"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-obsidian/40 text-cloud backdrop-blur-md transition-colors hover:bg-obsidian/70"
        >
          <Heart className={cn('size-4', fav && 'fill-gold text-gold')} />
        </button>

        {/* price */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[0.7rem] uppercase tracking-wider text-cloud/60">
            {t('from')}
          </span>
          <div className="font-display text-2xl font-bold text-metal">
            {formatPrice(property.price, locale)}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-cloud transition-colors group-hover:text-gold">
            {property.title[locale]}
          </h3>
          <p className="mt-1 text-sm text-cloud/50">
            {project?.name} · {property.district[locale]}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/8 pt-4 text-sm text-cloud/65">
          <span className="flex items-center gap-1.5">
            <Bed className="size-4 text-gold/70" />
            {property.rooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-gold/70" />
            {property.area} m²
          </span>
          <span className="flex items-center gap-1.5">
            <Building className="size-4 text-gold/70" />
            {property.floor}/{property.totalFloors}
          </span>
          {property.seaView && (
            <span className="flex items-center gap-1.5 text-gold">
              <Waves className="size-4" />
              {t('seaView')}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
