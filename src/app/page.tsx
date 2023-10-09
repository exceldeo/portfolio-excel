'use client';

import * as React from 'react';

import { Metadata } from '@/components/metadata';
import Navbar from '@/components/Navbar';

import HeroSection from '@/sections/home/Hero';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export const metadata: Metadata = {
  title: {
    template: '%s | Excel Deo',
    default: 'Home',
  },
  description: 'Home Page',
  robots: {},
  icon: '',
  shortcut: '',
  apple: '',
  manifest: '',

  authors: [],
  openGraph: {
    url: '',
    title: '',
    description: '',
    siteName: '',
    images: [],
    type: '',
    locale: '',
  },
  twitter: {
    card: '',
    creator: '',
    title: '',
    description: '',
    images: [],
  },
};

export default function HomePage() {
  return (
    <div>
      <main className='bg-dark w-full'>
        <Navbar />
        <HeroSection />
        {/* <EducationSection />
        <ExperienceSection /> */}
      </main>
      {/* floating button */}
    </div>
  );
}
