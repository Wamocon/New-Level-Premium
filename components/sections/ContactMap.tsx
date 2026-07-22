'use client';

import { useTranslations } from 'next-intl';
import { site } from '@/lib/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { Phone, Mail, MapPin, Navigation, Clock } from 'lucide-react';

export function ContactMap() {
  const t = useTranslations('contact');

  const rows = [
    { icon: MapPin, label: t('addressLabel'), value: site.address, href: site.geo.mapsUrl },
    { icon: Phone, label: t('phoneLabel'), value: site.phone, href: site.phoneHref },
    { icon: Mail, label: t('emailLabel'), value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: t('hoursLabel'), value: t('hours') },
  ];

  return (
    <section id="contacts" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />

        <Reveal className="mt-12 grid overflow-hidden rounded-3xl border border-white/8 lg:grid-cols-[1fr_1.25fr]">
          {/* contact panel */}
          <div className="flex flex-col justify-between gap-8 bg-graphite/60 p-8 md:p-10">
            <ul className="space-y-5">
              {rows.map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cloud/45">{row.label}</div>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith('http') ? '_blank' : undefined}
                          rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-cloud/85 transition-colors hover:text-gold"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <div className="text-sm text-cloud/85">{row.value}</div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <a href={site.phoneHref}>
                  <Phone className="size-4" />
                  {t('call')}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  {t('whatsapp')}
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href={site.geo.directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" />
                  {t('directions')}
                </a>
              </Button>
            </div>
          </div>

          {/* live map (satellite / 3D view of the office location) */}
          <div className="relative min-h-[24rem] bg-ink lg:min-h-full">
            <iframe
              title="New Level Group — Alanya"
              src={site.geo.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
