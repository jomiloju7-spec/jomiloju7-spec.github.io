'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/content';
import { Badge } from '@/components/ui/badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        {project.placeholder && <Badge tone="muted">Placeholder</Badge>}
      </div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
        {project.role} · {project.year}
      </p>
      <p className="mt-3 flex-1 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-primary"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-primary"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
