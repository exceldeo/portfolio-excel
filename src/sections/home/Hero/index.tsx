import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import Button from '@/components/buttons/Button';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 7,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.9385584875935393,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id='home' className=' w-full'>
      <Particles
        className='absolute bottom-0 left-0 right-0 top-0 z-0'
        init={particlesInit}
        options={particlesOptions}
      />
      <div className='flex min-h-screen w-full flex-col justify-center pt-5 md:flex-row '>
        <div className='mx-auto grid content-center px-5 text-center'>
          <div className=''>
            <h1 className='text-4xl font-bold text-white sm:text-7xl'>
              Hi, I'm Excel Deo
            </h1>
            <h2 className='font-mediumtext-white text-base text-white sm:text-2xl'>
              I'm a{' '}
              <span className='text-primary-600'>Fullstack Developer </span> and{' '}
              <span className='text-primary-600'>Mobile Developer</span>
            </h2>
            <div>
              <Button className='mt-5' variant='dark' isRound={false} size='lg'>
                Curriculum Vitae
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
