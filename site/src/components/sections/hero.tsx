'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { credentialBadges, hero, profile } from '@/data/content';
import { Button } from '@/components/ui/button';
import { CredentialBadge } from '@/components/credential-badge';
import { GmailIcon } from '@/components/gmail-icon';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center px-4 pt-28">
      <div className="container mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p variants={item} className="font-display text-lg font-medium text-muted">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-balance font-display text-4xl font-bold leading-[1.1] sm:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text font-display text-lg font-semibold text-transparent sm:text-xl"
          >
            {hero.subhead}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-balance text-muted">
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            {credentialBadges.map((b) => (
              <CredentialBadge key={b.label} label={b.label} mark={b.mark} />
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <Button variant="primary" asChild>
              <a href="/#contact">
                <GmailIcon size={16} />
                Contact
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/#projects">
                View My Work
                <ArrowRight size={16} />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface lg:mx-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.jpg" alt={profile.name} className="h-full w-full object-cover" loading="eager" />
        </motion.div>
      </div>
    </section>
  );
}
