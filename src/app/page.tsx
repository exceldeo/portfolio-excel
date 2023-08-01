'use client';

import * as React from 'react';

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
      <EducationSection />
      <ExperienceSection />
      <div className='pt-4'>
      <ProjectsSection />

      </div>
    </>
  );
}
