'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Project, Locale } from '@/lib/types';
import { img } from '@/lib/images';
import { site } from '@/lib/data/site';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { ArrowLeft, MapPin, Waves, Check, Phone } from 'lucide-react';

export function ComplexDetail({ project }: { project: Project }) {
  const t = useTranslations('complex');
  const locale = useLocale() as Locale;

  // Real hero + gallery. Placeholder interiors fill in until the full
  // per-complex galleries (60+ photos) land from the extraction batch.
  const gallery = [
    project.image,
    img('p-2', 1200, 900),
    img('p-3', 1200, 900),
    img('p-4', 1200, 900),
    img('p-6', 1200, 900),
    img('type-apartment', 1000, 1200),
    img('type-penthouse', 1000, 1200),
  ];
  const [active, setActive] = useState(0);

  const specs: [string, string | undefined][] = [
    [t('location'), project.location[locale]],
    [t('price'), `${t('from')} ${formatPrice(project.priceFrom, locale)}`],
    [t('layouts'), project.layouts],
    [t('area'), `${project.areaFrom}-${project.areaTo} m²`],
    [t('completion'), project.completion],
    [t('floors'), project.floors ? String(project.floors) : undefined],
    [t('balconies'), project.balconies],
  ];

  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    project.location.en + ', Turkey',
  )}&t=k&z=13&hl=en&output=embed`;

  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(project.name)}`;

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

            <dl className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {specs
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3.5">
                    <dt className="text-xs uppercase tracking-wider text-cloud/45">{k}</dt>
                    <dd className="text-sm font-semibold text-cloud">{v}</dd>
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
        <div className="mt-4 flex flex-wrap gap-3">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t('gallery')} ${i + 1}`}
              className={`relative aspect-[4/3] w-24 overflow-hidden rounded-xl border transition-colors ${
                i === active ? 'border-gold' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* overview + infrastructure */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-cloud">{t('overview')}</h2>
            <p className="mt-4 leading-relaxed text-cloud/70">{project.description[locale]}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-cloud/60">
              <Waves className="size-4 text-gold" />
              {t('distanceToSea')}: {project.distanceToSea} m · {project.beach[locale]}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-cloud/60">
              <MapPin className="size-4 text-gold" />
              {project.location[locale]}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/8 bg-graphite/50 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t('infrastructure')}
            </h3>
            <ul className="mt-4 space-y-3">
              {project.amenities.map((a) => (
                <li key={a.en} className="flex items-center gap-2.5 text-sm text-cloud/75">
                  <Check className="size-4 shrink-0 text-gold" />
                  {a[locale]}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* map */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/8">
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
    </section>
  );
}
