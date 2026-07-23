import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { contentPages } from '@/lib/data/contentPages';
import { TeamPage } from '@/components/pages/TeamPage';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = contentPages['team'];
  if (!page) return {};
  const lc = locale as Locale;
  return {
    title: `${page.title[lc]}`,
    description: page.intro[lc] || page.title[lc],
    alternates: { canonical: `/${locale}/team` },
  };
}

export default async function TeamRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = contentPages['team'];
  if (!page) notFound();
  return <TeamPage page={page} />;
}
