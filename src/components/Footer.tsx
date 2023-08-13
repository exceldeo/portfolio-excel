import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

function Footer() {
  return (
    <footer className=' bottom-2 flex w-full justify-center  border-t py-3 text-gray-700 dark:border-stone-500 dark:text-white'>
      © {new Date().getFullYear()} By
      <UnderlineLink
        href='https://exceldeo.com?ref=tsnextstarter'
        className='ml-1'
      >
        Excel Deo
      </UnderlineLink>
    </footer>
  );
}

export default Footer;
