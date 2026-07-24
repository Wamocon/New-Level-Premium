import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 ease-lux focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gold text-obsidian hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_12px_40px_-12px_rgba(201,162,75,0.7)]',
        metal:
          'btn-metal bg-gradient-to-b from-[#ffffff] via-[#e7d6b0] to-[#9c7a3c] text-obsidian hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-14px_rgba(201,162,75,0.85)]',
        outline:
          'border border-white/15 text-cloud hover:border-gold/70 hover:bg-white/[0.03] hover:text-gold',
        ghost: 'text-cloud/80 hover:text-gold',
      },
      size: {
        sm: 'h-10 px-5 text-[0.8rem]',
        md: 'h-12 px-7 text-sm',
        lg: 'h-14 px-9 text-[0.95rem]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { buttonVariants };
