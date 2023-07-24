import { motion } from 'framer-motion';
import React from 'react';

const EducationCard: React.FC<{
  company: string;
  year: string;
  grade: string;
  desc: Array<string> | null;
  isLast?: boolean;
}> = ({ company, year, grade, desc, isLast }) => {
  return (
    <motion.div className='flex gap-4'>
      <div className='relative flex flex-col items-center'>
        <div className='bg-warm-gray-100 z-20 flex aspect-square h-[1.75rem] items-center justify-center rounded-full dark:bg-[#222120]'>
          <div className='dark:border-warm-gray-600 border-primary-600 mt-0.5 aspect-square h-[1.25rem] rounded-full border-[5px] bg-white' />
        </div>
        {!isLast && (
          <div className='dark:bg-warm-gray-600 absolute z-10 h-[120%] w-[1px] bg-stone-400' />
        )}
      </div>
      <motion.div
        className='flex flex-1 flex-col'
        variants={{
          offscreen: {
            opacity: 0,
            x: -10,
          },
          onscreen: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'keyframes',
              duration: 0.2,
              ease: 'easeInOut',
            },
          },
        }}
      >
        <p className='text-2xl font-semibold'>{company}</p>
        <p className='text-lg font-medium'>{year}</p>
        <p className='text-lg font-medium'>{grade}</p>
        {desc &&
          desc.map((item, index) => (
            <p key={index} className='max-w-4xl text-sm md:text-base'>
              {item}
            </p>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default EducationCard;
