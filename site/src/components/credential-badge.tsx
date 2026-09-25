// Small brand marks for the Hero credential badges. Built as inline SVG
// (not fetched images — this environment has no general internet access)
// using each org's real brand color, since we can't pull their actual
// logo files. Swap in real logo assets in /public later if you have them.

function CnnMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <rect width="22" height="22" rx="5" fill="#CC0000" />
      <text
        x="11"
        y="15"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="8.5"
        fill="#ffffff"
        letterSpacing="0.3"
      >
        CNN
      </text>
    </svg>
  );
}

function UnilagMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <circle cx="11" cy="11" r="11" fill="#046A38" />
      <text
        x="11"
        y="14.5"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="8"
        fill="#ffffff"
        letterSpacing="0.2"
      >
        UL
      </text>
    </svg>
  );
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
