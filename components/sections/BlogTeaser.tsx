'use client';

import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { img } from '@/lib/images';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';

type BlogKey = 'p1t' | 'p2t' | 'p3t';
type BlogCatKey = 'p1c' | 'p2c' | 'p3c';

const posts: { img: string; title: BlogKey; cat: BlogCatKey }[] = [
  { img: img('blog-insight-1', 1200, 800), title: 'p1t', cat: 'p1c' },
  { img: img('blog-insight-2', 1200, 800), title: 'p2t', cat: 'p2c' },
  { img: img('blog-insight-3', 1200, 800), title: 'p3t', cat: 'p3c' },
];

export function BlogTeaser() {
  const t = useTranslations('blog');

  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} subline={t('subline')} />
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                {t('cta')}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08} y={40}>
          {posts.map((post) => (
            <Link
              key={post.title}
              href="/blog"
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
                  <ArrowUpRight className="size-4 transition-transform duration-300 ease-lux group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
