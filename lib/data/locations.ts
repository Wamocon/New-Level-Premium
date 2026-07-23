import type { Locale, PropertyType } from '@/lib/types';
import { properties } from '@/lib/data/properties';
import { slugifyTr } from '@/lib/data/geo';
import { formatPrice } from '@/lib/utils';

const TYPE: Record<
  'all' | PropertyType,
  { slug: string; noun: Record<Locale, string>; heading: Record<Locale, string> }
> = {
  all: {
    slug: 'property',
    noun: { ru: 'Недвижимость', en: 'Property', tr: 'Gayrimenkul' },
    heading: { ru: 'Недвижимость', en: 'Property', tr: 'Gayrimenkul' },
  },
  apartment: {
    slug: 'apartments',
    noun: { ru: 'Квартиры', en: 'Apartments', tr: 'Daireler' },
    heading: { ru: 'Квартиры', en: 'Apartments', tr: 'Daireler' },
  },
  villa: {
    slug: 'villas',
    noun: { ru: 'Виллы и дома', en: 'Villas and houses', tr: 'Villalar ve evler' },
    heading: { ru: 'Виллы', en: 'Villas', tr: 'Villalar' },
  },
  penthouse: {
    slug: 'penthouses',
    noun: { ru: 'Пентхаусы', en: 'Penthouses', tr: 'Çatı katları' },
    heading: { ru: 'Пентхаусы', en: 'Penthouses', tr: 'Çatı katları' },
  },
  land: {
    slug: 'land',
    noun: { ru: 'Земельные участки', en: 'Land plots', tr: 'Arsalar' },
    heading: { ru: 'Земля', en: 'Land', tr: 'Arsa' },
  },
  commercial: {
    slug: 'commercial',
    noun: { ru: 'Коммерческая недвижимость', en: 'Commercial property', tr: 'Ticari gayrimenkul' },
    heading: { ru: 'Коммерция', en: 'Commercial', tr: 'Ticari' },
  },
};

export interface LocationPage {
  slug: string;
  districtKey: string;
  city: string;
  type: 'all' | PropertyType;
  count: number;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
}

interface DistrictRecord {
  key: string;
  slug: string;
  city: string;
  label: Record<Locale, string>;
}

// Districts derived straight from the live listing data (labels + city included),
// so every location page maps to real inventory.
const districtRecords: DistrictRecord[] = (() => {
  const m = new Map<string, DistrictRecord>();
  for (const p of properties) {
    if (!m.has(p.district.en)) {
      m.set(p.district.en, {
        key: p.district.en,
        slug: slugifyTr(p.district.en),
        city: p.city,
        label: p.district,
      });
    }
  }
  return [...m.values()];
})();

const matches = (p: (typeof properties)[number], key: string, type: 'all' | PropertyType) =>
  p.district.en === key && (type === 'all' || p.type === type);

const build = (): LocationPage[] => {
  const out: LocationPage[] = [];
  const types: ('all' | PropertyType)[] = ['all', 'apartment', 'villa', 'penthouse', 'land', 'commercial'];
  for (const d of districtRecords) {
    for (const type of types) {
      const list = properties.filter((p) => matches(p, d.key, type));
      if (!list.length) continue;
      const minPrice = Math.min(...list.map((p) => p.price));
      const T = TYPE[type];
      const title: Record<Locale, string> = {
        en: `${T.heading.en} in ${d.label.en}`,
        ru: `${T.heading.ru} в ${d.label.ru}`,
        tr: `${d.label.tr} ${T.heading.tr}`,
      };
      const intro: Record<Locale, string> = {
        en: `${T.noun.en} for sale in ${d.label.en}. ${list.length} listings from New Level Group, direct from the developer, with prices from ${formatPrice(minPrice, 'en')}. Interest-free installments and full legal support to the TAPU.`,
        ru: `${T.noun.ru} на продажу в ${d.label.ru}. ${list.length} предложений от New Level Group напрямую от застройщика, с ценами от ${formatPrice(minPrice, 'ru')}. Беспроцентная рассрочка и полное юридическое сопровождение до TAPU.`,
        tr: `${d.label.tr} satılık ${T.noun.tr.toLowerCase()}. New Level Group'tan, doğrudan geliştiriciden ${list.length} ilan, ${formatPrice(minPrice, 'tr')} başlangıç fiyatıyla. Faizsiz taksit ve TAPU'ya kadar tam hukuki destek.`,
      };
      out.push({
        slug: type === 'all' ? `property-${d.slug}` : `${T.slug}-${d.slug}`,
        districtKey: d.key,
        city: d.city,
        type,
        count: list.length,
        title,
        intro,
      });
    }
  }
  return out;
};

export const locations = build();
export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
export const locationSlugs = locations.map((l) => l.slug);
export const propertiesForLocation = (loc: LocationPage) =>
  properties.filter((p) => matches(p, loc.districtKey, loc.type));
