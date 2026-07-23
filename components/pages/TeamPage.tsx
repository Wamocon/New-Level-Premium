'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import type { ContentPageData } from '@/lib/data/contentPages';
import { Phone } from 'lucide-react';

export function TeamPage({ page }: { page: ContentPageData }) {
  const locale = useLocale() as Locale;
  const members = page.team[locale];
  const departments = page.departments[locale];
  const intro = page.intro[locale];

  const groups = departments.map((dept) => ({
    dept,
    people: members.filter((m) => m.department === dept),
  }));
  const ungrouped = members.filter((m) => !departments.includes(m.department));
  if (ungrouped.length) groups.push({ dept: '', people: ungrouped });

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <h1 className="font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {page.title[locale]}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-cloud/70">{intro}</p>}

        <div className="mt-14 space-y-14">
          {groups.map(
            ({ dept, people }, i) =>
              people.length > 0 && (
                <div key={i}>
                  {dept && (
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                      {dept}
                    </h2>
                  )}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {people.map((m, j) => (
                      <div
                        key={j}
                        className="group flex flex-col rounded-3xl border border-white/8 bg-white/5 p-5 transition-colors duration-500 hover:border-gold/30"
                      >
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/8">
                          <Image
                            src={m.photo}
                            alt={m.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                          />
                        </div>
                        <h3 className="mt-4 font-display text-base font-semibold text-cloud">
                          {m.name}
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-cloud/60">{m.role}</p>
                        {m.languages && (
                          <p className="mt-1.5 text-xs text-cloud/40">{m.languages}</p>
                        )}
                        {m.phone && (
                          <a
                            href={m.phoneHref}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold/80 transition-colors hover:text-gold"
                          >
                            <Phone className="size-3.5" />
                            {m.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
