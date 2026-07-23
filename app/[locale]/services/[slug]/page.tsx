import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { serviceDetails, serviceSlugs } from '@/lib/data/serviceDetails';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  const title = detail.title[locale as Locale];
  const description = detail.body[locale as Locale]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)[0]
    ?.slice(0, 160);
  return {
    title: `${title}`,
    description,
    alternates: { canonical: `/${locale}/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const detail = serviceDetails[slug];
  if (!detail) notFound();
  const others = serviceSlugs
    .filter((s) => s !== slug)
    .map((s) => serviceDetails[s]);
  return <ServiceDetail detail={detail} others={others} />;
}
