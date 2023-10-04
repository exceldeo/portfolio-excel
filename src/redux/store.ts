import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import loadingModalReducer from './reducer/loadingModalReducer';
import modalReducer from './reducer/modalReducer';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    loadingModal: loadingModalReducer,
  },
  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
