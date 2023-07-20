import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

function Footer() {
  return (
    <footer className=' bottom-2 flex w-full justify-center py-2 text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
        Excel Deo
      </UnderlineLink>
    </footer>
  );
}

export default Footer;
