'use client';

import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';
import { contact, profile } from '@/data/content';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { CopyEmailButton } from '@/components/copy-email-button';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (name.length < 2) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.';
    if (message.length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // Static-friendly submission: if a Formspree-style endpoint is
    // configured (NEXT_PUBLIC_FORM_ENDPOINT), POST there. Otherwise fall
    // back to a mailto: link so the message is never lost. See README.
    if (contact.formEndpoint) {
      setStatus('submitting');
      try {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (res.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
      const body = encodeURIComponent(String(data.get('message') || ''));
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  }

  return (
    <section id="contact" className="px-4 py-24">
      <div className="container">
        <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.blurb} />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="focus-ring mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="focus-ring mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="focus-ring mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" disabled={status === 'submitting'}>
                <Send size={16} />
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>

              {status === 'success' && (
                <p className="text-sm text-primary">
                  Thanks — your message is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-muted">Prefer a direct line? Reach out here:</p>
              <div className="mt-4 flex flex-col gap-3">
                <CopyEmailButton />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
            <p className="px-2 text-sm text-muted">{contact.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
