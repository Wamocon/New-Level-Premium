'use client';

import { useRef } from 'react';
import { gsap, registerGsap } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';

/**
 * Counts a credibility figure up from zero when it scrolls into view. The FINAL
 * number is rendered in SSR markup (SEO + no-JS + reduced-motion all show the
 * correct value); the tween only runs client-side when motion is allowed.
 */
export function CountUp({
  value,
  suffix = '',
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: value,
        duration: 1.5,
        ease: 'power2.out',
        snap: { v: 1 },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v)) + suffix;
        },
      });
    });
    return () => mm.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
