'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Search } from 'lucide-react';
import type { FormEvent } from 'react';

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
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/properties');
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto flex w-full max-w-4xl flex-col divide-y divide-white/10 rounded-3xl p-2 shadow-2xl md:flex-row md:items-stretch md:divide-x md:divide-y-0"
    >
      <Field label={t('type')} name="type">
        <option value="">{t('typeAll')}</option>
        <option value="apartment">Apartments</option>
        <option value="villa">Villas</option>
        <option value="penthouse">Penthouses</option>
        <option value="land">Land</option>
        <option value="commercial">Commercial</option>
      </Field>
      <Field label={t('location')} name="location">
        <option value="">{t('locationAll')}</option>
        <option value="mahmutlar">Mahmutlar</option>
        <option value="oba">Oba</option>
        <option value="kargicak">Kargıcak</option>
        <option value="cikcilli">Cikcilli</option>
        <option value="kestel">Kestel</option>
        <option value="avsallar">Avsallar</option>
      </Field>
      <Field label={t('rooms')} name="rooms">
        <option value="">{t('roomsAll')}</option>
        <option value="1+1">1+1</option>
        <option value="2+1">2+1</option>
        <option value="3+1">3+1</option>
        <option value="4+1">4+1</option>
      </Field>
      <Field label={t('price')} name="price">
        <option value="">{t('priceAll')}</option>
        <option value="150000">€150,000</option>
        <option value="250000">€250,000</option>
        <option value="400000">€400,000</option>
        <option value="600000">€600,000+</option>
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
