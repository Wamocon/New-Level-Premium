import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome AI answer engines / crawlers (GEO) in addition to
  // standard search engines, so the content is eligible for AI search results.
  const aiAgents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bytespider',
    'Amazonbot',
    'Meta-ExternalAgent',
    'cohere-ai',
    'CCBot',
  ];
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiAgents, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
