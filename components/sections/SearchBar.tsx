'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Search } from 'lucide-react';
import type { FormEvent } from 'react';
import { districts } from '@/lib/data/districts';
import { propertyTypeLabels } from '@/lib/data/properties';
import type { Locale, PropertyType } from '@/lib/types';

const TYPES: PropertyType[] = ['apartment', 'villa', 'penthouse', 'land', 'commercial'];
const ROOMS = ['1+1', '2+1', '3+1', '4+1'];
const PRICES = [150000, 250000, 400000, 600000];

function Field({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5 px-5 py-3.5 text-left">
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cloud/45">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-cloud outline-none [&>option]:bg-graphite [&>option]:text-cloud"
        >
          {children}
        </select>
      </div>
    </label>
  );
}

export function SearchBar() {
  const t = useTranslations('search');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const fmt = (v: number) => new Intl.NumberFormat('en-US').format(v);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const p = new URLSearchParams();
    (['type', 'location', 'rooms', 'price'] as const).forEach((k) => {
      const v = fd.get(k);
      if (v) p.set(k, String(v));
    });
    const qs = p.toString();
    router.push(qs ? `/properties?${qs}` : '/properties');
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto flex w-full max-w-4xl flex-col divide-y divide-white/10 rounded-3xl p-2 shadow-2xl md:flex-row md:items-stretch md:divide-x md:divide-y-0"
    >
      <Field label={t('type')} name="type">
        <option value="">{t('typeAll')}</option>
        {TYPES.map((tp) => (
          <option key={tp} value={tp}>
            {propertyTypeLabels[tp][locale]}
          </option>
        ))}
      </Field>
      <Field label={t('location')} name="location">
        <option value="">{t('locationAll')}</option>
        {districts.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label[locale]}
          </option>
        ))}
      </Field>
      <Field label={t('rooms')} name="rooms">
        <option value="">{t('roomsAll')}</option>
        {ROOMS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </Field>
      <Field label={t('price')} name="price">
        <option value="">{t('priceAll')}</option>
        {PRICES.map((pr) => (
          <option key={pr} value={pr}>
            €{fmt(pr)}
          </option>
        ))}
      </Field>
      <div className="flex items-center p-2">
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gold px-8 font-medium text-obsidian transition-all duration-300 ease-lux hover:bg-gold-soft hover:shadow-[0_12px_40px_-12px_rgba(201,162,75,0.7)] md:w-auto"
        >
          <Search className="size-4" />
          {t('cta')}
        </button>
      </div>
    </form>
  );
}
