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
  const page = contentPages['history'];
  if (!page) return {};
  const lc = locale as Locale;
  return {
    title: `${page.title[lc]}`,
    description: page.title[lc],
    alternates: { canonical: `/${locale}/history` },
  };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = contentPages['history'];
  if (!page) notFound();
  return <ContentPage page={page} />;
}
