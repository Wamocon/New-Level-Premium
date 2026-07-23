'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { site } from '@/lib/data/site';

/**
 * Reusable lead form. With no backend, a valid submission is composed into a
 * pre-filled WhatsApp message and opened in a new tab so the enquiry reaches
 * the sales team instantly, then a success state is shown.
 */
export function LeadForm({ subject, withMessage = true }: { subject: string; withMessage?: boolean }) {
  const t = useTranslations('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const waLink = () => {
    const lines = [subject, '', `${t('name')}: ${name}`, `${t('phone')}: ${phone}`];
    if (email) lines.push(`${t('email')}: ${email}`);
    if (message) lines.push(`${t('message')}: ${message}`);
    return `${site.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(waLink(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-cloud placeholder-cloud/40 outline-none transition-colors duration-300 focus:border-gold/60';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
          <Check className="size-8 text-gold" />
        </div>
        <p className="max-w-sm text-lg text-cloud/80">{t('success')}</p>
        <Button asChild variant="outline">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-4" />
            {t('continueWa')}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t('name')}
        autoComplete="name"
        aria-label={t('name')}
        className={inputCls}
      />
      <input
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={t('phone')}
        autoComplete="tel"
        aria-label={t('phone')}
        className={inputCls}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('email')}
        autoComplete="email"
        aria-label={t('email')}
        className={inputCls}
      />
      {withMessage && (
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('message')}
          rows={3}
          aria-label={t('message')}
          className={`${inputCls} resize-none`}
        />
      )}
      <label className="flex cursor-pointer items-start gap-3 py-1 text-sm text-cloud/60">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-gold"
        />
        <span>{t('consent')}</span>
      </label>
      <Button type="submit" variant="metal" className="w-full" disabled={!consent}>
        <WhatsAppIcon className="size-4" />
        {t('send')}
      </Button>
    </form>
  );
}
