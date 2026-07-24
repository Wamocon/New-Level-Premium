'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';

/**
 * Interest-free installment estimator — the developer's own plan, which a generic
 * mortgage widget can't model. Math is honest (no fabricated interest); the CTA
 * hands the chosen numbers to WhatsApp. Labelled indicative, not a financial offer.
 */
export function PaymentPlanCalculator({
  price,
  refCode,
  title,
}: {
  price: number;
  refCode: string;
  title: string;
}) {
  const t = useTranslations('property');
  const locale = useLocale() as Locale;

  const [downPct, setDownPct] = useState(35);
  const [months, setMonths] = useState(12);
  const [fullPay, setFullPay] = useState(false);

  const effective = fullPay ? Math.round(price * 0.95) : price;
  const down = Math.round((effective * downPct) / 100);
  const remaining = effective - down;
  const quarters = Math.max(1, Math.round(months / 3));
  const perQuarter = fullPay ? 0 : Math.round(remaining / quarters);

  const money = (n: number) => formatPrice(n, locale);

  const waText = fullPay
    ? `${title} (${refCode}) — ${t('planDiscount')}: ${money(effective)}`
    : `${title} (${refCode}) — ${t('planDown')} ${downPct}% (${money(down)}), ${months} ${t(
        'planMonths',
      )}, ${t('planPerQuarter')} ${money(perQuarter)}`;
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="rounded-3xl border border-gold/20 bg-[linear-gradient(135deg,rgba(201,162,75,0.08),rgba(216,185,104,0.02))] p-6 md:p-7">
      <h2 className="font-display text-xl font-bold text-cloud">{t('planTitle')}</h2>

      <div className={fullPay ? 'pointer-events-none mt-6 space-y-6 opacity-40' : 'mt-6 space-y-6'}>
        {/* down payment */}
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cloud/70">{t('planDown')}</span>
            <span className="font-semibold text-cloud">
              {downPct}% · {money(down)}
            </span>
          </div>
          <input
            type="range"
            min={20}
            max={70}
            step={5}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            aria-label={t('planDown')}
            aria-valuetext={`${downPct}%`}
            disabled={fullPay}
            className="mt-2 w-full accent-gold"
          />
        </div>

        {/* term */}
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-cloud/70">{t('planTerm')}</span>
            <span className="font-semibold text-cloud">
              {months} {t('planMonths')}
            </span>
          </div>
          <input
            type="range"
            min={3}
            max={36}
            step={3}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            aria-label={t('planTerm')}
            aria-valuetext={`${months} ${t('planMonths')}`}
            disabled={fullPay}
            className="mt-2 w-full accent-gold"
          />
        </div>
      </div>

      {/* full-payment toggle */}
      <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm text-cloud/80">
        <input
          type="checkbox"
          checked={fullPay}
          onChange={(e) => setFullPay(e.target.checked)}
          className="size-4 accent-gold"
        />
        {t('planDiscount')}
      </label>

      {/* result */}
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
        <div>
          <div className="text-[0.62rem] uppercase tracking-wider text-cloud/45">{t('planDown')}</div>
          <div className="mt-1 font-display text-lg font-bold text-cloud">{money(down)}</div>
        </div>
        <div>
          <div className="text-[0.62rem] uppercase tracking-wider text-cloud/45">
            {t('planRemaining')}
          </div>
          <div className="mt-1 font-display text-lg font-bold text-cloud">{money(remaining)}</div>
        </div>
        <div>
          <div className="text-[0.62rem] uppercase tracking-wider text-cloud/45">
            {fullPay ? t('planTitle') : t('planPerQuarter')}
          </div>
          <div className="mt-1 font-display text-lg font-bold text-metal">
            {fullPay ? money(effective) : money(perQuarter)}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button asChild variant="metal" className="w-full">
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-4" />
            {t('planCta')}
          </a>
        </Button>
      </div>
      <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-cloud/40">{t('planNote')}</p>
    </div>
  );
}
