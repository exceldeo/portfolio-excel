import { motion } from 'framer-motion';
import React from 'react';

import { Project } from '@/types/Project';

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 },
};

const textVariants = {
  beforeHover: { opacity: 0 },
  onHover: { opacity: 1 },
};

function ProjectsCard(project: Project) {
  return (
    <motion.a whileHover='onHover' initial='beforeHover' href='#'>
      <div className=' relative flex h-[320px] w-[340px] justify-end overflow-hidden rounded-lg border shadow dark:border-gray-700 '>
        <motion.div
          variants={imageVariants}
          className='absolute left-0 top-0 h-full w-full bg-cover'
          style={{
            backgroundImage: `url('/images/bg.jpeg')`,
          }}
        />
        <motion.div
          className='
            z-10
            flex
            w-[360px]
            items-end
            '
          variants={textVariants}
        >
          <div
            className='h-[150px]
           w-full
           bg-stone-300/10 px-3 pb-3
           pt-2
          '
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
              {project.name}
            </h5>
            <p className='line-clamp-3 text-ellipsis font-normal text-gray-400'>
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default ProjectsCard;
