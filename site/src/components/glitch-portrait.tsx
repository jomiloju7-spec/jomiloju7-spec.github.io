'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Chromatic-split "glitch" reveal: two tinted copies of the same portrait,
// offset a few pixels and blended over the base image, briefly displaced in
// horizontal slices on mount and on hover, then settling back into a clean
// photo. Built from scratch with CSS mix-blend-mode + keyframe animation —
// no external glitch library.
export function GlitchPortrait({ src, alt }: { src: string; alt: string }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    // Play the glitch-in once on mount.
    setActive(true);
    timeoutRef.current = setTimeout(() => setActive(false), 900);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [reduceMotion]);

  const trigger = () => {
    if (reduceMotion) return;
    setActive(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActive(false), 700);
  };

  return (
    <div
      className="glitch-portrait group relative mx-auto h-40 w-40 overflow-hidden rounded-3xl border border-border bg-surface sm:h-48 sm:w-48"
      onMouseEnter={trigger}
      onFocus={trigger}
      tabIndex={-1}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="eager" />

      {!reduceMotion && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden
            className={`glitch-layer glitch-cyan pointer-events-none absolute inset-0 h-full w-full object-cover ${active ? 'is-active' : ''}`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden
            className={`glitch-layer glitch-red pointer-events-none absolute inset-0 h-full w-full object-cover ${active ? 'is-active' : ''}`}
          />
          <div
            aria-hidden
            className={`glitch-scanlines pointer-events-none absolute inset-0 ${active ? 'is-active' : ''}`}
          />
        </>
      )}
    </div>
  );
}
