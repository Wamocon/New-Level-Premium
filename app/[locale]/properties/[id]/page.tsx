import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { properties } from '@/lib/data/properties';
import { PropertyDetail } from '@/components/properties/PropertyDetail';

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
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
