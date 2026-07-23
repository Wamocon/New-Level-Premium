import { cn } from '@/lib/utils';

/**
 * The New Level Concierge avatar: a warm, premium "person in a suit with a gold
 * bow-tie" mark on the brand gold disc. Reads as a real human concierge rather
 * than a generic chat bubble, at any size (launcher, header, message).
 */
export function ConciergeAvatar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-gold-soft to-bronze',
        className,
      )}
    >
      <svg viewBox="0 0 48 48" className="size-full" fill="none">
        {/* soft top light on the disc */}
        <circle cx="24" cy="24" r="24" fill="url(#nlc_glow)" />
        {/* suit shoulders */}
        <path d="M9.5 45C9.5 34.8 15.9 30 24 30s14.5 4.8 14.5 15z" fill="#0A0A0C" />
        {/* head */}
        <circle cx="24" cy="17.6" r="7.4" fill="#0A0A0C" />
        {/* shirt V */}
        <path d="M24 30.4 19.4 34.2 24 42 28.6 34.2z" fill="#F5F2EA" />
        {/* bow-tie */}
        <path d="M20.9 32.1 24 34l-3.1 1.9z" fill="#E7D6B0" />
        <path d="M27.1 32.1 24 34l3.1 1.9z" fill="#E7D6B0" />
        <circle cx="24" cy="34" r="1" fill="#8f6f34" />
        <defs>
          <radialGradient id="nlc_glow" cx="0.5" cy="0.28" r="0.75">
            <stop offset="0" stopColor="#fff3d4" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fff3d4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </span>
  );
}
