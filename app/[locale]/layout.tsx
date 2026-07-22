import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getMessages, getTranslations } from 'next-intl/server';
import { Manrope, Playfair_Display } from 'next/font/google';
import { routing } from '@/i18n/routing';
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
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title: {
      default: `New Level Group — ${t('headlineTop')} ${t('headlineAccent')}`,
      template: '%s · New Level Group',
    },
    description: t('subline'),
    openGraph: {
      title: 'New Level Group',
      description: t('subline'),
      type: 'website',
    },
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

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-obsidian text-cloud antialiased">
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
