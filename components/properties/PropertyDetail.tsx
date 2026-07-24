'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Property, Locale } from '@/lib/types';
import { cityLabel } from '@/lib/data/geo';
import { propertyTypeLabels } from '@/lib/data/properties';
import { site } from '@/lib/data/site';
import { formatPrice, cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { PropertyMap } from '@/components/properties/PropertyMap';
import { NeighbourhoodPanel, type Distance } from '@/components/properties/NeighbourhoodPanel';
import { PaymentPlanCalculator } from '@/components/properties/PaymentPlanCalculator';
import { Lightbox } from '@/components/properties/Lightbox';
import {
  ArrowLeft,
  Bed,
  Maximize,
  Building,
  Waves,
  CalendarDays,
  Sofa,
  MapPin,
  Images,
} from 'lucide-react';

const CATEGORY_STYLES: Record<string, string> = {
  new: 'bg-gold text-obsidian',
  hot: 'bg-red-500/90 text-white',
  investment: 'bg-sea-soft text-white',
};

export interface PropertyDetailData {
  coordinates: { lat: number; lng: number };
  distances: Distance[];
  images: string[];
}

export function PropertyDetail({
  property,
  detail,
}: {
  property: Property;
  detail: PropertyDetailData;
}) {
  const t = useTranslations('property');
  const tf = useTranslations('featured');
  const locale = useLocale() as Locale;

  // Fuller image set: listing photos first, then the parent complex's shots.
  const gallery = Array.from(
    new Set([property.image, ...property.gallery, ...detail.images].filter(Boolean)),
  ).slice(0, 24);
  const [active, setActive] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLbIndex(i);
    setLbOpen(true);
  };

  const pricePerM2 = property.area ? Math.round(property.price / property.area) : 0;

  const specs = [
    { icon: Bed, label: t('rooms'), value: property.rooms },
    { icon: Maximize, label: t('area'), value: `${property.area} m²` },
    { icon: Building, label: t('floor'), value: `${property.floor}/${property.totalFloors}` },
    { icon: Waves, label: t('toSea'), value: `${property.distanceToSea} m` },
    { icon: CalendarDays, label: t('completion'), value: String(property.completionYear) },
    {
      icon: Sofa,
      label: t('furnished'),
      value: property.furnished ? t('furnished') : t('unfurnished'),
    },
  ];

  const description = t('autodesc', {
    type: propertyTypeLabels[property.type][locale],
    rooms: property.rooms,
    district: property.district[locale],
    city: cityLabel(property.city, locale),
    distance: property.distanceToSea,
    completion: property.completionYear,
  });

  const place = `${property.district[locale]}, ${cityLabel(property.city, locale)}`;
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(
    `${property.title[locale]} (${property.ref})`,
  )}`;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-4" />
          {t('back')}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          {/* gallery */}
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => openLightbox(active)}
              aria-label={t('viewAllPhotos')}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/8"
            >
              <Image
                src={gallery[active]}
                alt={property.title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute left-4 top-4 flex gap-2">
                {property.category.slice(0, 2).map((c) => (
                  <span
                    key={c}
                    className={cn(
                      'rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider',
                      CATEGORY_STYLES[c],
                    )}
                  >
                    {tf(c === 'new' ? 'tabNew' : c === 'hot' ? 'tabHot' : 'tabInvestment')}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-obsidian/55 px-3.5 py-2 text-xs font-medium text-cloud backdrop-blur-md transition-colors group-hover:bg-obsidian/80 group-hover:text-gold">
                <Images className="size-4" />
                {t('viewAllPhotos')} · {gallery.length}
              </span>
            </button>

            {gallery.length > 1 && (
              <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-1">
                {gallery.slice(0, 6).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={cn(
                      'relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl border transition-colors',
                      i === active ? 'border-gold' : 'border-white/10 hover:border-white/30',
                    )}
                  >
                    <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* info */}
          <div>
            <div className="text-xs uppercase tracking-wider text-cloud/45">
              {t('ref')} {property.ref}
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-cloud md:text-4xl">
              {property.title[locale]}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-cloud/60">
              <MapPin className="size-4 text-gold" />
              {place}
            </p>

            {/* pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.72rem] font-medium text-cloud/80">
                {t(`status${property.status}`)}
              </span>
              {property.seaView && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.72rem] font-medium text-gold">
                  <Waves className="size-3.5" />
                  {tf('seaView')}
                </span>
              )}
              <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.72rem] font-medium text-cloud/80">
                {propertyTypeLabels[property.type][locale]}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="text-sm uppercase tracking-wider text-cloud/50">{tf('from')}</span>
              <span className="font-display text-4xl font-bold text-metal">
                {formatPrice(property.price, locale)}
              </span>
              {pricePerM2 > 0 && (
                <span className="text-sm text-cloud/50">
                  {formatPrice(pricePerM2, locale)} {t('perM2')}
                </span>
              )}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 rounded-3xl border border-white/8 bg-graphite/50 p-6 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-cloud/45">
                    <s.icon className="size-3.5 text-gold/70" />
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-cloud">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                {t('description')}
              </h2>
              <p className="mt-3 leading-relaxed text-cloud/70">{description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="metal">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  {t('enquire')}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>{t('viewing')}</a>
              </Button>
            </div>
          </div>
        </div>

        {/* location + payment */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2-display font-display font-bold text-cloud">{t('locationTitle')}</h2>
            <div className="mt-5">
              <PropertyMap
                lat={detail.coordinates.lat}
                lng={detail.coordinates.lng}
                place={place}
              />
            </div>
            <p className="mt-3 text-xs text-cloud/45">{t('mapApprox')}</p>

            {detail.distances.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                  {t('nearbyTitle')}
                </h3>
                <div className="mt-4">
                  <NeighbourhoodPanel distances={detail.distances} />
                </div>
              </div>
            )}
          </div>

          <div>
            <PaymentPlanCalculator
              price={property.price}
              refCode={property.ref}
              title={property.title[locale]}
            />
          </div>
        </div>
      </div>

      <Lightbox
        images={gallery}
        index={lbIndex}
        open={lbOpen}
        onIndex={setLbIndex}
        onClose={() => setLbOpen(false)}
        alt={property.title[locale]}
      />
    </section>
  );
}
