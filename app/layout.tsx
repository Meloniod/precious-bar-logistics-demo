import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurum Link | Precious Metals Logistics Network',
  description: 'A professional connection point for precious metal owners and qualified logistics providers. Find the right operational match through a structured, compliance-first network.',
  metadataBase: new URL('https://precious-bar-logistics-demo.vercel.app'),
  openGraph: { title: 'Aurum Link | Move value with confidence', description: 'Connect precious metal owners with qualified logistics partners.', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA"><body>{children}</body></html>;
}
