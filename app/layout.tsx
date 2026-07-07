import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'Holy Burger Midtown', description: 'fast food • manhattan • 4.8 rating • 1433 Google reviews • 906 3rd Ave, New York, NY 10022, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
