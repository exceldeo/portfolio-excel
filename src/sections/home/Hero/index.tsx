import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

import SkillSection from '@/sections/home/Hero/Skill';

function HeroSection() {
  return (
    <section id='home' className='dark:bg-stone-500'>
      <div className='flex p-5'>
        <div className='mx-auto grid w-2/5 content-center '>
          <h1 className='text-7xl font-bold text-stone-900 dark:text-stone-50'>
            Hi, I'm <span className='text-primary-700'>Excel Deo</span>
          </h1>
          <h2 className='text-2xl font-medium text-stone-900 dark:text-stone-50'>
            I'm a{' '}
            <span className='text-primary-400'>
              Fullstack Developer and Mobile Developer
            </span>
          </h2>
          <div>
            <Button className='mt-5' variant='outline'>
              Hire Me
            </Button>
          </div>
        </div>
        <div className='mx-auto my-[20px] flex h-[450px] w-[450px] content-center items-center  justify-center rounded-full  bg-stone-50 shadow-2xl dark:bg-stone-100'>
          <Image
            src='/images/hero.png'
            alt='Picture of the author'
            width={300}
            height={300}
            className='mx-auto mt-4 '
          />
        </div>
      </div>
      <SkillSection />
    </section>
  );
}

export default HeroSection;
