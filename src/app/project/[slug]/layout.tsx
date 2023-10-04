import React from 'react';

import Navigation from '@/app/project/component/nav';

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      <main className='bg-dark  min-h-screen'>{children}</main>
    </div>
  );
}

export default ProjectLayout;
