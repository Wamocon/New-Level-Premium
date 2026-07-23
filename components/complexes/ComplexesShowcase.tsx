'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// The WebGL scene is imported only through this dynamic() call, so the heavy
// three/drei chunk stays out of the route's initial JS and never touches LCP.
const TowerMaquette = dynamic(() => import('@/components/three/TowerMaquette'), {
  ssr: false,
  loading: () => null,
});

/**
 * Desktop-only "vitrine" that houses the reused tower maquette in the complexes
 * page header — a catalogued exhibit introducing the portfolio, not a fourth
 * clickable card (no hover-lift, no pointer cursor). The `label` is passed in
 * already-translated from the server component. The canvas is deferred to idle
 * and only ever mounts at lg+ widths, so phones/tablets pay zero WebGL cost.
 */
export function ComplexesShowcase({ label, className = '' }: { label: string; className?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Never pull the WebGL bundle onto small screens.
    if (!window.matchMedia('(min-width: 1024px)').matches) return;

    const start = () => setShow(true);
    const ric = window.requestIdleCallback;
    if (ric) {
      const id = ric(start, { timeout: 1400 });
      return () => window.cancelIdleCallback?.(id);
    }
    const to = window.setTimeout(start, 700);
    return () => window.clearTimeout(to);
  }, []);

  return (
    <div className={`hidden lg:block ${className}`}>
      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#15121a] via-[#0d0d12] to-[#08080a] shadow-[0_45px_90px_-55px_rgba(0,0,0,0.85)]">
        {/* case interior: warm gold pool where the lights catch, + floor vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_74%_at_50%_30%,rgba(201,162,75,0.16),transparent_72%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
        />

        {/* deferred maquette, faded in */}
        <div
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {show && <TowerMaquette />}
        </div>

        {/* plinth hairline where the model meets its base */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 bottom-[4.5rem] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        />

        {/* glass-pane top glare */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
        />

        {/* museum placard — reuses the site's gold-eyebrow token */}
        <figcaption className="absolute inset-x-6 bottom-5 flex items-center gap-2.5">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold/75">
            {label}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
