import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const LOCALE_MAP: Record<string, string> = {
  ru: 'ru-RU',
  en: 'en-US',
  tr: 'tr-TR',
};

/** Format a EUR price with locale-aware grouping. */
export function formatPrice(value: number, locale = 'en'): string {
  return new Intl.NumberFormat(LOCALE_MAP[locale] ?? 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, locale = 'en'): string {
  return new Intl.NumberFormat(LOCALE_MAP[locale] ?? 'en-US').format(value);
}

/**
 * Tidy prose extracted from the source site: drop spaces before punctuation and
 * ensure a space after sentence punctuation that runs straight into the next
 * sentence (e.g. "Yes.DAB" -> "Yes. DAB"). Newlines are preserved.
 */
export function normalizeProse(text: string): string {
  return text
    .replace(/[ \t]+([,.;:!?»)])/g, '$1')
    .replace(/([.,;:!?])([A-ZÇĞİÖŞÜ])/g, '$1 $2')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

const TR_SLUG: Record<string, string> = {
  ı: 'i', İ: 'i', ş: 's', Ş: 's', ç: 'c', Ç: 'c',
  ü: 'u', Ü: 'u', ö: 'o', Ö: 'o', ğ: 'g', Ğ: 'g',
};

/** Slug for in-page anchor ids (keeps Latin/Cyrillic letters). */
export function slugify(text: string): string {
  return text
    .replace(/[ıİşŞçÇüÜöÖğĞ]/g, (c) => TR_SLUG[c] ?? c)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}
