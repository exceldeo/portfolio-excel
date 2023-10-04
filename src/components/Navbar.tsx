import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

import NAV_ITEMS from '@/data/navbarData';

import cx from '@/utils/cx';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  let duration = 0.1;

  const md = useMediaQuery('md');

  useEffect(() => {
    if (md) {
      setNavbar(false);
    }
  }, [md]);

  return (
    <header
      className={cx(
        'bg-primaryDark-900/500 fixed inset-x-0 top-0 z-50 border-b border-zinc-800 px-10 backdrop-blur  duration-200'
      )}
    >
      <div className='justify-between md:flex md:items-center'>
        <div className='flex items-center justify-between pt-6 md:py-3'>
          <div className='md:block md:py-5'>
            <h2 className='text-2xl font-bold text-white'>DnE</h2>
          </div>
        </div>

        <div
          className={`mt-8 flex-1 justify-self-center  pb-3 md:mt-0 md:block md:pb-0 ${
            navbar ? 'block  ' : 'hidden'
          }`}
        >
          <div
            className={`items-center justify-end space-y-6  md:hidden
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
                  className='block text-right text-lg font-medium  text-gray-50 hover:scale-110 hover:text-white lg:mt-0 lg:inline-block 
                  '
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div
            className={`hidden items-center justify-end space-y-6  md:flex md:space-x-6 md:space-y-0 
              
              `}
          >
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                href={item.page}
                className='block text-right text-lg font-medium  text-gray-50 hover:scale-110 hover:text-white lg:mt-0 lg:inline-block
                '
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
