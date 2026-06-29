import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saurav K | Quality Analyst Lead',
  description:
    'Quality Analyst Lead portfolio showcasing leadership, test automation, QA strategy, and AI-assisted testing excellence.',
  metadataBase: new URL('https://example.com'),
  keywords: ['Quality Analyst Lead', 'QA Leadership', 'Test Automation', 'AI-assisted testing'],
  openGraph: {
    title: 'Saurav K | Quality Analyst Lead',
    description:
      'Quality Analyst Lead portfolio showcasing leadership, test automation, QA strategy, and AI-assisted testing excellence.',
    type: 'website',
    url: 'https://example.com',
    images: [{ url: '/og-image.png' }]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://example.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
