'use client';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html>
      {header}
      <body>
        <ThemeProvider enableColorScheme={true} attribute='class'>
          <Navbar />
          <main className='w-full'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
