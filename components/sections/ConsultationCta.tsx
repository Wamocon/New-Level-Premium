'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, Check, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/data/site';

export function ConsultationCta() {
  const t = useTranslations('cta');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      t('heading'),
      `${t('name')}: ${name.trim()}`,
      `${t('phone')}: ${phone.trim()}`,
    ].join('\n');
    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="on-dark relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-onyx">
          {/* Alanya cityscape backdrop */}
          <Image
            src="/images/original/2-D3qltBdX.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 92vw, 84rem"
            className="object-cover opacity-45"
            aria-hidden
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c1015]/90 via-[#101116]/80 to-[#121820]/68"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_18%_18%,rgba(201,162,75,0.16),transparent)]"
          />
          <div aria-hidden className="grain absolute inset-0 opacity-30" />

          <div className="relative grid items-center gap-12 p-8 md:p-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <SectionHeading
                eyebrow={t('eyebrow')}
                heading={t('heading')}
                subline={t('subline')}
                align="left"
              />

              {/* personal advisor */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40">
                  <Image
                    src="/images/original/manager-DDFX_ukq.png"
                    alt={t('advisor')}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0.5 right-0.5 size-3.5 rounded-full bg-emerald-400 ring-2 ring-onyx" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cloud">{t('advisor')}</div>
                  <div className="text-xs text-cloud/50">{t('advisorNote')}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    {t('secondary')}
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl border border-white/12 bg-[#17171d]/90 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
                    <Check className="size-8 text-gold" />
                  </div>
                  <p className="max-w-sm text-lg text-cloud/80">{t('success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="cta-name" className="sr-only">
                      {t('name')}
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('name')}
                      autoComplete="name"
                      required
                      minLength={2}
                      className="w-full rounded-xl border border-white/14 bg-white/[0.07] px-4 py-3.5 text-cloud placeholder-cloud/55 outline-none transition-colors duration-300 focus:border-gold/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-phone" className="sr-only">
                      {t('phone')}
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('phone')}
                      autoComplete="tel"
                      required
                      minLength={7}
                      inputMode="tel"
                      className="w-full rounded-xl border border-white/14 bg-white/[0.07] px-4 py-3.5 text-cloud placeholder-cloud/55 outline-none transition-colors duration-300 focus:border-gold/70"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 py-1 text-sm text-cloud/60">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 size-4 shrink-0 accent-gold"
                    />
                    <span>{t('consent')}</span>
                  </label>

                  <Button type="submit" variant="metal" className="w-full" disabled={!consent}>
                    {t('submit')}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
