import { Reveal } from './reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal index={2}>
          <p className="mt-4 text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
