'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Navigation } from 'lucide-react';

/**
 * Click-to-load location map. Renders a warm facade first (zero Google JS/cookies
 * on load, LCP/consent friendly); the satellite iframe is injected only on click.
 * Coordinates are complex-level, so the copy says "approximate area" rather than
 * implying the exact unit — honest, and how ImmoScout handles hidden addresses.
 */
export function PropertyMap({ lat, lng, place }: { lat: number; lng: number; place: string }) {
  const t = useTranslations('property');
  const locale = useLocale();
  const [loaded, setLoaded] = useState(false);

  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&t=k&hl=${locale}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="on-dark relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10">
      {loaded ? (
        <iframe
          title={t('locationTitle')}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full"
          style={{ border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={t('showMap')}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(80%_80%_at_50%_38%,rgba(201,162,75,0.16),transparent),linear-gradient(180deg,#15121a,#0b0b0f)]"
        >
          {/* faux map grid */}
          <span className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:40px_40px]" />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
            <span className="absolute inline-flex size-14 animate-ping rounded-full bg-gold/20 motion-reduce:hidden" />
            <MapPin className="size-6 text-gold" />
          </span>
          <span className="relative rounded-full bg-gold px-5 py-2 text-sm font-semibold text-obsidian transition-transform duration-300 group-hover:scale-[1.03]">
            {t('showMap')}
          </span>
        </button>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-obsidian/85 to-transparent p-4">
        <span className="pointer-events-auto flex items-center gap-1.5 text-xs text-cloud/75">
          <MapPin className="size-3.5 shrink-0 text-gold" />
          {place}
        </span>
        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-obsidian/50 px-3 py-1.5 text-xs text-cloud backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <Navigation className="size-3.5" />
          {t('directions')}
        </a>
      </div>
    </div>
  );
}
