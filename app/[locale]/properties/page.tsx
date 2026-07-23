import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { Link } from '@/i18n/navigation';
import { PropertyBrowser } from '@/components/properties/PropertyBrowser';
import { locations } from '@/lib/data/locations';
import { cityLabel, cityOrder } from '@/lib/data/geo';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'properties' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: `/${locale}/properties` },
  };
}

export default async function PropertiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('properties');
  const lc = (await getLocale()) as Locale;

  // Only the "all types" page per district, grouped by city, keeps the browse
  // rail readable while still linking to every real location.
  const allTypeLocations = locations.filter((l) => l.type === 'all');
  const grouped = cityOrder
    .map((city) => ({
      city,
      items: allTypeLocations
        .filter((l) => l.city === city)
        .sort((a, b) => b.count - a.count),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Suspense>
        <PropertyBrowser />
      </Suspense>

      <section className="border-t border-white/5 py-16">
        <div className="container-lux">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
            {t('browseByLocation')}
          </h2>
          <div className="mt-8 space-y-7">
            {grouped.map((g) => (
              <div key={g.city}>
                <h3 className="mb-3 text-sm font-medium text-cloud/50">{cityLabel(g.city, lc)}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/for-sale/${l.slug}`}
                      className="group rounded-full border border-white/10 px-4 py-2 text-sm text-cloud/70 transition-colors hover:border-gold/40 hover:text-gold"
                    >
                      {l.title[lc]}
                      <span className="ml-1.5 text-cloud/35 group-hover:text-gold/60">{l.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
