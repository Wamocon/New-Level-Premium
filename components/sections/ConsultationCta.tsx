'use client';

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
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-onyx">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(201,162,75,0.18),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_90%_90%,rgba(46,90,110,0.14),transparent)]"
          />
          <div aria-hidden className="grain absolute inset-0 opacity-40" />

          <div className="relative grid items-center gap-12 p-8 md:p-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <SectionHeading
                eyebrow={t('eyebrow')}
                heading={t('heading')}
                subline={t('subline')}
                align="left"
              />
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-3"
                  aria-label={site.phone}
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-obsidian">
                    <Phone className="size-5" />
                  </span>
                  <span className="font-display text-xl text-cloud transition-colors group-hover:text-gold">
                    {site.phone}
                  </span>
                </a>
                <Button asChild variant="outline">
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    {t('secondary')}
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="glass rounded-3xl border border-white/8 p-6 md:p-8">
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
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-cloud placeholder-cloud/40 outline-none transition-colors duration-300 focus:border-gold/60"
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
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-cloud placeholder-cloud/40 outline-none transition-colors duration-300 focus:border-gold/60"
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
