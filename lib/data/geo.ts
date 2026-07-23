import type { Locale } from '@/lib/types';

/** Canonical city labels (property.city stores the English key). */
export const cityLabels: Record<string, Record<Locale, string>> = {
  Alanya: { en: 'Alanya', ru: 'Алания', tr: 'Alanya' },
  Antalya: { en: 'Antalya', ru: 'Анталья', tr: 'Antalya' },
  Istanbul: { en: 'Istanbul', ru: 'Стамбул', tr: 'İstanbul' },
  Mersin: { en: 'Mersin', ru: 'Мерсин', tr: 'Mersin' },
};

export const cityLabel = (city: string, locale: Locale): string =>
  cityLabels[city]?.[locale] ?? city;

/** Display order for cities (Alanya first, it is the company's home market). */
export const cityOrder = ['Alanya', 'Antalya', 'Istanbul', 'Mersin'];

const TR_MAP: Record<string, string> = {
  ı: 'i', İ: 'i', ş: 's', Ş: 's', ç: 'c', Ç: 'c',
  ü: 'u', Ü: 'u', ö: 'o', Ö: 'o', ğ: 'g', Ğ: 'g',
};

/** URL-safe slug from a Turkish/Latin place name. */
export const slugifyTr = (s: string): string =>
  s
    .replace(/[ıİşŞçÇüÜöÖğĞ]/g, (c) => TR_MAP[c] ?? c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
