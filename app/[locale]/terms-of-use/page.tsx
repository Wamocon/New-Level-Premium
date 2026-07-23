import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { termsPage } from '@/lib/data/terms';
import { ContentPage } from '@/components/pages/ContentPage';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lc = locale as Locale;
  return {
    title: termsPage.title[lc],
    description: termsPage.intro[lc].slice(0, 160),
    alternates: { canonical: `/${locale}/terms-of-use` },
  };
}

export default async function TermsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContentPage page={termsPage} />;
}
