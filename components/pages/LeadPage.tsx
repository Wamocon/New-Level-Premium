'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import type { LeadPageData } from '@/lib/data/leadPages';
import { LeadForm } from '@/components/forms/LeadForm';

export function LeadPage({ page }: { page: LeadPageData }) {
  const locale = useLocale() as Locale;

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        {/* hero */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
              {page.title[locale]}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cloud/70">{page.intro[locale]}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8">
            <Image
              src={page.image}
              alt={page.title[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* benefits */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-cloud">{page.benefitsTitle[locale]}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((b, i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl border border-white/8 bg-white/5 p-6 transition-colors duration-500 hover:border-gold/30"
              >
                <h3 className="font-display text-lg text-cloud">{b.title[locale]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud/60">{b.text[locale]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* steps + form */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-cloud">{page.stepsTitle[locale]}</h2>
            <ol className="mt-6 space-y-6">
              {page.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-sm font-semibold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base text-cloud">{s.title[locale]}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cloud/60">{s.text[locale]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass rounded-3xl border border-white/8 p-6 md:p-8 lg:sticky lg:top-28">
            <LeadForm subject={page.formSubject} />
          </div>
        </div>
      </div>
    </section>
  );
}
