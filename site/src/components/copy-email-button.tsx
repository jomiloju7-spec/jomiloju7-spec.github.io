'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '@/data/content';
import { cn } from '@/lib/utils';

export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still selectable text.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-primary hover:text-primary',
        className,
      )}
      aria-live="polite"
    >
      {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
      {copied ? 'Copied!' : profile.email}
    </button>
  );
}
