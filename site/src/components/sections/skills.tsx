import { skills } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal
              key={group.group}
              index={i}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display font-semibold text-primary">{group.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
