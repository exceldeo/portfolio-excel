import { motion } from 'framer-motion';
import React from 'react';

import Button from '@/components/buttons/Button';
import ProjectCard from '@/components/card/projectCard';

import { Project } from '@/types/Project';

const ProjectsSection = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch('/api/project')
      .then((res) => res.json())
      .then((projects) => {
        setProjects(projects.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className='container mx-auto max-w-7xl px-4 py-4' id='projects'>
      <h2 className='text-4xl font-bold text-stone-50'>Projects</h2>
      <hr className='my-8 border-t-2 border-stone-50 border-opacity-40' />
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projects &&
          !loading &&
          projects.length > 0 &&
          projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
      </div>
      {loading && (
        <div className='flex items-center justify-center'>
          <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-white'></div>
        </div>
      )}

      <div className='flex justify-center pb-5 pt-10'>
        <motion.a
          href='/contact'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button className='mt-5' variant='dark' isRound={false} size='lg'>
            Contact Me
          </Button>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectsSection;
