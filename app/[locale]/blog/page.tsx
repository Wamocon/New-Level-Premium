import type { Metadata } from 'next';
import { setRequestLocale, getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { blogPosts, blogCategories } from '@/lib/data/blogPosts';
import { PostCard } from '@/components/blog/PostCard';
import { Reveal } from '@/components/anim/Reveal';
import type { Locale } from '@/lib/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: `${t('pageTitle')}`,
    description: t('pageSubline'),
    alternates: { canonical: `/${locale}/blog` },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const lc = (await getLocale()) as Locale;
  const posts = [...blogPosts].sort((a, b) => a.order - b.order);

  return (
    <section className="relative min-h-dvh pb-24 pt-28 md:pt-36">
      <div className="container-lux">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
          {t('eyebrow')}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-cloud md:text-5xl">
          {t('pageTitle')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cloud/70">{t('pageSubline')}</p>

        {/* category chips */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-obsidian">
            {t('all')}
          </span>
          {blogCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-cloud/70 transition-colors hover:border-gold/40 hover:text-gold"
            >
              {c.name[lc]}
            </Link>
          ))}
        </div>

        <Reveal as="div" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} locale={lc} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
