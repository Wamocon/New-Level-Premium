'use client';

import { useTranslations } from 'next-intl';
import { site } from '@/lib/data/site';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TelegramIcon,
  WhatsAppIcon,
  ViberIcon,
} from '@/components/icons/Social';

const SOCIAL_ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Send: TelegramIcon,
  WhatsApp: WhatsAppIcon,
  Viber: ViberIcon,
};

export function ContactPage() {
  const t = useTranslations('contact');

  const methods = [
    { icon: Phone, label: t('phoneLabel'), value: site.phone, href: site.phoneHref },
    { icon: WhatsAppIcon, label: t('whatsapp'), value: site.phone, href: site.whatsappHref, external: true },
    { icon: Mail, label: t('emailLabel'), value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: t('hoursLabel'), value: t('hours') },
  ];

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
          {t('eyebrow')}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {t('heading')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cloud/70">{t('subline')}</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* left: methods + address + socials */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => {
                const Icon = m.icon;
                const inner = (
                  <>
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <div className="mt-4 text-xs uppercase tracking-wider text-cloud/45">{m.label}</div>
                    <div className="mt-1 font-medium text-cloud">{m.value}</div>
                  </>
                );
                return m.href ? (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.external ? '_blank' : undefined}
                    rel={m.external ? 'noopener noreferrer' : undefined}
                    className="flex flex-col rounded-3xl border border-white/8 bg-white/5 p-5 transition-colors duration-500 hover:border-gold/30"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={m.label} className="flex flex-col rounded-3xl border border-white/8 bg-white/5 p-5">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-cloud/45">{t('addressLabel')}</div>
                  <div className="mt-1 text-cloud/85">{site.address}</div>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-5">
                <a href={site.geo.directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" />
                  {t('directions')}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {site.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? TelegramIcon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex size-11 items-center justify-center rounded-full border border-white/10 text-cloud/70 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* right: form */}
          <div className="glass rounded-3xl border border-white/8 p-6 md:p-8">
            <LeadForm subject="New Level Group: website enquiry (Contacts)" />
          </div>
        </div>

        {/* map */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/8">
          <iframe
            title="New Level Group, Alanya"
            src={site.geo.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[26rem] w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
