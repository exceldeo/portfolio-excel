import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';

import projectDatas from '@/data/projectData';

import Button from '@/components/buttons/Button';
import ProjectsCard from '@/components/card/projectsCard';

const ProjectsSection = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  let durationData = 0.5;
  return (
    <section className='container mx-auto px-10 py-4' id='projects'>
      <h1 className='text-center text-4xl font-bold text-stone-900 dark:text-stone-50'>
        My Projects
      </h1>
      <div className='mt-8 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-3 lg:grid-cols-4'>
        {projectDatas
          .filter((_, idx) => idx < 8)

          .map((data, idx) => (
            <motion.div
              key={idx}
              initial='hidden'
              animate='visible'
              exit={{
                opacity: 0,
                transition: { duration: (durationData = durationData + 0.3) },
              }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <ProjectsCard
                description={data.description}
                github={data.github}
                id={data.id}
                slug={data.slug}
                images={data.images}
                name={data.name}
                tech={data.tech}
                thumbnail={data.thumbnail}
                url={data.url}
              />
            </motion.div>
          ))}
      </div>

      <div className='flex justify-center pb-5 pt-10'>
        <Button
          className='mt-5'
          variant={currentTheme == 'dark' ? 'primary' : 'outline'}
          isRound={true}
          size='lg'
        >
          Hire Me
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
