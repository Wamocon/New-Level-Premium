import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'property-management',
    icon: 'Building2',
    title: { ru: 'Управление недвижимостью', en: 'Property management', tr: 'Mülk yönetimi' },
    description: {
      ru: 'Полный цикл управления вашими апартаментами: аренда, обслуживание, отчётность и стабильный доход без вашего участия.',
      en: 'Full-cycle management of your home: rental, maintenance, reporting and stable income without lifting a finger.',
      tr: 'Eviniz için tam kapsamlı yönetim: kiralama, bakım, raporlama ve hiç uğraşmadan istikrarlı gelir.',
    },
  },
  {
    id: 'after-sales',
    icon: 'Wrench',
    title: { ru: 'Послепродажный сервис', en: 'After-sales service', tr: 'Satış sonrası hizmet' },
    description: {
      ru: 'Подключение коммуникаций, страховка, ремонт и меблировка, мы сопровождаем вас и после получения ключей.',
      en: 'Utility connections, insurance, renovation and furnishing, we stay with you long after you get the keys.',
      tr: 'Abonelikler, sigorta, tadilat ve mobilya, anahtarları aldıktan sonra da yanınızdayız.',
    },
  },
  {
    id: 'residence-permit',
    icon: 'BadgeCheck',
    title: { ru: 'ВНЖ в Турции', en: 'Residence permit in Turkey', tr: 'Türkiye’de oturma izni' },
    description: {
      ru: 'Оформление вида на жительство для вас и вашей семьи под ключ, от документов до подачи и сопровождения.',
      en: 'Turn-key residence permits for you and your family, from paperwork to submission and follow-up.',
      tr: 'Siz ve aileniz için anahtar teslim oturma izni, evraktan başvuruya ve takibe kadar.',
    },
  },
  {
    id: 'citizenship',
    icon: 'Landmark',
    title: { ru: 'Гражданство Турции', en: 'Turkish citizenship', tr: 'Türk vatandaşlığı' },
    description: {
      ru: 'Гражданство через инвестиции в недвижимость: подберём объект, соответствующий условиям программы, и проведём сделку.',
      en: 'Citizenship by real-estate investment: we match a qualifying property and guide the entire transaction.',
      tr: 'Gayrimenkul yatırımıyla vatandaşlık: uygun mülkü buluyor ve tüm süreci yönetiyoruz.',
    },
  },
];
