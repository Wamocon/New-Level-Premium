import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { projects } from '@/lib/data/projects';
import { formatPrice } from '@/lib/utils';
import type { Locale } from '@/lib/types';
import { ComplexesShowcase } from '@/components/complexes/ComplexesShowcase';
import { MapPin, ArrowUpRight } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'complex' });
  return {
    title: t('allTitle'),
    description: t('allSub'),
    alternates: { canonical: `/${locale}/complexes` },
  };
}

export default async function ComplexesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('complex');
  const loc = (await getLocale()) as Locale;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
              {t('eyebrow')}
            </div>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold tracking-tight text-cloud">
              {t('allTitle')}
            </h1>
            <p className="mt-3 max-w-xl text-cloud/55">{t('allSub')}</p>
          </div>
          <ComplexesShowcase label={t('signatureLabel')} />
        </div>

        <div className="u-rise mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/complexes/${p.id}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-graphite/60 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-obsidian">
                    {p.badge[loc]}
                  </span>
                )}
                <div className="on-dark absolute inset-x-4 bottom-4">
                  <h3 className="font-display text-xl font-bold text-cloud">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-cloud/70">
                    <MapPin className="size-3.5 text-gold" />
                    {p.location[loc]}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-wider text-cloud/45">
                    {t('from')}
                  </div>
                  <div className="font-display text-lg font-bold text-metal">
                    {formatPrice(p.priceFrom, loc)}
                  </div>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-cloud/70 transition-colors group-hover:border-gold group-hover:text-gold">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
