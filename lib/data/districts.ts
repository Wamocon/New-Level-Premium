import type { Locale } from '@/lib/types';

export interface District {
  value: string;
  label: Record<Locale, string>;
}

export const districts: District[] = [
  { value: 'mahmutlar', label: { ru: 'Махмутлар', en: 'Mahmutlar', tr: 'Mahmutlar' } },
  { value: 'oba', label: { ru: 'Оба', en: 'Oba', tr: 'Oba' } },
  { value: 'avsallar', label: { ru: 'Авсаллар', en: 'Avsallar', tr: 'Avsallar' } },
  { value: 'cikcilli', label: { ru: 'Джикджилли', en: 'Cikcilli', tr: 'Cikcilli' } },
  { value: 'kestel', label: { ru: 'Кестель', en: 'Kestel', tr: 'Kestel' } },
  { value: 'tosmur', label: { ru: 'Тосмур', en: 'Tosmur', tr: 'Tosmur' } },
];
