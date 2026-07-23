import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { contentPages } from '@/lib/data/contentPages';
import { ContentPage } from '@/components/pages/ContentPage';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = contentPages['privacy'];
  if (!page) return {};
  const lc = locale as Locale;
  return {
    title: `${page.title[lc]}`,
    description: page.intro[lc].slice(0, 160),
    alternates: { canonical: `/${locale}/privacy-policy` },
  };
}

export default async function PrivacyRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = contentPages['privacy'];
  if (!page) notFound();
  return <ContentPage page={page} />;
}
