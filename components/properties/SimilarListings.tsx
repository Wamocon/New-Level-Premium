import { getTranslations } from 'next-intl/server';
import type { Property, Locale } from '@/lib/types';
import { properties } from '@/lib/data/properties';
import { PropertyCard } from '@/components/ui/PropertyCard';

/** Rank by same complex, then district/city, then type, then nearest price. */
function pickSimilar(current: Property, all: Property[], n = 4): Property[] {
  const score = (p: Property) => {
    let s = 0;
    if (p.projectId === current.projectId) s += 100;
    if (p.district.en === current.district.en) s += 40;
    if (p.city === current.city) s += 20;
    if (p.type === current.type) s += 15;
    s -= Math.min(30, Math.abs(p.price - current.price) / 20000);
    return s;
  };
  return all
    .filter((p) => p.id !== current.id)
    .sort((a, b) => score(b) - score(a))
    .slice(0, n);
}

/** RSC — zero client bundle beyond the (already-client) PropertyCard. */
export async function SimilarListings({
  property,
  locale,
}: {
  property: Property;
  locale: Locale;
}) {
  const t = await getTranslations({ locale, namespace: 'property' });
  const similar = pickSimilar(property, properties);
  if (!similar.length) return null;

  return (
    <section className="border-t border-white/8 py-16 md:py-20">
      <div className="container-lux">
        <h2 className="h2-display font-display font-bold text-cloud">{t('similarTitle')}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {similar.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
