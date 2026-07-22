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
