import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { properties, propertyTypeLabels } from '@/lib/data/properties';
import { complexDetails } from '@/lib/data/complexDetails';
import { site } from '@/lib/data/site';
import { cityLabel } from '@/lib/data/geo';
import { PropertyDetail, type PropertyDetailData } from '@/components/properties/PropertyDetail';
import { SimilarListings } from '@/components/properties/SimilarListings';
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

  // Resolve real map coordinates + "what's nearby" from the parent complex,
  // falling back to the Alanya office if a projectId ever has no complex record.
  const complex = complexDetails[property.projectId];
  const detail: PropertyDetailData = {
    coordinates: complex?.coordinates ?? { lat: site.geo.lat, lng: site.geo.lng },
    distances: complex?.distances ?? [],
    images: complex?.images ?? [],
  };

  return (
    <>
      <PropertyDetail property={property} detail={detail} />
      <SimilarListings property={property} locale={locale as Locale} />
    </>
  );
}
