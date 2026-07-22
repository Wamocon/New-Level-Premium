'use client';

import { createElement, useRef, type ElementType, type ReactNode } from 'react';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect, prefersReducedMotion } from '@/lib/hooks';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** vertical travel in px */
  y?: number;
  delay?: number;
  duration?: number;
  /** stagger the element's direct children instead of the element itself */
  stagger?: number;
}

/**
 * Scroll-triggered reveal. If `stagger` is set, its direct children animate
 * in sequence. Content stays visible when JS is disabled (GSAP only hides it
 * once the tween is created on the client).
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  y = 34,
  delay = 0,
  duration = 1.1,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const target = stagger ? (el.children as unknown as Element[]) : el;
      gsap.from(target, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, stagger]);

  // createElement keeps the polymorphic `as` prop without tripping TS's
  // "props resolve to never" issue on a generic ElementType + ref.
  return createElement(
    Tag as ElementType,
    { ref, className } as Record<string, unknown>,
    children,
  );
}
