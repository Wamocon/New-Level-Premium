'use client';

import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { MapFacade } from '@/components/ui/MapFacade';
import { site } from '@/lib/data/site';

// Real satellite view of the Alanya coast, where the complexes are.
const ALANYA_EMBED =
  'https://maps.google.com/maps?q=Alanya,Antalya,Turkey&t=k&z=11&hl=en&output=embed';

export function MapCallout() {
  const t = useTranslations('map');

  return (
    <section id="map" className="relative py-24 md:py-32">
      <div className="container-lux">
        <Reveal
          y={30}
          className="relative h-[26rem] overflow-hidden rounded-[2rem] border border-white/8 bg-ink md:h-[34rem]"
        >
          <MapFacade
            src={ALANYA_EMBED}
            title="Satellite map of Alanya"
            eager
            className="absolute inset-0"
          />

          {/* readability gradient (map stays interactive on the clear side) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent md:bg-gradient-to-r md:from-obsidian md:via-obsidian/65 md:to-transparent"
          />

          {/* content */}
          <div className="on-dark pointer-events-none absolute inset-x-0 bottom-0 p-6 md:inset-y-0 md:right-auto md:flex md:w-[30rem] md:max-w-[82%] md:flex-col md:justify-center md:p-12">
            <div className="pointer-events-auto max-w-md">
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
                {t('eyebrow')}
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-cloud">
                {t('heading')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cloud/70">{t('subline')}</p>
              <div className="mt-7">
                <Button asChild variant="metal">
                  <a href={site.geo.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="size-4" />
                    {t('cta')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
