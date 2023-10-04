import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

function HeroSection() {
  return (
    <section id='home' className=' w-full'>
      <div className='flex w-full flex-col justify-center pt-5 md:flex-row'>
        <Image
          src='/images/hero.png'
          alt='Picture of the author'
          width={450}
          height={450}
          className='mx-auto '
        />
        <div className='mx-auto grid content-end px-5 py-10 md:w-3/6 '>
          <div className='md:mb-10'>
            <h1 className='text-3xl font-bold text-white sm:text-7xl'>
              Hi, I'm <span className='text-primary-500'>Excel Deo</span>
            </h1>
            <h2 className='font-mediumtext-white text-sm text-white sm:text-2xl'>
              I'm a Fullstack Developer and Mobile Developer
            </h2>
            <div>
              <Button
                className='mt-5'
                variant='primary'
                isRound={false}
                size='lg'
              >
                Hire Me
              </Button>
            </div>
          </div>
          <div className='mt-5 md:mt-20'>
            <div className=' space-x-3 '>
              <Button className='mt-5 bg-[#073952] text-white'>Gin</Button>
              <Button className='mt-5 bg-[#09496a] text-white'>Laravel</Button>
              <Button className='mt-5 bg-[#0b5981] text-white'>C++</Button>
              <Button className='mt-5 bg-[#0d6998] text-white'>
                Express JS
              </Button>
              <Button className='mt-5 bg-[#0f79b0] text-white'>GraphQL</Button>
              <Button className='mt-5 bg-[#118ac7] text-white'>Strapi</Button>
            </div>
            <div className='flex space-x-3'>
              <Button className='mt-5 bg-[#118ac7] text-white'>
                React & Next JS
              </Button>
              <Button className='mt-5 bg-[#139ade] text-white'>Flutter</Button>
              <Button className='mt-5 bg-[#1fa7ec] text-white'>Tailwind</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
