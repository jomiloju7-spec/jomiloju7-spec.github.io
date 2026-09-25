import { education } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {education.map((ed, i) => (
            <Reveal
              key={ed.degree}
              index={i}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-start"
            >
              <GraduationCap className="mt-1 shrink-0 text-highlight" size={24} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold">{ed.degree}</h3>
                  {ed.placeholder && <Badge tone="muted">Placeholder</Badge>}
                </div>
                <p className="mt-1 text-sm font-medium text-primary">
                  {ed.school} · {ed.period}
                </p>
                <p className="mt-2 text-sm text-muted">{ed.notes}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
