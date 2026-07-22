'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { projects } from '@/lib/data/projects';
import type { Locale } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { formatPrice, cn } from '@/lib/utils';
import { MapPin, Waves, LayoutGrid, Ruler, CalendarDays, ArrowRight } from 'lucide-react';

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />

        <div className="mt-14 flex flex-col gap-16 md:gap-24">
          {projects.map((p, i) => (
            <Reveal key={p.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12" y={40}>
              <div
                className={cn(
                  'group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8',
                  i % 2 === 1 && 'lg:order-2',
                )}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-obsidian">
                    {p.badge[locale]}
                  </span>
                )}
              </div>

              <div className={cn(i % 2 === 1 && 'lg:order-1')}>
                <div className="flex items-center gap-2 text-sm text-cloud/55">
                  <CalendarDays className="size-4 text-gold" />
                  {p.completion}
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-cloud md:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-2 text-lg text-cloud/70">{p.tagline[locale]}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-cloud/55">
                  <MapPin className="size-4 text-gold" />
                  {p.location[locale]}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/8 py-5 sm:grid-cols-4">
                  <Stat icon={LayoutGrid} label={t('layoutsLabel')} value={p.layouts} />
                  <Stat icon={Ruler} label={t('areaLabel')} value={`${p.areaFrom}-${p.areaTo} m²`} />
                  <Stat
                    icon={Waves}
                    label={t('toSeaLabel')}
                    value={`${p.distanceToSea} m`}
                    sub={p.beach[locale]}
                  />
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-cloud/45">
                      {t('fromLabel')}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-metal">
                      {formatPrice(p.priceFrom, locale)}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.amenities.slice(0, 4).map((a) => (
                    <span
                      key={a.en}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-cloud/70"
                    >
                      {a[locale]}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <Button asChild variant="outline">
                    <Link href={`/complexes/${p.id}`}>
                      {t('cta')}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-cloud/45">
        <Icon className="size-3.5 text-gold/70" />
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-cloud">{value}</div>
      {sub && <div className="text-xs text-cloud/45">{sub}</div>}
    </div>
  );
}
