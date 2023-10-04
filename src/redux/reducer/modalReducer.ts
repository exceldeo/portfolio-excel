import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type React from 'react';

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode;
}

const initialState: ModalState = {
  isOpen: false,
  content: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setContent: (state, action: PayloadAction<React.ReactNode>) => {
      state.content = action.payload;
    },
  },
});

export const { openModal, closeModal, setContent } = modalSlice.actions;

export default modalSlice.reducer;
