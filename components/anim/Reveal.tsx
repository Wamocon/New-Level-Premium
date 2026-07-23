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
 * Scroll-triggered reveal driven by IntersectionObserver (not GSAP
 * ScrollTrigger) so it fires reliably under Lenis smooth scroll. Content is
 * only hidden once JS runs, reveals as soon as it enters the viewport, and a
 * fail-safe guarantees it can never stay invisible.
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

    const targets: Element[] = stagger ? Array.from(el.children) : [el];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { y, opacity: 0 });
    }, el);

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        overwrite: 'auto',
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    );
    io.observe(el);

    // Fail-safe: if the element is at/above the fold but never triggered, show it.
    const safety = window.setTimeout(() => {
      if (!revealed && el.getBoundingClientRect().top < window.innerHeight) reveal();
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, [y, delay, duration, stagger]);

  // createElement keeps the polymorphic `as` prop without tripping TS's
  // "props resolve to never" issue on a generic ElementType + ref.
  return createElement(
    Tag as ElementType,
    { ref, className } as Record<string, unknown>,
    children,
  );
}
