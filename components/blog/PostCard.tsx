import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/lib/types';
import type { BlogPost } from '@/lib/data/blogPosts';
import { blogCategoryBySlug } from '@/lib/data/blogPosts';
import { parseArticle } from '@/lib/blog/parseArticle';
import { ArrowRight } from 'lucide-react';

export function PostCard({ post, locale }: { post: BlogPost; locale: Locale }) {
  const cat = blogCategoryBySlug(post.category);
  const summary = post.excerpt[locale]?.trim() || parseArticle(post.body[locale]).lead;
  return (
    <Link
      href={`/post/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/5 transition-all duration-500 ease-lux hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_30px_80px_-40px_rgba(201,162,75,0.4)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.cover[locale] && (
          <Image
            src={post.cover[locale]}
            alt={post.title[locale]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
        {cat && (
          <span className="absolute left-4 top-4 rounded-full bg-obsidian/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-gold backdrop-blur-sm">
            {cat.name[locale]}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {post.date && <time className="text-xs text-cloud/40">{post.date}</time>}
        <h3 className="mt-2 font-display text-lg leading-snug text-cloud transition-colors group-hover:text-gold">
          {post.title[locale]}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-cloud/60">{summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold/80 transition-colors group-hover:text-gold">
          <span className="h-px w-5 bg-gold/50 transition-all duration-300 group-hover:w-8" />
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
