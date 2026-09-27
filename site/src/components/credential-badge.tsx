// Small brand marks for the Hero credential badges.

function CnnMark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/cnn-logo.png" alt="" className="h-[22px] w-[22px] shrink-0 rounded-[5px]" />;
}

function UnilagMark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/unilag-logo.png" alt="" className="h-[22px] w-[22px] shrink-0" />;
}

const marks = {
  cnn: { Icon: CnnMark, borderClass: 'border-[#CC0000]/40', textClass: 'text-[#CC0000] dark:text-[#ff6b6b]' },
  unilag: { Icon: UnilagMark, borderClass: 'border-[#046A38]/40', textClass: 'text-[#046A38] dark:text-[#4ade80]' },
};

export function CredentialBadge({ label, mark }: { label: string; mark: keyof typeof marks }) {
  const { Icon, borderClass, textClass } = marks[mark];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border bg-surface py-1.5 pl-1.5 pr-3.5 text-sm font-semibold ${borderClass} ${textClass}`}
    >
      <Icon />
      {label}
    </span>
  );
}
