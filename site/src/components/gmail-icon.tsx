// Gmail's envelope mark in its real brand colors — recreated as inline SVG
// since this environment can't fetch Google's official asset file.
export function GmailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 36" aria-hidden>
      <path d="M4 4h40a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="#ffffff" />
      <path d="M0 10.5 20 24l4-2.7L0 5.5z" fill="#4285F4" />
      <path d="M48 10.5 28 24l-4-2.7L48 5.5z" fill="#EA4335" />
      <path d="M0 8v20.5a4 4 0 0 0 4 3.5h2V13z" fill="#34A853" />
      <path d="M48 8v20.5a4 4 0 0 1-4 3.5h-2V13z" fill="#FBBC04" />
      <path
        d="M0 8a4 4 0 0 1 4-4h1.2L24 17 42.8 4H44a4 4 0 0 1 4 4v1.7L24 22.4 0 9.7z"
        fill="#C5221F"
      />
    </svg>
  );
}
