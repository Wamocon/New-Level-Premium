import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getMessages, getTranslations } from 'next-intl/server';
import { Manrope, Playfair_Display } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { organizationLd, websiteLd, faqLd, SITE_URL } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/ai/ChatWidget';
import { WhatsAppFab } from '@/components/ui/WhatsAppFab';
import '../globals.css';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  const title = `New Level Group, ${t('headlineTop')} ${t('headlineAccent')}`;
  const description = t('subline');
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: '%s · New Level Group' },
    description,
    keywords: [
      'Alanya real estate',
      'property in Turkey',
      'New Level Group',
      'apartments in Alanya',
      'Avsallar property',
      'Mediterranean property',
      'Turkish citizenship by investment',
      'residence permit Turkey',
    ],
    applicationName: 'New Level Group',
    alternates: {
      canonical: `/${locale}`,
      languages: { ru: '/ru', en: '/en', tr: '/tr', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      siteName: 'New Level Group',
      title,
      description,
      url: `/${locale}`,
      locale,
      images: [{ url: '/images/original/1-H0_ctfKN.png', alt: 'New Level Group' }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const jsonLd = [organizationLd(), websiteLd(), faqLd(locale as Locale)];

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-obsidian text-cloud antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>
            <Header />
            <main id="top">{children}</main>
            <Footer />
          </SmoothScroll>
          <WhatsAppFab />
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
