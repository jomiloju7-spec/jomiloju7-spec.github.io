import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  tone = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'muted';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        tone === 'default'
          ? 'border-primary/30 bg-primary/10 text-primary'
          : 'border-border text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
