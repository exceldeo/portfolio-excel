import { Metadata } from 'next';
import React from 'react';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Contact',
};

function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar withBackButton={true} />
      <main className='bg-dark min-h-screen pt-24'>{children}</main>
    </div>
  );
}

export default ContactLayout;
