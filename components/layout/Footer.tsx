import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { site } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { propertyTypeLabels } from '@/lib/data/properties';
import type { Locale } from '@/lib/types';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TelegramIcon,
} from '@/components/icons/Social';
import { LogoMark } from '@/components/brand/LogoMark';

const SOCIAL_ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Send: TelegramIcon,
};

export async function Footer() {
  const t = await getTranslations('footer');
  const tn = await getTranslations('nav');
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="container-lux relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div className="max-w-sm">
            <LogoMark className="h-9 text-cloud" />
            <p className="mt-5 text-sm leading-relaxed text-cloud/55">{t('tagline')}</p>
            <div className="mt-6 flex gap-2.5">
              {site.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? TelegramIcon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 text-cloud/70 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* properties */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t('colProperties')}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cloud/60">
              <li>
                <Link href="/properties" className="transition-colors hover:text-gold">
                  {tn('objects')}
                </Link>
              </li>
              <li>
                <Link href="/complexes" className="transition-colors hover:text-gold">
                  {tn('complexes')}
                </Link>
              </li>
              <li>
                <Link href="/rental" className="transition-colors hover:text-gold">
                  {tn('rental')}
                </Link>
              </li>
              {Object.entries(propertyTypeLabels).map(([key, label]) => (
                <li key={key}>
                  <Link href="/properties" className="transition-colors hover:text-gold">
                    {label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t('colServices')}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cloud/60">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="transition-colors hover:text-gold">
                    {s.title[locale]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="transition-colors hover:text-gold">
                  {tn('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* contacts */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
              {t('colContacts')}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cloud/60">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 transition-colors hover:text-gold">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition-colors hover:text-gold">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-cloud/40 md:flex-row">
          <p>{t('rights', { year })}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-cloud/80">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cloud/80">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
