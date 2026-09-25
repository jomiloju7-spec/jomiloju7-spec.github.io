'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { hero, profile } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlitchPortrait } from '@/components/glitch-portrait';

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
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col items-center justify-center px-4 pt-28 text-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        <motion.div variants={item} className="mb-6">
          <GlitchPortrait src="/portrait.jpg" alt={profile.name} />
        </motion.div>

        <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {profile.statusBadges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </motion.div>

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

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" asChild>
            <a href={profile.resumeUrl} download>
              <Download size={16} />
              Download Resume
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/#contact">
              Get in touch
              <ArrowRight size={16} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
