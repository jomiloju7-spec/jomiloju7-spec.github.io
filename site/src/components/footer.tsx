import { profile } from '@/data/content';

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
