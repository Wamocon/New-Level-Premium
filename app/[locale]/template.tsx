import type { ReactNode } from 'react';

/**
 * Next.js re-mounts a template on every navigation, so this wrapper's CSS
 * `routeFade` keyframe replays on each route/locale change — a warm, seamless
 * cross-fade instead of a hard content swap. It starts at opacity 0.55 (never 0)
 * so the hero LCP still paints immediately, and the whole effect is gated behind
 * `prefers-reduced-motion: no-preference` in globals.css.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="route-fade">{children}</div>;
}
