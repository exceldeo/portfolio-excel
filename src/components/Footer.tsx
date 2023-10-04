import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

function Footer() {
  return (
    <footer className=' bottom-2 flex w-full justify-center border-t border-stone-500 bg-stone-950 py-3 text-white'>
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
