import { aboutQA } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little more about me" />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {aboutQA.map((qa, i) => (
            <Reveal key={qa.q} index={i} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display font-semibold text-fg">{qa.q}</p>
              <p className="mt-2 text-sm text-muted">{qa.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
