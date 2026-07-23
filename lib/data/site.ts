import type { Locale } from '@/lib/types';

export const site = {
  name: 'New Level Group',
  phone: '+90 545 422 40 70',
  phoneHref: 'tel:+905454224070',
  email: 'info@newlevel-group.com',
  address: 'Dinek, Zamanoğlu Cd. NO:27A KAT 3, 07460 Alanya/Antalya',
  whatsappHref: 'https://wa.me/905454224070',
  viberHref: 'viber://chat?number=905454224070',
  // Google Business location (New Level Kleopatra 1), satellite/3D view.
  geo: {
    lat: 36.5563932,
    lng: 31.9770521,
    mapsUrl: 'https://maps.app.goo.gl/P1CgFFLh7nd5FrdEA',
    embedUrl:
      'https://maps.google.com/maps?q=36.5563932,31.9770521&z=17&t=k&hl=en&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=36.5563932,31.9770521',
  },
  // Real Google review profiles shown for trust. `google` is New Level Group's
  // own 5.0 profile; `ataberk` is the group's agency (Ataberk Real Estate) at
  // the same Alanya office, its own verified Google listing.
  reviews: {
    google: 'https://share.google/lL12rHhTqVJn4vpmL',
    ataberk: {
      name: 'Ataberk Real Estate',
      area: 'Alanya / Antalya',
      url: 'https://maps.app.goo.gl/ry9JpmXuPwenhFiu7',
    },
  },
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/newlevel_group', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/newlevel.turkey', icon: 'Facebook' },
    { name: 'YouTube', url: 'https://www.youtube.com/@NEWLEVELGROUPTR', icon: 'Youtube' },
    { name: 'Telegram', url: 'https://t.me/newlevel_group', icon: 'Send' },
    { name: 'WhatsApp', url: 'https://wa.me/905454224070', icon: 'WhatsApp' },
    { name: 'Viber', url: 'viber://chat?number=905454224070', icon: 'Viber' },
  ],
} as const;

export interface Stat {
  value: string;
  label: Record<Locale, string>;
}

export const stats: Stat[] = [
  {
    value: '14',
    label: { ru: 'лет на рынке', en: 'years on the market', tr: 'yıllık tecrübe' },
  },
  {
    value: '20+',
    label: { ru: 'сданных проектов', en: 'completed projects', tr: 'tamamlanan proje' },
  },
  {
    value: '2000+',
    label: { ru: 'счастливых семей', en: 'happy families', tr: 'mutlu aile' },
  },
  {
    value: '100%',
    label: { ru: 'собственное строительство', en: 'in-house construction', tr: 'kendi inşaatımız' },
  },
];
