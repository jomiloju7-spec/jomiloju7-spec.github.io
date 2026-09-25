'use client';

import { motion, type Variants } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  index = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  as?: 'div' | 'li';
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
