import { memberships } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Users } from 'lucide-react';
import { OrgLogo } from '@/components/org-logo';

export function Memberships() {
  return (
    <section id="memberships" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Community" title="Professional Memberships" />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {memberships.map((m, i) => (
            <Reveal key={m.org + i} index={i}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
                <OrgLogo issuer={m.org} size={40} fallback={<Users className="text-highlight" size={22} />} />
                <h3 className="font-display font-semibold">{m.org}</h3>
                <p className="text-sm text-muted">
                  {m.chapter} · {m.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
