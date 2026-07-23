import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  blogSlugs,
  postBySlug,
  postsInCategory,
  blogCategoryBySlug,
} from '@/lib/data/blogPosts';
import { PostCard } from '@/components/blog/PostCard';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { PostToc } from '@/components/blog/PostToc';
import { parseArticle } from '@/lib/blog/parseArticle';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons/Social';
import { site } from '@/lib/data/site';
import { Phone, ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  const lc = locale as Locale;
  const { lead } = parseArticle(post.body[lc], post.excerpt[lc]);
  return {
    title: post.title[lc],
    description: (post.excerpt[lc] || lead).slice(0, 200),
    alternates: { canonical: `/${locale}/post/${slug}` },
    openGraph: { images: post.cover[lc] ? [post.cover[lc]] : [] },
  };
}

const readingMinutes = (text: string) =>
  Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = postBySlug(slug);
  if (!post) notFound();
  const t = await getTranslations('blog');
  const tp = await getTranslations('page');
  const lc = (await getLocale()) as Locale;
  const cat = blogCategoryBySlug(post.category);
  const related = postsInCategory(post.category)
    .filter((p) => p.slug !== slug)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
  const gallery = post.images[lc].slice(1);
  const waHref = `${site.whatsappHref}?text=${encodeURIComponent(post.title[lc])}`;

  const { lead, blocks, headings } = parseArticle(post.body[lc], post.excerpt[lc]);
  const readMin = readingMinutes(post.body[lc]);

  return (
    <>
      <ReadingProgress />
      <article className="relative pb-24 pt-28 md:pt-32">
        <div className="container-lux">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-cloud/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            {t('back')}
          </Link>

          {/* header */}
          <header className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {cat && (
                <Link
                  href={`/blog/${cat.slug}`}
                  className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold/20"
                >
                  {cat.name[lc]}
                </Link>
              )}
              {post.date && (
                <span className="inline-flex items-center gap-1.5 text-cloud/45">
                  <CalendarDays className="size-3.5" />
                  {post.date}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-cloud/45">
                <Clock className="size-3.5" />
                {t('readingTime', { min: readMin })}
              </span>
            </div>
            <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-cloud md:text-[2.7rem]">
              {post.title[lc]}
            </h1>
          </header>

          {/* cover */}
          {post.cover[lc] && (
            <div className="relative mx-auto mt-9 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
              <Image
                src={post.cover[lc]}
                alt={post.title[lc]}
                fill
                sizes="(max-width: 1024px) 100vw, 56rem"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>
          )}

          {/* body column */}
          <div className="mx-auto mt-12 max-w-3xl">
            {lead && (
              <p className="text-lg leading-relaxed text-cloud/85 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.75] first-letter:text-gold md:text-xl">
                {lead}
              </p>
            )}

            <PostToc headings={headings} label={t('contents')} />

            <div className="mt-8">
              <ArticleBody blocks={blocks} />
            </div>
          </div>

          {gallery.length > 0 && (
            <Reveal
              as="div"
              stagger={0.08}
              className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3"
            >
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
                >
                  <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                </div>
              ))}
            </Reveal>
          )}

          {/* consultation band */}
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-gold/20 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(201,162,75,0.14),transparent)] p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-cloud">{tp('ctaTitle')}</h2>
                <p className="mt-2 max-w-xl text-cloud/70">{tp('ctaText')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="metal">
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4" />
                    {tp('cta')}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-cloud">{t('related')}</h2>
              <Reveal as="div" stagger={0.1} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} locale={lc} />
                ))}
              </Reveal>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
