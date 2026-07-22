import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { PropertyTypes } from '@/components/sections/PropertyTypes';
import { ValueProps } from '@/components/sections/ValueProps';
import { Projects } from '@/components/sections/Projects';
import { MapCallout } from '@/components/sections/MapCallout';
import { Services } from '@/components/sections/Services';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { ConsultationCta } from '@/components/sections/ConsultationCta';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedListings />
      <PropertyTypes />
      <ValueProps />
      <Projects />
      <MapCallout />
      <Services />
      <BlogTeaser />
      <ConsultationCta />
    </>
  );
}
