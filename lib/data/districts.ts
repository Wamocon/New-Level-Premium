import type { Locale } from '@/lib/types';
import { properties } from './properties';
import { cityOrder } from './geo';

export interface District {
  value: string;
  label: Record<Locale, string>;
  city: string;
  count: number;
}

/**
 * Districts are derived from the live listing data so the filter never offers a
 * dead option: every district shown has at least one property behind it.
 */
const map = new Map<string, District>();
for (const p of properties) {
  const value = p.district.en.toLowerCase();
  const existing = map.get(value);
  if (existing) existing.count += 1;
  else map.set(value, { value, label: p.district, city: p.city, count: 1 });
}

export const districts: District[] = [...map.values()].sort(
  (a, b) => b.count - a.count || a.label.en.localeCompare(b.label.en),
);

/** Districts grouped by city, for <optgroup>-style selects. */
export const districtsByCity: { city: string; districts: District[] }[] = cityOrder
  .map((city) => ({
    city,
    districts: districts
      .filter((d) => d.city === city)
      .sort((a, b) => a.label.en.localeCompare(b.label.en)),
  }))
  .filter((g) => g.districts.length > 0);
