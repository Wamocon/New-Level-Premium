'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { img } from '@/lib/images';
import { cn } from '@/lib/utils';

type Pin = {
  name: string;
  top: string;
  left: string;
  pulse?: boolean;
  hideOnMobile?: boolean;
};

const pins: Pin[] = [
  { name: 'Mahmutlar', top: '68%', left: '72%', pulse: true },
  { name: 'Oba', top: '46%', left: '54%' },
  { name: 'Kargıcak', top: '78%', left: '84%', hideOnMobile: true },
  { name: 'Cikcilli', top: '34%', left: '44%', hideOnMobile: true },
  { name: 'Kestel', top: '58%', left: '63%', pulse: true },
  { name: 'Avsallar', top: '24%', left: '20%', hideOnMobile: true },
];

export function MapCallout() {
  const t = useTranslations('map');

  return (
    <section id="map" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="relative min-h-[30rem] overflow-hidden rounded-3xl border border-white/8">
          {/* Faux-map background (decorative) */}
          <Image
            src={img('alanya-map', 1600, 900)}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
          {/* Dark overlays for depth */}
          <div className="absolute inset-0 bg-obsidian/85" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-obsidian via-obsidian/70 to-obsidian/40"
            aria-hidden="true"
          />
          {/* Subtle CSS grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]"
            aria-hidden="true"
          />
          {/* Gold radial glow accent */}
          <div
            className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Scattered district pins (decorative) */}
          <div className="absolute inset-0" aria-hidden="true">
            {pins.map((pin) => (
              <div
                key={pin.name}
                className={cn(
                  'absolute -translate-x-1/2 -translate-y-1/2',
                  pin.hideOnMobile && 'hidden sm:block',
                )}
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="relative flex flex-col items-center gap-2">
                  <span className="relative flex size-5 items-center justify-center">
                    {pin.pulse && (
                      <span className="absolute inline-flex size-8 animate-ping rounded-full bg-gold/30" />
                    )}
                    <MapPin className="relative size-5 text-gold drop-shadow-[0_2px_8px_rgba(201,162,75,0.6)]" />
                  </span>
                  <span className="glass whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium tracking-wide text-cloud">
                    {pin.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content block */}
          <div className="relative flex min-h-[30rem] items-end p-6 sm:p-10 lg:p-14">
            <div className="glass w-full max-w-md rounded-3xl p-8 sm:p-10">
              <SectionHeading
                eyebrow={t('eyebrow')}
                heading={t('heading')}
                subline={t('subline')}
                align="left"
                className="max-w-md"
              />
              <div className="mt-8">
                <Button asChild variant="metal" size="lg">
                  <Link href="/complexes">{t('cta')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
