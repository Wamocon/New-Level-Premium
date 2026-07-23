import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { serviceSlugs, serviceDetails } from '@/lib/data/serviceDetails';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'service' });
  return {
    title: `${t('title')}`,
    description: t('subline'),
    alternates: { canonical: `/${locale}/services` },
  };
}

const excerpt = (body: string) =>
  body
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)[0]
    ?.slice(0, 180);

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('service');
  const lc = locale as Locale;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
          {t('eyebrow')}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cloud/70">{t('subline')}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceSlugs.map((slug) => {
            const s = serviceDetails[slug];
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/5 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
              >
                {s.images[0] && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.images[0]}
                      alt={s.title[lc]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl text-cloud">{s.title[lc]}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cloud/60">
                    {excerpt(s.body[lc])}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold/80 transition-colors group-hover:text-gold">
                    {t('learnMore')}
                    <ArrowRight className="size-4 transition-transform duration-500 ease-lux group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
