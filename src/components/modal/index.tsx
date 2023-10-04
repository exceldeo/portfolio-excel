import React from 'react';

import { useDispatch, useSelector } from '@/hooks';

import { closeModal } from '@/redux/reducer/modalReducer';

function Modal() {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeModal());
  }

  if (!modalState.isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto '>
      <div className='flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0 '>
        <div
          className='fixed inset-0 transition-opacity '
          aria-hidden='true'
          onClick={handleClose}
        >
          <div className='absolute inset-0 bg-gray-200 opacity-25'></div>
        </div>

        <span
          className='hidden sm:inline-block sm:h-screen sm:align-middle'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <div
          className='inline-block transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle  md:min-w-[600px] lg:min-w-[1000px]'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div>{modalState.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
