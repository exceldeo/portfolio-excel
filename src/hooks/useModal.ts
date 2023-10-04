import type React from 'react';

import { openModal, setContent } from '@/redux/reducer/modalReducer';

import { useDispatch } from '.';

function useModal() {
  const dispatch = useDispatch();

  const handleOpen = (content: React.ReactNode) => {
    dispatch(setContent(content));
    dispatch(openModal());
  };

  const open = ({ content }: { content: React.ReactNode }) => {
    handleOpen(content);
  };

  return { open };
}

export default useModal;
