import { experience } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Career" title="Experience" />
        <ol className="mx-auto flex max-w-2xl flex-col gap-6 border-l border-border pl-6">
          {experience.map((job, i) => (
            <Reveal key={job.role + i} index={i} as="li" className="relative">
              <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-primary" />
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                  {job.placeholder && <Badge tone="muted">Placeholder</Badge>}
                </div>
                <p className="mt-1 text-sm font-medium text-primary">
                  {job.org} · {job.period}
                </p>
                <p className="mt-3 text-sm text-muted">{job.summary}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
