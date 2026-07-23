'use client';

import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Check, Globe } from 'lucide-react';

const FULL: Record<string, string> = {
  ru: 'Русский',
  en: 'English',
  tr: 'Türkçe',
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function switchTo(next: string) {
    // Full-page navigation (not client-side) so the browser re-detects the page
    // language for the new locale. This also stops browser auto-translate (e.g.
    // Chrome translating a Turkish page into German) from carrying across an
    // in-app locale change and making the switch look like nothing happened.
    const base = pathname === '/' ? '' : pathname;
    const target = `/${next}${base}${window.location.search}${window.location.hash}`;
    window.location.assign(target);
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wider text-cloud/80 transition-colors hover:border-gold/50 hover:text-gold"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="size-3.5" />
        {locale}
      </button>
      {open && (
        <div
          role="listbox"
          className="glass absolute right-0 top-[calc(100%+0.6rem)] w-40 overflow-hidden rounded-2xl p-1.5 shadow-2xl"
        >
          {routing.locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={l === locale}
              onClick={() => switchTo(l)}
              className={cn(
                'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors',
                l === locale
                  ? 'bg-white/5 text-gold'
                  : 'text-cloud/80 hover:bg-white/5 hover:text-cloud',
              )}
            >
              {FULL[l]}
              {l === locale && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
