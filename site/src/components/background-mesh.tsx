export function BackgroundMesh() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-1/4 left-[-10%] h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl animate-drift"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, var(--primary), transparent 70%)',
        }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[55vh] w-[55vh] rounded-full opacity-30 blur-3xl animate-drift"
        style={{
          background: 'radial-gradient(circle at 60% 40%, var(--accent), transparent 70%)',
          animationDelay: '-8s',
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[50vh] w-[50vh] rounded-full opacity-25 blur-3xl animate-drift"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--highlight), transparent 70%)',
          animationDelay: '-14s',
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
