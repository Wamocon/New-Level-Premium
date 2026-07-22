import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { PropertyBrowser } from '@/components/properties/PropertyBrowser';

export default async function PropertiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense>
      <PropertyBrowser />
    </Suspense>
  );
}
