import type { Locale } from '@/lib/types';

// Client-safe suggested opening questions (verified RU/EN/TR).
export const STARTERS: Record<Locale, string[]> = {
  "ru": [
    "Какие проекты New Level Group доступны сейчас?",
    "Можно ли получить ВНЖ в Турции при покупке недвижимости?",
    "Как купить квартиру, если я живу за границей?",
    "Как живётся в Аланье и какой район выбрать?"
  ],
  "en": [
    "Which New Level Group projects are available now?",
    "Can buying property in Turkey give me residency?",
    "How can I buy an apartment if I live abroad?",
    "What is life in Alanya like, and which district should I choose?"
  ],
  "tr": [
    "Şu anda hangi New Level Group projeleri mevcut?",
    "Türkiye'de mülk almak bana oturma izni sağlar mı?",
    "Yurt dışında yaşıyorsam nasıl daire satın alabilirim?",
    "Alanya'da yaşam nasıl ve hangi bölgeyi seçmeliyim?"
  ]
};
