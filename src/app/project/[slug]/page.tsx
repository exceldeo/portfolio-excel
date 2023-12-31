'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsGlobe } from 'react-icons/bs';

import { useModal } from '@/hooks';

import Carousel from '@/app/project/[slug]/carousel';

import { Project } from '@/types/Project';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const modal = useModal();

  useEffect(() => {
    fetch(`/api/project/${params.slug}`)
      .then((res) => res.json())
      .then((project) => {
        setProject(project.data);
      });
  }, [params.slug]);

  if (!project) {
    return (
      <div className='flex w-full items-center justify-center pt-20 text-white'>
        Loading...
      </div>
    );
  }

  const handlerShowModal = (image: string) => {
    modal.open({
      content: (
        <div className='relative h-full w-full'>
          <img
            src={image}
            className='h-full w-full object-contain'
            alt='Project'
          />
        </div>
      ),
    });
  };

  return (
    <div className='bg-dark container relative isolate mx-auto overflow-hidden pb-9 pt-16'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h1 className='font-display text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            {project.name}
          </h1>

          <div className='mx-auto mt-10 flex max-w-2xl justify-center lg:mx-0 lg:max-w-none'>
            {project.github &&
              project.github.length > 0 &&
              project.github.map((github, i) => {
                return (
                  <Link href={github.url} target='_blank' key={i}>
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
                          fillRule='evenodd'
                          d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {github.label}
                    </button>
                  </Link>
                );
              })}
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
          <div className='mt-6'>
            {project.images.length > 1 && (
              <Carousel
                images={project.images}
                onSelectedImage={(image) => handlerShowModal(image)}
              />
            )}
          </div>

          <div
            className='mt-6 text-left leading-8 text-zinc-300'
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
