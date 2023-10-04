import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <header>
      <div
        className={`bg-primaryDark-900/500 fixed inset-x-0 top-0 z-50 border-b border-zinc-800 backdrop-blur duration-200 
				`}
      >
        <div className='container mx-auto flex flex-row-reverse items-center justify-between p-6'>
          <div className='flex justify-between gap-8'>
            {/* <Link
              href='/projects'
              className='text-zinc-400 duration-200 hover:text-zinc-100'
            >
              Projects
            </Link> */}
            <Link
              href='/'
              className='text-zinc-400 duration-200 hover:text-zinc-100'
            >
              Home
            </Link>
          </div>

          <Link
            href='/'
            className='text-zinc-300 duration-200 hover:text-zinc-100'
          >
            <ArrowLeft className='h-6 w-6 ' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
