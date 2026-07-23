'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { primaryNav, type NavItem } from '@/lib/nav';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LogoMark } from '@/components/brand/LogoMark';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TelegramIcon,
  WhatsAppIcon,
  ViberIcon,
} from '@/components/icons/Social';
import { Heart, Menu, Phone, Search, X } from 'lucide-react';

const SOCIAL_ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Send: TelegramIcon,
  WhatsApp: WhatsAppIcon,
  Viber: ViberIcon,
};

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group inline-flex items-center" aria-label="New Level Group">
      <LogoMark className="h-8 text-cloud transition-colors duration-300 group-hover:text-gold sm:h-9" />
    </Link>
  );
}

/** Renders a nav entry as an in-page anchor or a route link. */
function NavLink({
  item,
  className,
  onClick,
  children,
}: {
  item: NavItem;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (item.hash) {
    return (
      <a href={`#${item.href}`} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  // Only the homepage has a dark hero behind the header; everywhere else the
  // page background is light (in light mode), so the header needs its bar even
  // at the top, otherwise the light nav text sits on light content.
  const isHome = pathname === '/';
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
    <header className="on-dark fixed inset-x-0 top-0 z-50">
      {/* top contact bar (desktop, collapses on scroll) */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-white/5 bg-obsidian transition-all duration-500 ease-lux lg:block',
          scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100',
        )}
      >
        <div className="container-lux flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {site.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? TelegramIcon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex size-6 items-center justify-center rounded-full text-cloud/55 transition-colors hover:text-gold"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
            <span className="h-3.5 w-px bg-white/10" />
            <a
              href={site.phoneHref}
              className="font-medium tracking-wide text-cloud/80 transition-colors hover:text-gold"
            >
              {site.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/partners" className="text-cloud/60 transition-colors hover:text-gold">
              {t('partners')}
            </Link>
            <Link href="/sell-property" className="text-cloud/60 transition-colors hover:text-gold">
              {t('sell')}
            </Link>
            <Link
              href="/contacts"
              className="rounded-full bg-white/8 px-3.5 py-1.5 font-medium text-cloud transition-colors hover:bg-gold hover:text-obsidian"
            >
              {t('contactUs')}
            </Link>
            <Link href="/properties" aria-label="Favorites" className="text-cloud/60 transition-colors hover:text-gold">
              <Heart className="size-4" />
            </Link>
            <Link href="/properties" aria-label="Search" className="text-cloud/60 transition-colors hover:text-gold">
              <Search className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={cn(
          'transition-all duration-500 ease-lux',
          scrolled || !isHome ? 'border-b border-white/5 bg-obsidian' : 'bg-transparent',
        )}
      >
        <div className="container-lux flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {primaryNav.map((item) => (
              <NavLink
                key={item.key}
                item={item}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[0.82rem] font-medium text-cloud/75 transition-colors hover:text-gold"
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button asChild size="sm" variant="metal" className="hidden md:inline-flex">
              <a href="#consultation">{t('cta')}</a>
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex size-11 items-center justify-center rounded-full border border-white/10 text-cloud xl:hidden"
              aria-label="Menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-obsidian xl:hidden"
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
              <NavLink
                key={item.key}
                item={item}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-white/5 py-4 font-display text-2xl text-cloud transition-colors hover:text-gold"
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
          <div className="container-lux flex flex-col gap-4 pb-10">
            <a href={site.phoneHref} className="flex items-center gap-2 text-cloud">
              <Phone className="size-4 text-gold" />
              {site.phone}
            </a>
            <div className="flex items-center gap-2">
              {site.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? TelegramIcon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 text-cloud/70 transition-colors hover:border-gold/60 hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
