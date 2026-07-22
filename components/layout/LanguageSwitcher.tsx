'use client';

import { useLocale } from 'next-intl';
import { useState, useTransition, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function switchTo(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
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
