'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/lib/types';
import type { ServiceDetailData } from '@/lib/data/serviceDetails';
import { RichText } from '@/components/complexes/RichText';
import { site } from '@/lib/data/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

export function ServiceDetail({
  detail,
  others,
}: {
  detail: ServiceDetailData;
  others: ServiceDetailData[];
}) {
  const t = useTranslations('service');
  const locale = useLocale() as Locale;

  const hero = detail.images[0];
  const gallery = detail.images.slice(1);
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(detail.title[locale])}`;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-4" />
          {t('back')}
        </Link>

        {/* hero */}
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t('eyebrow')}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
              {detail.title[locale]}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="metal">
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  {t('cta')}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>

          {hero && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8">
              <Image
                src={hero}
                alt={detail.title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* body + aside */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div className="max-w-2xl">
            <RichText text={detail.body[locale]} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-gold/20 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(201,162,75,0.1),transparent)] p-7">
              <h3 className="font-display text-xl text-cloud">{t('helpTitle')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cloud/70">{t('helpText')}</p>
              <div className="mt-5 flex flex-col gap-3">
                <Button asChild variant="metal">
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4" />
                    {t('cta')}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>

            {others.length > 0 && (
              <div className="rounded-3xl border border-white/8 bg-graphite/50 p-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                  {t('other')}
                </h3>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="group flex items-center justify-between gap-3 text-sm text-cloud/75 transition-colors hover:text-gold"
                      >
                        {o.title[locale]}
                        <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* gallery */}
        {gallery.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
