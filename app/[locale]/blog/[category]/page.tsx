import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  blogCategories,
  blogCategorySlugs,
  blogCategoryBySlug,
  postsInCategory,
} from '@/lib/data/blogPosts';
import { PostCard } from '@/components/blog/PostCard';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return blogCategorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = blogCategoryBySlug(category);
  if (!cat) return {};
  const lc = locale as Locale;
  return {
    title: `${cat.name[lc]}`,
    alternates: { canonical: `/${locale}/blog/${category}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const cat = blogCategoryBySlug(category);
  if (!cat) notFound();
  const t = await getTranslations('blog');
  const lc = (await getLocale()) as Locale;
  const posts = postsInCategory(category).sort((a, b) => a.order - b.order);

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <Link href="/blog" className="text-sm text-cloud/60 transition-colors hover:text-gold">
          {t('back')}
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {cat.name[lc]}
        </h1>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <Link
            href="/blog"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-cloud/70 transition-colors hover:border-gold/40 hover:text-gold"
          >
            {t('all')}
          </Link>
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className={
                c.slug === category
                  ? 'rounded-full bg-gold px-4 py-2 text-sm font-medium text-obsidian'
                  : 'rounded-full border border-white/10 px-4 py-2 text-sm text-cloud/70 transition-colors hover:border-gold/40 hover:text-gold'
              }
            >
              {c.name[lc]}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} locale={lc} />
          ))}
        </div>
      </div>
    </section>
  );
}
