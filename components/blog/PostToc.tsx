'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ListTree } from 'lucide-react';

/** In-article table of contents with scroll-spy highlighting. */
export function PostToc({
  headings,
  label,
}: {
  headings: { id: string; text: string }[];
  label: string;
}) {
  const [active, setActive] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-12% 0px -74% 0px', threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label={label}
      className="glass my-10 rounded-2xl border-gold/15 p-5 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
        <ListTree className="size-4" />
        {label}
      </div>
      <ul className="space-y-1 border-l border-white/10">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                '-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors',
                active === h.id
                  ? 'border-gold text-gold'
                  : 'border-transparent text-cloud/60 hover:text-cloud',
              )}
            >
              <span className="text-cloud/30">{String(i + 1).padStart(2, '0')}</span>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
