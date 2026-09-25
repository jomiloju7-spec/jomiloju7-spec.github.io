import { hackathons } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Trophy } from 'lucide-react';

export function Hackathons() {
  return (
    <section id="hackathons" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Competitions" title="Hackathons" />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {hackathons.map((h, i) => (
            <Reveal key={h.name + h.issuer + i} index={i}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
                <Trophy className="text-primary" size={22} />
                <h3 className="font-display font-semibold">{h.name}</h3>
                <p className="text-sm text-muted">
                  {h.issuer} · {h.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
