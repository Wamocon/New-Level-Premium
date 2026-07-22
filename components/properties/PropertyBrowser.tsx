'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { properties, propertyTypeLabels } from '@/lib/data/properties';
import { districts } from '@/lib/data/districts';
import type { Locale, PropertyType } from '@/lib/types';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { cn } from '@/lib/utils';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';

const TYPE_ORDER: PropertyType[] = ['apartment', 'villa', 'penthouse', 'land', 'commercial'];
const ROOMS = ['1+1', '2+1', '3+1', '4+1'];
const PRICES = [150000, 250000, 400000, 600000];
type Sort = 'new' | 'price-asc' | 'price-desc' | 'area';

export function PropertyBrowser() {
  const t = useTranslations('listing');
  const ts = useTranslations('search');
  const locale = useLocale() as Locale;
  const params = useSearchParams();

  const [type, setType] = useState(params.get('type') ?? '');
  const [location, setLocation] = useState(params.get('location') ?? '');
  const [rooms, setRooms] = useState(params.get('rooms') ?? '');
  const [priceMax, setPriceMax] = useState(params.get('price') ?? '');
  const [seaView, setSeaView] = useState(false);
  const [sort, setSort] = useState<Sort>('new');

  const filtered = useMemo(() => {
    const list = properties.filter((p) => {
      if (type && p.type !== type) return false;
      if (location && p.district.en.toLowerCase() !== location) return false;
      if (rooms && p.rooms !== rooms) return false;
      if (priceMax && p.price > Number(priceMax)) return false;
      if (seaView && !p.seaView) return false;
      return true;
    });
    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'area') sorted.sort((a, b) => b.area - a.area);
    else sorted.sort((a, b) => b.completionYear - a.completionYear);
    return sorted;
  }, [type, location, rooms, priceMax, seaView, sort]);

  const reset = () => {
    setType('');
    setLocation('');
    setRooms('');
    setPriceMax('');
    setSeaView(false);
    setSort('new');
  };

  const fmt = (v: number) => new Intl.NumberFormat('en-US').format(v);

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        {/* header */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <SlidersHorizontal className="size-4" />
          {t('title')}
        </div>
        <h1 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-tight tracking-tight text-cloud">
          {ts('title')}
        </h1>
        <p className="mt-3 max-w-xl text-cloud/55">{t('subtitle')}</p>

        {/* filters */}
        <div className="glass mt-8 rounded-3xl p-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            <SelectField label={ts('type')} value={type} onChange={setType} placeholder={ts('typeAll')}
              options={TYPE_ORDER.map((tp) => ({ value: tp, label: propertyTypeLabels[tp][locale] }))} />
            <SelectField label={ts('location')} value={location} onChange={setLocation} placeholder={ts('locationAll')}
              options={districts.map((d) => ({ value: d.value, label: d.label[locale] }))} />
            <SelectField label={ts('rooms')} value={rooms} onChange={setRooms} placeholder={ts('roomsAll')}
              options={ROOMS.map((r) => ({ value: r, label: r }))} />
            <SelectField label={ts('price')} value={priceMax} onChange={setPriceMax} placeholder={ts('priceAll')}
              options={PRICES.map((p) => ({ value: String(p), label: `€${fmt(p)}` }))} />
            <SelectField label={t('sortLabel')} value={sort} onChange={(v) => setSort(v as Sort)} placeholder=""
              hidePlaceholder
              options={[
                { value: 'new', label: t('sortNew') },
                { value: 'price-asc', label: t('sortPriceAsc') },
                { value: 'price-desc', label: t('sortPriceDesc') },
                { value: 'area', label: t('sortArea') },
              ]} />
            <label className="flex cursor-pointer items-end gap-2.5 pb-2.5 text-sm text-cloud/75">
              <input type="checkbox" checked={seaView} onChange={(e) => setSeaView(e.target.checked)}
                className="size-4 accent-gold" />
              {t('seaView')}
            </label>
          </div>
        </div>

        {/* results bar */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-cloud/60">{t('results', { count: filtered.length })}</p>
          <button onClick={reset} className="flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold">
            <RotateCcw className="size-4" />
            {t('reset')}
          </button>
        </div>

        {/* grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-white/8 bg-graphite/40 p-16 text-center text-cloud/55">
            {t('empty')}
          </div>
        )}
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  hidePlaceholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  hidePlaceholder?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cloud/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-cloud outline-none transition-colors focus:border-gold/60',
          '[&>option]:bg-graphite [&>option]:text-cloud',
        )}
      >
        {!hidePlaceholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
