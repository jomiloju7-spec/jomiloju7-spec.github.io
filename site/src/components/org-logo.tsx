import type { ReactNode } from 'react';

// Real logo assets on hand, keyed by the exact issuer/org string used in
// content.ts. Add more entries here as real logo files land in /public —
// this environment can't fetch logos from the open internet, so only
// orgs whose logo was supplied directly (uploaded or cropped from a
// screenshot) are covered. Everything else falls back to a generic icon.
const orgLogos: Record<string, string> = {
  CNN: '/cnn-logo.png',
  'CNN (Cable News Network), United States': '/cnn-logo.png',
  'AIChE - American Institute of Chemical Engineers': '/aiche-logo.png',
  'American Institute of Chemical Engineers (AIChE)': '/aiche-logo.png',
  'Nigerian Society of Chemical Engineers (NSChE)': '/nsche-logo.png',
  'Cisco Networking Academy': '/cisco-logo.png',
  Udacity: '/udacity-logo.png',
  Nestlé: '/nestle-logo.png',
  ALX: '/alx-logo.png',
  'The Industry Discourse (TID 5.0)': '/tid-logo.png',
  'United States Artificial Intelligence Institute': '/usaii-logo.png',
  Micro1: '/micro1-logo.png',
  Cowrywise: '/cowrywise-logo.png',
};

export function OrgLogo({ issuer, size = 32, fallback }: { issuer: string; size?: number; fallback: ReactNode }) {
  const src = orgLogos[issuer];
  if (!src) return <>{fallback}</>;
  // White chip behind every mark: guarantees contrast for thin-lined or
  // dark-on-transparent logos (Nestlé, Udacity) and reads fine behind
  // solid-tile logos (CNN, AIChE) too. Height is fixed, width grows to fit
  // the logo's natural shape — square icon marks stay compact, wide
  // wordmarks (Cowrywise, USAII, Udacity) get room instead of being
  // squeezed into a square and shrunk.
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-2.5 py-1.5"
      style={{ height: size + 12 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="w-auto object-contain" style={{ height: size }} />
    </span>
  );
}
