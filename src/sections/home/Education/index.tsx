import { motion } from 'framer-motion';
import React from 'react';

import EducationCard from '@/components/card/educationCard';

const EducationSection = () => {
  return (
    <section className='container mx-auto mt-[100px] px-10 py-4' id='education'>
      <h1 className='text-4xl font-bold text-stone-900 dark:text-stone-50'>
        Education
      </h1>
      <motion.div
        className='mt-8 flex flex-col gap-3'
        initial='offscreen'
        whileInView='onscreen'
        transition={{
          staggerChildren: 0.25,
          delayChildren: 0.2,
        }}
      >
        <EducationCard
          company='ITS'
          year='2018 - 2022'
          desc={[
            '- Majoring in Informatics Engineering',
            '- Member of HMTC ITS 2020 - 2021',
          ]}
          grade='GPA 3.8/4.0'
        />
        <EducationCard
          company='SMAK St. Agustinus Kediri'
          year='2015 - 2018'
          desc={['']}
          grade='Avarage Grade 89'
          isLast
        />
      </motion.div>
      {/* <div className='mt-16 text-center text-sm font-light'>
        More complete information can be seen in my{' '}
        <Link
          href='https://drive.google.com/file/d/1lbOeWQ-blvLejchyVffinvH_5_K6Bymj/view?usp=sharing'
          target='_blank'
          className='font-medium underline'
        >
          Resume
        </Link>
        .
      </div> */}
    </section>
  );
};

export default EducationSection;
