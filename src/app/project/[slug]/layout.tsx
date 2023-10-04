import React from 'react';

import Navigation from '@/app/project/component/nav';

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      <main className='mt-[80px]'>{children}</main>
    </div>
  );
}

export default ProjectLayout;
