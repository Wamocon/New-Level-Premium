import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { leadPages } from '@/lib/data/leadPages';
import { LeadPage } from '@/components/pages/LeadPage';
import type { Locale } from '@/lib/types';

const SLUG = 'sell-property';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = leadPages[SLUG];
  const lc = locale as Locale;
  return {
    title: `${page.title[lc]}`,
    description: page.intro[lc].slice(0, 160),
    alternates: { canonical: `/${locale}/sell-property` },
  };
}

export default async function SellPropertyRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = leadPages[SLUG];
  if (!page) notFound();
  return <LeadPage page={page} />;
}
