'use client';

import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import { Waves, Plane, Building2, MapPin } from 'lucide-react';

export type Distance = { to: Record<Locale, string>; value: string };

function iconFor(en: string) {
  const l = en.toLowerCase();
  if (/(sea|beach|coast)/.test(l)) return Waves;
  if (/airport/.test(l)) return Plane;
  if (/(center|centre|boulevard|downtown|mall|market)/.test(l)) return Building2;
  return MapPin;
}

/**
 * "What's nearby" — real, already-localized distances from the parent complex.
 * No invented walk/transit scores; icons chosen from the English key.
 */
export function NeighbourhoodPanel({ distances }: { distances: Distance[] }) {
  const locale = useLocale() as Locale;
  if (!distances?.length) return null;

  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
      {distances.map((d, i) => {
        const Icon = iconFor(d.to.en ?? '');
        return (
          <li
            key={i}
            className="flex items-center justify-between gap-3 border-b border-white/8 py-3 last:border-0"
          >
            <span className="flex items-center gap-2.5 text-sm text-cloud/75">
              <Icon className="size-4 shrink-0 text-gold/70" aria-hidden />
              {d.to[locale]}
            </span>
            <span className="shrink-0 text-sm font-medium text-cloud">{d.value}</span>
          </li>
        );
      })}
    </ul>
  );
}
