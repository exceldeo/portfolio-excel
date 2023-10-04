import React from 'react';

function ModalProjectImage({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className='absolute left-0 top-0 h-screen w-full border-8 border-red-600'>
      <div className='flex flex-col items-center justify-center  border-8 border-blue-600'>
        <div className='flex w-full justify-end border-8 border-red-950 px-3'>
          <button
            onClick={onClose}
            className='rounded-lg bg-slate-100 px-3 py-2 text-black '
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalProjectImage;
