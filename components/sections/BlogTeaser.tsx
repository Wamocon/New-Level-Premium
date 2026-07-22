'use client';

import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import { img } from '@/lib/images';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';

type BlogKey = 'p1t' | 'p2t' | 'p3t';
type BlogCatKey = 'p1c' | 'p2c' | 'p3c';

const BLOG_URL: Record<Locale, string> = {
  en: 'https://newlevel-group.com/en/blog',
  ru: 'https://newlevel-group.com/blog',
  tr: 'https://newlevel-group.com/tr/blog',
};

// Real articles from the live site (open until the on-site /blog is built).
const posts: {
  img: string;
  title: BlogKey;
  cat: BlogCatKey;
  url: Record<Locale, string>;
}[] = [
  {
    img: img('blog-insight-1', 1200, 800),
    title: 'p1t',
    cat: 'p1c',
    url: {
      en: 'https://newlevel-group.com/en/post/tapu-residence-permit-in-turkey-in-2026-how-to-obtain-a-residence-permit-with-real-estate',
      ru: 'https://newlevel-group.com/post/vnzh-po-tapu-v-turtsii-godu-kak-poluchit-vid-na-zhitelstvo-po-nedvizhimosti',
      tr: 'https://newlevel-group.com/tr/post/tapu-ikamet-izni-2026da-turkiyede-gayrimenkul-ile-ikamet-izni-nasil-alinir',
    },
  },
  {
    img: img('blog-insight-2', 1200, 800),
    title: 'p2t',
    cat: 'p2c',
    url: {
      en: 'https://newlevel-group.com/en/post/aidat-in-turkey-in-2026-what-is-it-how-much-does-it-cost-and-who-pays-for-it',
      ru: 'https://newlevel-group.com/post/aydat-v-turtsii-godu-chto-eto-takoe-skolko-stoit-i-kto-ego-oplachivaet',
      tr: 'https://newlevel-group.com/tr/post/2026da-turkiyede-aidat-nedir-maliyeti-ne-kadar-ve-kim-oder',
    },
  },
  {
    img: img('blog-insight-3', 1200, 800),
    title: 'p3t',
    cat: 'p3c',
    url: {
      en: 'https://newlevel-group.com/en/post/what-to-do-after-buying-property-in-turkey-a-complete-owners-checklist',
      ru: 'https://newlevel-group.com/post/chto-delat-posle-pokupki-nedvizhimosti-v-turtsii-polnyy-chek-list-sobstvennika',
      tr: 'https://newlevel-group.com/tr/post/turkiyede-gayrimenkul-satin-aldiktan-sonra-yapilmasi-gerekenler-eksiksiz-bir-ev-sahibi-kontrol-listesi',
    },
  },
];

export function BlogTeaser() {
  const t = useTranslations('blog');
  const locale = useLocale() as Locale;

  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild variant="outline" size="lg">
              <a href={BLOG_URL[locale]} target="_blank" rel="noopener noreferrer">
                {t('cta')}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08} y={40}>
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url[locale]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(post.title)}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/5 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.img}
                  alt={t(post.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-obsidian">
                  {t(post.cat)}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-2 text-xs text-cloud/60">
                  <Clock className="size-3.5" aria-hidden="true" />
                  <span>5 min</span>
                </div>

                <h3 className="font-display text-lg leading-snug text-linen transition-colors duration-300 group-hover:text-gold">
                  {t(post.title)}
                </h3>

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  {t('readMore')}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
