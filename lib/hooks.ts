'use client';

import { useEffect, useLayoutEffect } from 'react';

/** useLayoutEffect that safely no-ops during SSR. */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Whether the user prefers reduced motion (evaluated on the client). */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
