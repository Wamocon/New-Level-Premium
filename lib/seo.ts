import { site } from '@/lib/data/site';
import type { Locale } from '@/lib/types';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://newlevel-group.com'
).replace(/\/$/, '');

/** RealEstateAgent / LocalBusiness — powers Google local (GEO) results. */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE_URL}/#organization`,
    name: 'New Level Group',
    description:
      'Construction company and real-estate agency in Alanya, Turkey. Premium residential complexes on the Mediterranean coast.',
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    logo: `${SITE_URL}/brand/logo-CaAD5aEc.svg`,
    image: `${SITE_URL}/images/original/1-H0_ctfKN.png`,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dinek, Zamanoğlu Cd. NO:27A KAT 3',
      addressLocality: 'Alanya',
      addressRegion: 'Antalya',
      postalCode: '07460',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.geo.mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Alanya' },
      { '@type': 'AdministrativeArea', name: 'Antalya' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: site.socials.filter((s) => s.url.startsWith('http')).map((s) => s.url),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'New Level Group',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: ['ru', 'en', 'tr'],
  };
}

const FAQ: Record<Locale, { q: string; a: string }[]> = {
  en: [
    { q: 'Where are New Level Group projects located?', a: 'In and around Alanya on the Mediterranean coast of Turkey, including Avsallar, central Alanya and Konakli.' },
    { q: 'Can buying property in Turkey give me residency?', a: 'Yes. Property ownership can support a Turkish residence permit, and qualifying investments can lead to citizenship. Our team guides the whole process.' },
    { q: 'What do apartments cost?', a: 'Apartments start from around 136,400 euros depending on the project and layout. Contact us for current availability.' },
    { q: 'Do you help after the purchase?', a: 'Yes. We offer full after-sales service, property management, and support with residence permits and citizenship.' },
  ],
  ru: [
    { q: 'Где находятся проекты New Level Group?', a: 'В Алании и окрестностях на побережье Средиземного моря в Турции, включая Авсаллар, центр Алании и Конаклы.' },
    { q: 'Даёт ли покупка недвижимости в Турции право на ВНЖ?', a: 'Да. Владение недвижимостью помогает получить ВНЖ, а инвестиции от определённой суммы, гражданство. Наша команда сопровождает весь процесс.' },
    { q: 'Сколько стоят апартаменты?', a: 'Апартаменты, от примерно 136 400 евро, в зависимости от проекта и планировки. Свяжитесь с нами для актуального наличия.' },
    { q: 'Помогаете ли вы после покупки?', a: 'Да. Мы предоставляем полный послепродажный сервис, управление недвижимостью и сопровождение по ВНЖ и гражданству.' },
  ],
  tr: [
    { q: 'New Level Group projeleri nerede?', a: 'Türkiye’nin Akdeniz kıyısında, Alanya ve çevresinde: Avsallar, Alanya merkez ve Konaklı.' },
    { q: 'Türkiye’de mülk almak oturma izni sağlar mı?', a: 'Evet. Mülk sahipliği oturma iznini destekler, uygun yatırımlar vatandaşlığa götürebilir. Ekibimiz tüm süreçte yanınızdadır.' },
    { q: 'Daireler ne kadar?', a: 'Daireler, projeye ve plana göre yaklaşık 136.400 avrodan başlar. Güncel durum için bize ulaşın.' },
    { q: 'Satın alma sonrası destek veriyor musunuz?', a: 'Evet. Tam satış sonrası hizmet, mülk yönetimi ve oturma izni ile vatandaşlık desteği sunuyoruz.' },
  ],
};

/** FAQPage — helps Answer Engines (AEO) surface direct answers. */
export function faqLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ[locale].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
