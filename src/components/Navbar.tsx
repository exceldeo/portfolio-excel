'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

import NAV_ITEMS from '@/data/navbarData';

import { MenuButton } from '@/components/menu/HamburgerMenuButton';

import cx from '@/utils/cx';

function Navbar({ withBackButton = false }: { withBackButton?: boolean }) {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  let duration = 0.1;

  const md = useMediaQuery('md');

  useEffect(() => {
    if (md) {
      setNavbar(false);
    }
  }, [md]);

  return (
    <header>
      <div
        className={`bg-primaryDark-900/500 fixed inset-x-0 top-0 z-50 border-b border-zinc-800 backdrop-blur duration-200
      `}
      >
        <div className=' flex flex-row'>
          <div className='container mx-auto flex flex-row-reverse items-center justify-between p-6'>
            <div className='flex md:hidden md:items-center'>
              <MenuButton
                isOpen={navbar}
                onClick={() => setNavbar(!navbar)}
                strokeWidth='3'
                color='#fff'
                lineProps={{ strokeLinecap: 'round' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
            </div>

            <div className='hidden justify-between gap-8 md:flex'>
              {withBackButton && (
                <Link
                  href='/'
                  className='text-zinc-400 duration-200 hover:text-zinc-100'
                >
                  Home
                </Link>
              )}
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.page}
                  className='text-zinc-400 duration-200 hover:text-zinc-100
                '
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {withBackButton ? (
              <div
                onClick={() => router.back()}
                className='text-zinc-300 duration-200 hover:text-zinc-100'
              >
                <ArrowLeft className='h-6 w-6 ' />
              </div>
            ) : (
              <Link href='/' className='text-2xl font-bold text-white'>
                {/* svg icon from folder public/svg/icon.svg */}
                <Image
                  width={24}
                  height={24}
                  src='/images/icon.svg'
                  alt='Excel Deo'
                  className='h-6 w-6'
                />
              </Link>
            )}
          </div>
        </div>
        <div
          className={cx(
            `flex w-full flex-col items-center justify-center space-y-6 p-6 md:flex-row md:justify-end md:space-x-6 md:space-y-0`,
            !navbar || md ? 'hidden' : 'flex-1'
          )}
        >
          {withBackButton && (
            <motion.div
              animate={navbar ? 'open' : 'closed'}
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: (duration += 0.1) },
                },
                closed: { opacity: 0, x: '-50%' },
              }}
            >
              <Link
                href='/'
                className='text-zinc-400 duration-200 hover:text-zinc-100'
              >
                Home
              </Link>
            </motion.div>
          )}
          {NAV_ITEMS.map((item, idx) => (
            <motion.div
              animate={navbar ? 'open' : 'closed'}
              key={idx}
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: (duration += 0.1) },
                },
                closed: { opacity: 0, x: '-50%' },
              }}
            >
              <Link
                href={item.page}
                className='text-zinc-400 duration-200 hover:text-zinc-100
                  '
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
