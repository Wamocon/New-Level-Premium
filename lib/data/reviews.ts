import type { Locale } from '@/lib/types';

export interface Review {
  name: string;
  location: Record<Locale, string>;
  date: string;
  rating: number;
  text: Record<Locale, string>;
}

// Real client testimonials published on newlevel-group.com/reviews — faithful
// short summaries of their video/text reviews (full versions on the source page).
export const reviews: Review[] = [
  {
    name: 'Andrew',
    location: { ru: 'Европа', en: 'Europe', tr: 'Avrupa' },
    date: '2025-06-16',
    rating: 5,
    text: {
      ru: 'После покупки квартиры поделился впечатлениями — отметил впечатляющую скорость строительства и профессионализм команды.',
      en: 'After buying an apartment, shared his excitement — praising the impressive speed of construction and the professionalism of the team.',
      tr: 'Daire aldıktan sonra izlenimlerini paylaştı — inşaatın etkileyici hızını ve ekibin profesyonelliğini övdü.',
    },
  },
  {
    name: 'Vuckic Mufid',
    location: { ru: 'Швейцария', en: 'Switzerland', tr: 'İsviçre' },
    date: '2025-07-15',
    rating: 5,
    text: {
      ru: 'Поделился видеовпечатлениями о проекте New Level Premium и остался доволен качеством строительства.',
      en: 'Shared his video impressions of the New Level Premium project and was delighted with the build quality.',
      tr: 'New Level Premium projesiyle ilgili video izlenimlerini paylaştı ve yapım kalitesinden çok memnun kaldı.',
    },
  },
  {
    name: 'New Level Partners',
    location: { ru: 'Аланья, Турция', en: 'Alanya, Türkiye', tr: 'Alanya, Türkiye' },
    date: '2025-07-20',
    rating: 5,
    text: {
      ru: 'Рассказали, почему ценят проект New Level Premium — как надёжную инвестицию и вклад в качество жизни.',
      en: 'Explained why they value the New Level Premium project — as a reliable investment and a contribution to wellbeing.',
      tr: 'New Level Premium projesine neden değer verdiklerini anlattılar — güvenilir bir yatırım ve yaşam kalitesine katkı olarak.',
    },
  },
  {
    name: 'Verified buyer',
    location: { ru: 'Россия', en: 'Russia', tr: 'Rusya' },
    date: '2025-09-20',
    rating: 5,
    text: {
      ru: 'Показал квартиру после сделки и поделился положительным опытом покупки с New Level Group.',
      en: 'Gave a tour of the apartment after the deal and shared a positive buying experience with New Level Group.',
      tr: 'Anlaşmadan sonra daireyi gezdirdi ve New Level Group ile olumlu satın alma deneyimini paylaştı.',
    },
  },
];
