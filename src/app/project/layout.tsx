import React from 'react';

import Navbar from '@/components/Navbar';

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar withBackButton={true} />
      <main className='bg-dark  min-h-screen pt-24'>{children}</main>
    </div>
  );
}

export default ProjectLayout;
