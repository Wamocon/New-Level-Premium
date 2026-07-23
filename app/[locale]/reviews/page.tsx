import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ReviewsPage } from '@/components/pages/ReviewsPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'reviews' });
  return {
    title: `${t('heading')}`,
    description: t('pageSubline'),
    alternates: { canonical: `/${locale}/reviews` },
  };
}

export default async function ReviewsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ReviewsPage />;
}
