import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-ring inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-bg px-6 py-3 shadow-[0_0_0_0_rgba(45,212,191,0)] hover:shadow-[0_0_24px_-4px_var(--primary)] hover:-translate-y-0.5',
        secondary:
          'border border-border text-fg px-6 py-3 hover:border-primary hover:text-primary',
        ghost: 'text-fg px-4 py-2 hover:text-primary',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={cn(buttonVariants({ variant }), className)} {...props} />;
  },
);
Button.displayName = 'Button';

export { buttonVariants };
