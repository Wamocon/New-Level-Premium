'use client';

import { useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Click-to-load map: renders a warm facade first (zero Google JS/cookies on load
 * — LCP/INP + consent friendly), swapping in the iframe only on click. Layout is
 * fully driven by `className` (the caller sizes/positions it); children render on
 * top for overlay callouts. Reuses the generic `property.showMap`/`directions`
 * copy so no new i18n keys are needed.
 */
export function MapFacade({
  src,
  title,
  directionsUrl,
  eager = false,
  className,
  children,
}: {
  src: string;
  title: string;
  directionsUrl?: string;
  eager?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const t = useTranslations('property');
  const [loaded, setLoaded] = useState(eager);

  return (
    <div className={cn('on-dark overflow-hidden', className)}>
      {loaded ? (
        <iframe
          title={title}
          src={src}
          loading={eager ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full"
          style={{ border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={t('showMap')}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(80%_80%_at_50%_38%,rgba(201,162,75,0.15),transparent),linear-gradient(180deg,#141019,#0b0b0f)]"
        >
          <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]" />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
            <span className="absolute inline-flex size-14 animate-ping rounded-full bg-gold/20 motion-reduce:hidden" />
            <MapPin className="size-6 text-gold" />
          </span>
          <span className="relative rounded-full bg-gold px-5 py-2 text-sm font-semibold text-obsidian transition-transform duration-300 group-hover:scale-[1.03]">
            {t('showMap')}
          </span>
        </button>
      )}

      {directionsUrl && (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-obsidian/55 px-3 py-1.5 text-xs text-cloud backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <Navigation className="size-3.5" />
          {t('directions')}
        </a>
      )}

      {children}
    </div>
  );
}
