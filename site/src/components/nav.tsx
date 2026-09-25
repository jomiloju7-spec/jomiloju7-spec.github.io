'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav, profile } from '@/data/content';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

const sectionIds = ['hero', 'experience', 'skills', 'projects', 'about', 'education', 'contact'];

export function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-border bg-surface/80 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-md"
      >
        <Link
          href="/"
          className="focus-ring ml-1 shrink-0 rounded-full font-display text-sm font-semibold text-fg"
        >
          {profile.shortName}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const id = item.href.split('#')[1];
            const isActive = pathname === '/' && active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'focus-ring relative rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg',
                  isActive && 'text-fg',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-border bg-surface p-3 shadow-xl md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring block rounded-xl px-4 py-3 text-sm font-medium text-fg hover:bg-primary/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
