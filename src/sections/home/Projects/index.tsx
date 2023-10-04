import React from 'react';

import Button from '@/components/buttons/Button';
import ProjectCard from '@/components/card/projectCard';

import { Project } from '@/types/Project';

const ProjectsSection = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    fetch('/api/project')
      .then((res) => res.json())
      .then((projects) => {
        setProjects(projects.data);
      });
  }, []);

  return (
    <section className='container mx-auto px-10 py-4' id='projects'>
      <h1 className='text-center text-4xl font-bold  text-stone-50'>
        My Projects
      </h1>
      <div className='mt-8 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-3 lg:grid-cols-4'>
        {projects &&
          projects.length > 0 &&
          projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
      </div>

      <div className='flex justify-center pb-5 pt-10'>
        <Button className='mt-5' variant='outline' isRound={false} size='lg'>
          Hire Me
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
