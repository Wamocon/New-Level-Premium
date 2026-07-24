'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MousePointer2 } from 'lucide-react';

// three/drei stays out of the route's initial JS — loaded only when opened.
const PanoScene = dynamic(() => import('@/components/complexes/PanoScene'), {
  ssr: false,
  loading: () => null,
});

/**
 * Click-to-load 360° panorama. Shows the flat still as a poster with an "Explore
 * in 360°" affordance; on click it mounts the WebGL sphere viewer. Keeps the
 * heavy WebGL bundle off first paint.
 */
export function Panorama360({ src }: { src: string }) {
  const t = useTranslations('complex');
  const [open, setOpen] = useState(false);

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl border border-white/8 bg-obsidian">
      {open ? (
        <>
          <PanoScene src={src} />
          <span className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-obsidian/60 px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.15em] text-cloud/70 backdrop-blur-sm">
            <MousePointer2 className="size-3.5" />
            {t('panoDrag')}
          </span>
        </>
      ) : (
        <button type="button" onClick={() => setOpen(true)} aria-label={t('panoCta')} className="group absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
          />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-obsidian/20" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="flex size-16 items-center justify-center rounded-full border border-gold/40 bg-obsidian/50 text-gold backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold">360°</span>
            </span>
            <span className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-obsidian">
              {t('panoCta')}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
