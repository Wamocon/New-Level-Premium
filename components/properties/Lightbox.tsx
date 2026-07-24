'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Zero-dependency fullscreen gallery on the native <dialog> element (free focus
 * trap + Esc). Arrow-key + button nav, a counter, and a thumbnail rail. Backdrop
 * is warm obsidian at ~92% (never pure black). Inner content mounts only while
 * open, so thumbnails don't load until used.
 */
export function Lightbox({
  images,
  index,
  open,
  onIndex,
  onClose,
  alt,
}: {
  images: string[];
  index: number;
  open: boolean;
  onIndex: (i: number) => void;
  onClose: () => void;
  alt: string;
}) {
  const t = useTranslations('property');
  const ref = useRef<HTMLDialogElement>(null);

  const go = useCallback(
    (dir: number) => onIndex((index + dir + images.length) % images.length),
    [index, images.length, onIndex],
  );

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={`${alt} — ${index + 1} / ${images.length}`}
      className="fixed inset-0 z-[100] m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-obsidian/92 backdrop:backdrop-blur-sm"
    >
      {open && (
        <div className="on-dark flex h-dvh w-screen flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-sm text-cloud/70">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t('close')}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cloud transition-colors hover:border-gold hover:text-gold"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              key={images[index]}
              src={images[index]}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t('prevPhoto')}
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-obsidian/50 text-cloud backdrop-blur-md transition-colors hover:bg-obsidian/80 hover:text-gold"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t('nextPhoto')}
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-obsidian/50 text-cloud backdrop-blur-md transition-colors hover:bg-obsidian/80 hover:text-gold"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-4">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onIndex(i)}
                  className={cn(
                    'relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-lg border transition-colors',
                    i === index ? 'border-gold' : 'border-white/10 hover:border-white/40',
                  )}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}
