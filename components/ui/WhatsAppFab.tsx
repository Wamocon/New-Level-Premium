'use client';

import { useTranslations } from 'next-intl';
import { site } from '@/lib/data/site';
import { WhatsAppIcon } from '@/components/icons/Social';

/** Floating WhatsApp button (bottom-left), mirroring the original site. */
export function WhatsAppFab() {
  const t = useTranslations('form');
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('chatWhatsapp')}
      className="group fixed bottom-6 left-6 z-[80] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_50px_-12px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}
