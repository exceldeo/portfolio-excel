import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

import NAV_ITEMS from '@/data/navbarData';

import ToggleButton from '@/components/buttons/ToggleButtonTheme';
import { MenuButton } from '@/components/menu/HamburgerMenuButton';

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  let duration = 0.1;

  return (
    <header className='border-sto fixed top-0 z-50 mx-auto  w-full bg-white/30 px-4 shadow backdrop-blur-xl dark:border-b dark:border-stone-700 dark:bg-stone-800'>
      <div className='justify-between md:flex md:items-center'>
        <div className='flex items-center justify-between py-3'>
          <div className='md:block md:py-5'>
            <h2 className='text-2xl font-bold'>DE Studio</h2>
          </div>
          <div className='md:hidden'>
            <MenuButton
              isOpen={navbar}
              onClick={() => setNavbar(!navbar)}
              strokeWidth='3'
              color={currentTheme === 'dark' ? '#fff' : '#000'}
              lineProps={{ strokeLinecap: 'round' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            />
          </div>
        </div>

        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
            navbar ? 'block  ' : 'hidden'
          }`}
        >
          <div
            className={`items-center justify-end space-y-6  opacity-95 md:hidden
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
            <div className='flex justify-end '>
              <ToggleButton
                className='w-[50px] '
                setChecked={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                checked={currentTheme === 'dark'}
              />
            </div>
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
            <div>
              <ToggleButton
                setChecked={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                checked={currentTheme === 'dark'}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
