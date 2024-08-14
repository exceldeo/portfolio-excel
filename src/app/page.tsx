import { Metadata } from 'next';
import * as React from 'react';

import Navbar from '@/components/Navbar';

import HeroSection from '@/sections/home/Hero';
import ProjectsSection from '@/sections/home/Projects';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export const metadata: Metadata = {
  title: 'Home',
  icons: {
    icon: '/favicon.ico',
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
        <ProjectsSection />
      </main>
      {/* floating button */}
    </div>
  );
}
