import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import en from '../messages/en.json';
import ru from '../messages/ru.json';
import tr from '../messages/tr.json';

// Static imports (not a dynamic `import(`../messages/${locale}.json`)`) so the
// Turbopack dev server never hits its concurrent-compile JSON race.
const MESSAGES = { en, ru, tr } as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: MESSAGES[locale as keyof typeof MESSAGES] ?? MESSAGES.en,
  };
});
