'use client';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import '@/styles/globals.css';

import ScrollButton from '@/components/buttons/ScrollButton';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <ThemeProvider enableColorScheme={true} attribute='class'>
          {children}
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
