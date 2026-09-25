import { Github, Linkedin, Mail } from 'lucide-react';
import { contact, profile } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

const links = [
  {
    href: `mailto:${profile.email}`,
    label: 'Email',
    icon: <Mail size={28} strokeWidth={1.75} />,
    hoverClass: 'hover:bg-primary hover:text-bg hover:border-primary',
  },
  {
    href: profile.linkedin,
    label: 'LinkedIn',
    icon: <Linkedin size={28} strokeWidth={1.75} />,
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
  },
  {
    href: profile.github,
    label: 'GitHub',
    icon: <Github size={28} strokeWidth={1.75} />,
    hoverClass: 'hover:bg-fg hover:text-bg hover:border-fg',
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.blurb} />

        <Reveal className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-6">
          {links.map(({ href, label, icon, hoverClass }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              title={label}
              className={`focus-ring flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-surface text-fg transition-all duration-200 hover:-translate-y-1 hover:scale-110 ${hoverClass}`}
            >
              {icon}
            </a>
          ))}
        </Reveal>

        <Reveal index={1}>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-muted">{contact.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
