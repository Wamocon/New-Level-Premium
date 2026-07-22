'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { primaryNav } from '@/lib/nav';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { LogoMark } from '@/components/brand/LogoMark';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group inline-flex items-center"
      aria-label="New Level Group — home"
    >
      <LogoMark className="h-8 text-cloud transition-colors duration-300 group-hover:text-gold sm:h-9" />
    </Link>
  );
}

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux',
        scrolled
          ? 'border-b border-white/5 bg-obsidian/70 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="container-lux flex h-20 items-center justify-between gap-6">
        <Logo />

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => (
            <div key={item.key} className="group/nav relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.82rem] font-medium text-cloud/75 transition-colors hover:text-gold"
              >
                {t(item.key)}
                {item.children && (
                  <ChevronDown className="size-3.5 opacity-60 transition-transform duration-300 group-hover/nav:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-56 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-lux group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                  <div className="glass overflow-hidden rounded-2xl p-1.5 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-2.5 text-sm text-cloud/75 transition-colors hover:bg-white/5 hover:text-gold"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* right cluster */}
        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-cloud/80 transition-colors hover:text-gold 2xl:flex"
          >
            <Phone className="size-4 text-gold" />
            {site.phone}
          </a>
          <LanguageSwitcher className="hidden sm:block" />
          <Button asChild size="sm" variant="metal" className="hidden md:inline-flex">
            <Link href="/contacts">{t('cta')}</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex size-11 items-center justify-center rounded-full border border-white/10 text-cloud xl:hidden"
            aria-label={t('cta')}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-obsidian/98 backdrop-blur-2xl xl:hidden"
        >
          <div className="container-lux flex h-20 items-center justify-between">
            <Logo onClick={() => setMobileOpen(false)} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex size-11 items-center justify-center rounded-full border border-white/10 text-cloud"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="container-lux flex flex-1 flex-col gap-1 py-6">
            {primaryNav.map((item) => (
              <div key={item.key} className="border-b border-white/5 py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-display text-2xl text-cloud transition-colors hover:text-gold"
                >
                  {t(item.key)}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-1 pb-3 pl-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-cloud/60 transition-colors hover:text-gold"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="container-lux flex items-center justify-between gap-4 pb-10">
            <a href={site.phoneHref} className="flex items-center gap-2 text-cloud">
              <Phone className="size-4 text-gold" />
              {site.phone}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
