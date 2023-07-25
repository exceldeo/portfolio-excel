import { motion } from 'framer-motion';
import React from 'react';

import ExperienceCard from '@/components/card/experienceCard';

const ExperienceSection = () => {
  return (
    <section className='container mx-auto px-10 py-4' id='experience'>
      <h1 className='text-right text-4xl font-bold text-stone-900 dark:text-stone-50'>
        Experience
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
        <ExperienceCard
          company='ITS'
          year='2018 - 2022'
          desc={[
            'I am currently studying at ITS Surabaya majoring in Informatics Engineering.',
          ]}
          position='GPA 3.8/4.0'
        />
        <ExperienceCard
          company='SMAK St. Agustinus Kediri'
          year='2015 - 2018'
          desc={['']}
          position='Avarage Grade 89'
          isLast
        />
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
