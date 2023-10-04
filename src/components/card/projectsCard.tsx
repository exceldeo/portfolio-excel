import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BsGlobe } from 'react-icons/bs';

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
    <motion.a
      whileHover='onHover'
      initial='beforeHover'
      href={'project/' + project.slug}
    >
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
            className='h-full
           w-full
           bg-stone-300/10 px-3 pb-3
           pt-2
          '
          >
            <div className='flex h-full flex-col'>
              <div className='h-3/4 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                  {project.name}
                </h5>
                <p className='line-clamp-6 text-ellipsis font-normal text-gray-400'>
                  {project.description}
                </p>
              </div>
              <div className='flex justify-center'>
                {project.github && project.github !== '' && (
                  <Link href={project.github} target='_blank'>
                    <button
                      type='button'
                      className='mb-2 mr-2 inline-flex items-center rounded-lg border border-white  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500'
                    >
                      <svg
                        className='mr-2 h-4 w-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      Github
                    </button>
                  </Link>
                )}
                {project.url && project.url !== '' && (
                  <Link href={project.url} target='_blank'>
                    <button
                      type='button'
                      className='mb-2 mr-2 inline-flex items-center rounded-lg border border-white px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500'
                    >
                      <BsGlobe className='mr-2 h-4 w-4' /> Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default ProjectsCard;
