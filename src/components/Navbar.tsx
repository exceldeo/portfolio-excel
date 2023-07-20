import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import NAV_ITEMS from '@/data/navbarData';

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  let duration = 0.1;

  return (
    <header className='border-sto fixed top-0 z-50 mx-auto  w-full px-4 shadow dark:border-b dark:border-stone-200 dark:bg-stone-800'>
      <div className='justify-between md:flex md:items-center'>
        <div className='flex items-center justify-between py-3'>
          <div className='md:block md:py-5'>
            <h2 className='text-2xl font-bold'>DE Studio</h2>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
            navbar ? 'block  dark:bg-stone-700' : 'hidden'
          }`}
        >
          <div
            className={`items-center justify-end space-y-6  bg-white opacity-95 md:hidden
              md:space-x-6 md:space-y-0
              `}
          >
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
                  className='block text-right text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-white lg:mt-0 lg:inline-block
                  '
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              animate={navbar ? 'open' : 'closed'}
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: (duration += 0.1) },
                },
                closed: { opacity: 0, x: '-70%' },
              }}
            >
              <div className='text-right'>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='h-10 w-10 rounded-full bg-gray-200 p-3 dark:bg-gray-800'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {currentTheme === 'dark' ? (
                    <RiSunLine color='black' size={20} />
                  ) : (
                    <RiMoonFill color='black' size={20} />
                  )}
                </button>
              </div>
            </motion.div>
          </div>
          <div
            className={`hidden items-center justify-end space-y-6  border-white md:flex md:space-x-6 md:space-y-0 
              
              `}
          >
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                href={item.page}
                className='block text-right text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-white lg:mt-0 lg:inline-block
                '
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className='text-right'>
              <button
                aria-label='Toggle Dark Mode'
                type='button'
                className='h-10 w-10 rounded-full bg-gray-200 p-3 dark:bg-gray-800'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {currentTheme === 'dark' ? (
                  <RiSunLine color='black' size={20} />
                ) : (
                  <RiMoonFill color='black' size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
