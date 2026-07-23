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
  const page = contentPages['about'];
  if (!page) return {};
  const lc = locale as Locale;
  const description = page.intro[lc]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)[0]
    ?.slice(0, 160);
  return {
    title: `${page.title[lc]}`,
    description,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = contentPages['about'];
  if (!page) notFound();
  return <ContentPage page={page} />;
}
