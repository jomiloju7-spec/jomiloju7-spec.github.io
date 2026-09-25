'use client';

import { useMemo, useState } from 'react';
import { Nav } from '@/components/nav';
import { BackgroundMesh } from '@/components/background-mesh';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/content';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const visible = projects.filter((p) => filter === 'All' || p.tech.includes(filter));

  return (
    <>
      <BackgroundMesh />
      <Nav />
      <main className="px-4 pb-24 pt-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Full index
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold">All Projects</h1>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={cn(
                  'focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  filter === tag
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted hover:text-fg',
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.slug} index={i}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
