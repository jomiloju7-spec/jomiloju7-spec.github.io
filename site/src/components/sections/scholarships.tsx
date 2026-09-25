import { scholarships } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { GraduationCap } from 'lucide-react';

export function Scholarships() {
  return (
    <section id="scholarships" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Funding" title="Scholarships" />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {scholarships.map((s, i) => (
            <Reveal key={s.name + s.issuer + i} index={i}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
                <GraduationCap className="text-highlight" size={22} />
                <h3 className="font-display font-semibold">{s.name}</h3>
                <p className="text-sm text-muted">
                  {s.issuer} · {s.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
