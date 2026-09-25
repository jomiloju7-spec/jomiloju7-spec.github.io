import { certifications } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Credentials" title="Certifications & Achievements" />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name + i} index={i}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <Award className="text-accent" size={22} />
                  {cert.placeholder && <Badge tone="muted">Placeholder</Badge>}
                </div>
                <h3 className="font-display font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
