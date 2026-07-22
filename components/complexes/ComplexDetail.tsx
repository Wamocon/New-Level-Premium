'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Project, Locale } from '@/lib/types';
import type { ComplexDetailData } from '@/lib/data/complexDetails';
import { RichText } from '@/components/complexes/RichText';
import { img } from '@/lib/images';
import { site } from '@/lib/data/site';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { ArrowLeft, MapPin, Waves, Check, Phone, Navigation } from 'lucide-react';

export function ComplexDetail({
  project,
  detail,
}: {
  project: Project;
  detail: ComplexDetailData | null;
}) {
  const t = useTranslations('complex');
  const locale = useLocale() as Locale;

  const gallery =
    detail && detail.images.length
      ? detail.images
      : [
          project.image,
          img('p-2', 1200, 900),
          img('p-3', 1200, 900),
          img('p-4', 1200, 900),
          img('p-6', 1200, 900),
          img('type-apartment', 1000, 1200),
        ];
  const [active, setActive] = useState(0);

  const specs: [string, string | undefined][] = [
    [t('location'), project.location[locale]],
    [t('price'), `${t('from')} ${formatPrice(project.priceFrom, locale)}`],
    [t('layouts'), project.layouts],
    [t('area'), `${project.areaFrom}-${project.areaTo} m²`],
    [t('complexAreaLabel'), detail?.complexArea?.[locale]],
    [t('completion'), project.completion],
    [t('floors'), project.floors ? String(project.floors) : undefined],
    [t('balconies'), project.balconies],
  ];

  const coords = detail?.coordinates;
  const mapEmbed = coords
    ? `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&t=k&z=15&hl=en&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(project.location.en + ', Turkey')}&t=k&z=13&hl=en&output=embed`;
  const directions = coords
    ? `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`
    : site.geo.directionsUrl;

  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(project.name)}`;
  const infra = detail?.infrastructure[locale];

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <Link
          href="/complexes"
          className="inline-flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-4" />
          {t('back')}
        </Link>

        {/* hero */}
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {project.badge && (
              <span className="inline-block rounded-full bg-gold px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-obsidian">
                {project.badge[locale]}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-cloud/70">{project.tagline[locale]}</p>
            {detail && (
              <p className="mt-2 text-sm text-cloud/45">{detail.status[locale]}</p>
            )}

            <dl className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {specs
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-xs uppercase tracking-wider text-cloud/45">{k}</dt>
                    <dd className="text-right text-sm font-semibold text-cloud">{v}</dd>
                  </div>
                ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="metal">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  {t('getInfo')}
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

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8">
            <Image
              src={gallery[active]}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* gallery thumbnails */}
        <div
          data-lenis-prevent
          className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t('gallery')} ${i + 1}`}
              className={`relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-xl border transition-colors ${
                i === active ? 'border-gold' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* overview + highlights */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-cloud">{t('overview')}</h2>
            <div className="mt-4">
              {detail ? (
                <RichText text={detail.description[locale]} />
              ) : (
                <p className="leading-relaxed text-cloud/70">{project.description[locale]}</p>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cloud/60">
              <span className="flex items-center gap-2">
                <Waves className="size-4 text-gold" />
                {t('distanceToSea')}: {project.distanceToSea} m · {project.beach[locale]}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-gold" />
                {project.location[locale]}
              </span>
            </div>
          </div>

          {detail && (
            <aside className="rounded-3xl border border-white/8 bg-graphite/50 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                {t('benefitsTitle')}
              </h3>
              <ul className="mt-4 space-y-3">
                {detail.benefits[locale].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-cloud/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* layouts & prices */}
        {detail && detail.unitTypes.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-cloud">{t('layoutsTitle')}</h2>
            <div className="mt-6 overflow-x-auto rounded-3xl border border-white/8">
              <table className="w-full min-w-[28rem] text-sm">
                <thead>
                  <tr className="text-left text-[0.68rem] uppercase tracking-wider text-cloud/45">
                    <th className="px-6 py-4 font-semibold">{t('unitLayout')}</th>
                    <th className="px-6 py-4 font-semibold">{t('area')}</th>
                    <th className="px-6 py-4 font-semibold">{t('price')}</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.unitTypes.map((u, i) => (
                    <tr key={i} className="border-t border-white/8">
                      <td className="px-6 py-4 font-semibold text-cloud">{u.layout}</td>
                      <td className="px-6 py-4 text-cloud/70">{u.area}</td>
                      <td className="px-6 py-4 font-display font-bold text-metal">
                        {t('from')} {u.priceFrom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* infrastructure */}
        {infra && infra.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-cloud">{t('infrastructure')}</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
              {infra.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-cloud/70">
                  <span className="size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* distances + payment */}
        {detail && (
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-graphite/50 p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                {t('distancesTitle')}
              </h3>
              <ul className="mt-5 divide-y divide-white/8">
                {detail.distances.map((d) => (
                  <li key={d.to.en} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-cloud/70">{d.to[locale]}</span>
                    <span className="font-semibold text-cloud">{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/20 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(201,162,75,0.1),transparent)] p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                {t('paymentTitle')}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-cloud/75">
                {detail.paymentTerms[locale]}
              </p>
            </div>
          </div>
        )}

        {/* map */}
        <div className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-cloud">{t('location')}</h2>
            <Button asChild variant="ghost" size="sm">
              <a href={directions} target="_blank" rel="noopener noreferrer">
                <Navigation className="size-4" />
                {site.geo ? project.location[locale] : ''}
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/8">
            <iframe
              title={project.name}
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[24rem] w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
