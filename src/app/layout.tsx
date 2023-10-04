'use client';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import ScrollButton from '@/components/buttons/ScrollButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <ThemeProvider enableColorScheme={true} attribute='class'>
          <Navbar />
          <main className='mt-[100px] w-full'>{children}</main>
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
