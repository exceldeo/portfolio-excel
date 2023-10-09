import React from 'react';

import cx from '@/utils/cx';

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'h-full min-h-[320px] w-full min-w-[320px] rounded-lg border border-gray-700 shadow ',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
