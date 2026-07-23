'use client';

import { ReactLenis, type LenisRef } from 'lenis/react';
import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap';

/**
 * Lenis smooth scroll (the 2026 standard) driven by GSAP's ticker so that
 * ScrollTrigger and momentum scrolling stay perfectly in sync, no jitter.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    registerGsap();

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    const onScroll = () => ScrollTrigger.update();
    lenis?.on('scroll', onScroll);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off('scroll', onScroll);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        // A touch snappier than the default 0.1 so scrolling tracks the wheel
        // closely (less "floaty lag") while staying smooth.
        lerp: 0.15,
        smoothWheel: true,
        syncTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
