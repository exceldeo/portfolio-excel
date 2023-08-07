import React from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import './style.css';

import cx from '@/utils/cx';

interface Props {
  className?: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleButtonTheme({
  className,
  checked = false,
  setChecked,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx('flex w-full items-center justify-center', className)}
      {...rest}
    >
      <label htmlFor='toogleA' className='flex cursor-pointer items-center'>
        <div className='relative'>
          <input
            id='toogleA'
            type='checkbox'
            className='sr-only'
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <div className='h-5 w-10 rounded-full bg-gray-300 shadow-inner'></div>
          <div className='dot absolute -left-1 -top-1 h-7 w-7 rounded-full border-2 border-stone-500 border-opacity-60 bg-white shadow transition dark:border-white dark:bg-stone-950 '>
            <div className='flex h-full w-full items-center justify-center '>
              {checked ? (
                <RiMoonFill color='white' size={20} />
              ) : (
                <RiSunLine color='black' size={20} />
              )}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default ToggleButtonTheme;
