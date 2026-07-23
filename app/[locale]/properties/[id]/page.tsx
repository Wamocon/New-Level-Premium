import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { properties, propertyTypeLabels } from '@/lib/data/properties';
import { cityLabel } from '@/lib/data/geo';
import { PropertyDetail } from '@/components/properties/PropertyDetail';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) return {};
  const lc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'property' });
  const description = t('autodesc', {
    type: propertyTypeLabels[property.type][lc],
    rooms: property.rooms,
    district: property.district[lc],
    city: cityLabel(property.city, lc),
    distance: property.distanceToSea,
    completion: property.completionYear,
  });
  return {
    title: property.title[lc],
    description,
    alternates: { canonical: `/${locale}/properties/${id}` },
    openGraph: { images: property.image ? [property.image] : [] },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}
