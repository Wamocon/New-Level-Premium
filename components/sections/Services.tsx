'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Building2, Wrench, BadgeCheck, Landmark, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/data/services';
import type { Locale } from '@/lib/types';

const ICONS = { Building2, Wrench, BadgeCheck, Landmark } as const;

export function Services() {
  const t = useTranslations('services');
  const locale = useLocale() as Locale;

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subline={t('subline')}
          align="center"
        />

        <Reveal
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
          y={40}
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Building2;
            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group flex flex-col rounded-3xl border border-white/8 bg-white/5 p-7 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
              >
                <span className="inline-flex w-fit rounded-2xl bg-gold/10 p-3 text-gold transition-colors duration-500 group-hover:bg-gold/20">
                  <Icon className="size-6" aria-hidden="true" />
                </span>

                <h3 className="mt-6 font-display text-lg text-linen">
                  {service.title[locale]}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-cloud/60">
                  {service.description[locale]}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold/80 transition-colors duration-500 group-hover:text-gold">
                  {t('cta')}
                  <ArrowRight className="size-4 transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              {t('cta')}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
