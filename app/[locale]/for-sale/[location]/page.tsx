import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  locations,
  locationSlugs,
  locationBySlug,
  propertiesForLocation,
} from '@/lib/data/locations';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { site } from '@/lib/data/site';
import { ArrowLeft, Phone } from 'lucide-react';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return locationSlugs.map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; location: string }>;
}): Promise<Metadata> {
  const { locale, location } = await params;
  const loc = locationBySlug(location);
  if (!loc) return {};
  const lc = locale as Locale;
  return {
    title: `${loc.title[lc]}`,
    description: loc.intro[lc],
    alternates: { canonical: `/${locale}/for-sale/${location}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locale: string; location: string }>;
}) {
  const { locale, location } = await params;
  setRequestLocale(locale);
  const loc = locationBySlug(location);
  if (!loc) notFound();
  const t = await getTranslations('page');
  const tp = await getTranslations('properties');
  const lc = (await getLocale()) as Locale;
  const list = propertiesForLocation(loc);
  const others = locations.filter((l) => l.slug !== loc.slug).slice(0, 12);
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(loc.title[lc])}`;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="size-4" />
          {tp('all')}
        </Link>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {loc.title[lc]}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cloud/70">{loc.intro[lc]}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>

        {/* internal links */}
        <div className="mt-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
            {tp('otherSearches')}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/for-sale/${o.slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-cloud/70 transition-colors hover:border-gold/40 hover:text-gold"
              >
                {o.title[lc]}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-gold/20 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(201,162,75,0.12),transparent)] p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-cloud md:text-3xl">{t('ctaTitle')}</h2>
              <p className="mt-2 max-w-xl text-cloud/70">{t('ctaText')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
