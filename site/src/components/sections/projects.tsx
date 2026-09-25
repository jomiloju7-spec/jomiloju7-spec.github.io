import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { ProjectCard } from '@/components/project-card';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className="px-4 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Placeholder entries — swap in real projects in src/data/content.ts."
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} index={i}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
