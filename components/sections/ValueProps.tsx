'use client';

import { useTranslations } from 'next-intl';
import { ShieldCheck, Compass, Handshake, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { cn } from '@/lib/utils';

const valueItems = [
  { icon: ShieldCheck, t: 'v1t', d: 'v1d', index: '01' },
  { icon: Compass, t: 'v2t', d: 'v2d', index: '02' },
  { icon: Handshake, t: 'v3t', d: 'v3d', index: '03' },
  { icon: Award, t: 'v4t', d: 'v4d', index: '04' },
] as const;

export function ValueProps() {
  const t = useTranslations('values');

  return (
    <section id="values" className="relative py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subline={t('subline')}
        />

        <Reveal
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          stagger={0.08}
          y={40}
        >
          {valueItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.t}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-8',
                  'transition-all duration-500 ease-lux hover:-translate-y-1.5',
                  'hover:border-gold/25 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-70"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-2 select-none font-display text-7xl font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-gold/[0.08]"
                >
                  {item.index}
                </span>

                <div className="relative flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold/15">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className="relative mt-7 font-display text-xl font-bold tracking-tight text-linen">
                  {t(item.t)}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-cloud/60">
                  {t(item.d)}
                </p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
