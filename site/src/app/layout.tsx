import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/content';
import { ThemeProvider } from '@/components/theme-provider';

const display = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

const siteUrl = 'https://jomiloju7-spec.github.io';
const description =
  'Portfolio of Oluwajomiloju Dare-Esan — Chemical Engineer focused on networking and automation.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: ['Chemical Engineer', 'Networking', 'Automation', 'Portfolio', profile.name],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: `${profile.name} — Portfolio`,
    description,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Portfolio`,
    description,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
