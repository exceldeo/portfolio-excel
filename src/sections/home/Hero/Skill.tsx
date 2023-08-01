import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useHover from '@/hooks/useHover';

import { technologies, techStackData } from '@/data/techstackData';

import cx from '@/utils/cx';

const StackChip: React.FC<{
  content: string;
  setHoverChip: (s: string | undefined) => void;
}> = ({ content, setHoverChip }) => {
  const [chipRef, isChipHover] = useHover();
  useEffect(() => {
    if (isChipHover) {
      setHoverChip(content);
    } else {
      setHoverChip(undefined);
    }
  }, [isChipHover, content, setHoverChip]);

  return (
    <div
      ref={chipRef}
      className='bg-warm-gray-200 hover:bg-warm-gray-100 hover:dark:bg-warm-gray-600 dark:bg-warm-gray-700 border-warm-gray-300 dark:border-warm-gray-600 cursor-pointer whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-normal transition-all dark:font-light'
    >
      {content}
    </div>
  );
};

const SkillSection = () => {
  const [hoveredChip, setHoveredChip] = useState<string>();

  return (
    <section
      id='tech-stack'
      className='w-full relative z-20 mx-auto min-h-[15rem] md:min-h-[10rem]'
    >
      <div className='absolute w-full'>
        <motion.div
          variants={{
            offscreen: {
              y: 10,
              opacity: 0,
              transition: {
                type: 'keyframes',
                duration: 0.8,
              },
            },
            onscreen: {
              y: 0,
              opacity: 100,
              transition: {
                type: 'keyframes',
                duration: 0.5,
              },
            },
          }}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className='bg-warm-gray-100 dark:bg-warm-gray-800 border-warm-gray-400 dark:border-warm-gray-600 z-30 min-w-full  border-t p-8 shadow-lg'
        >
          <h2 className='z-20 text-center text-3xl font-normal'>
            Tech I&apos;ve tinkered with
          </h2>
          <div className='mt-4 flex justify-center'>
            <div className='group relative max-w-sm overflow-hidden'>
              <div className='from-warm-gray-100 dark:from-warm-gray-800 to-warm-gray-100/0 dark:to-warm-gray-800/0 pointer-events-none absolute left-0 top-0 z-30 h-[4rem] w-[4rem] bg-gradient-to-r' />
              <div className='from-warm-gray-100 dark:from-warm-gray-800 to-warm-gray-100/0 dark:to-warm-gray-800/0 pointer-events-none absolute right-0 top-0 z-30 h-[4rem] w-[4rem] bg-gradient-to-l' />
              <div className='animate-marquee group-hover:pause z-30 flex w-fit gap-2'>
                {technologies.map((techs) => (
                  <StackChip
                    key={techs}
                    content={techs}
                    setHoverChip={setHoveredChip}
                  />
                ))}
              </div>
              <div className='animate-marquee2 group-hover:pause absolute top-0 z-10 mx-2 flex w-fit gap-2'>
                {technologies.map((techs) => (
                  <StackChip
                    key={techs}
                    content={techs}
                    setHoverChip={setHoveredChip}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='mx-auto mt-12 flex max-w-6xl flex-wrap justify-around gap-2'>
            {techStackData.map((data) => {
              return (
                <Tooltip.Provider key={data.name} delayDuration={100}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className='relative h-[3rem] w-[4rem]'>
                        <Image
                          src={data.src}
                          alt={data.name}
                          fill
                          className={cx(
                            'object-contain invert transition-opacity dark:invert-0',
                            hoveredChip === data.tech
                              ? 'opacity-100'
                              : 'opacity-60 hover:opacity-100'
                          )}
                        />
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className='bg-warm-gray-300 dark:bg-warm-gray-700 text-warm-gray-900 dark:text-warm-gray-50 animate-slideUpAndFade z-30 rounded-lg px-2 py-1 text-sm shadow-md'
                        sideOffset={5}
                        data-side='bottom'
                      >
                        {data.name}
                        <Tooltip.Arrow className='fill-warm-gray-300 dark:fill-warm-gray-700' />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
