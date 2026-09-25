import { education } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/unilag-logo.png" alt="" className="mt-1 h-11 w-11 shrink-0" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold">{ed.degree}</h3>
                  {ed.placeholder && <Badge tone="muted">Placeholder</Badge>}
                </div>
                <p className="mt-1 text-sm font-medium text-primary">
                  {ed.school} · {ed.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
