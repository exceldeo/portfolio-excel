import { motion } from 'framer-motion';
import React from 'react';

import ProjectsCard from '@/components/card/projectsCard';

const ProjectsSection = () => {
  let durationData = 0.5;
  return (
    <section className='container mx-auto px-10 py-4' id='projects'>
      <h1 className='text-center text-4xl font-bold text-stone-900 dark:text-stone-50'>
        Projects
      </h1>
      <div className='mt-8 grid grid-cols-4 gap-2 md:grid-rows-6'>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          exit={{
            opacity: 0,
            transition: { duration: (durationData = durationData + 0.3) },
          }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <ProjectsCard />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
