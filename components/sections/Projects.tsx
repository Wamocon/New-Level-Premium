'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { projects } from '@/lib/data/projects';
import type { Locale } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { cn, formatPrice } from '@/lib/utils';
import { MapPin, ArrowRight } from 'lucide-react';

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subline={t('subline')}
          align="center"
        />

        <div className="mt-16 flex flex-col gap-20 md:gap-28 lg:gap-32">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;

            return (
              <Reveal
                key={project.id}
                className="group grid items-center gap-10 lg:grid-cols-2"
                y={40}
              >
                {/* image */}
                <div className={cn('relative', flipped && 'lg:order-2')}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8">
                    <Image
                      src={project.image}
                      alt={`${project.name} — ${project.location[locale]}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 grain opacity-30" />
                  </div>
                </div>

                {/* content */}
                <div
                  className={cn(
                    'flex flex-col items-start',
                    flipped && 'lg:order-1',
                  )}
                >
                  <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {project.completion}
                  </span>

                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-linen md:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-lg text-lg text-cloud/70">
                    {project.tagline[locale]}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-mist">
                    <MapPin className="size-4 text-gold" aria-hidden="true" />
                    <span>{project.location[locale]}</span>
                  </div>

                  {/* stats */}
                  <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-4 border-y border-white/8 py-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-xl font-bold text-linen md:text-2xl">
                        {project.units}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-mist">
                        {t('unitsLabel')}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-xl font-bold text-linen md:text-2xl">
                        {project.distanceToSea}
                        <span className="text-base font-normal text-cloud/60"> m</span>
                      </span>
                      <span className="text-xs uppercase tracking-wide text-mist">
                        {t('toSeaLabel')}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-xl font-bold text-metal md:text-2xl">
                        {formatPrice(project.priceFrom, locale)}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-mist">
                        {t('fromLabel')}
                      </span>
                    </div>
                  </div>

                  {/* amenities */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity[locale]}
                        className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-cloud/70"
                      >
                        {amenity[locale]}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild variant="outline">
                      <Link href="/complexes">
                        {t('cta')}
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
