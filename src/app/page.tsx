'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import EducationSection from '@/sections/home/Education';
import ExperienceSection from '@/sections/home/Experience';
import HeroSection from '@/sections/home/Hero';
import ProjectsSection from '@/sections/home/Projects';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className='bg-stone-50 dark:bg-[#0f1113]'>
        <EducationSection />
        <ExperienceSection />
      </div>
      <div className={cn('pt-10', 'dark:bg-dark bg-stone-50')}>
        <ProjectsSection />
      </div>
      {/* floating button */}
    </>
  );
}
