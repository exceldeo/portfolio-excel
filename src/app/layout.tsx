'use client';
import * as React from 'react';
import { Provider } from 'react-redux';

import '@/styles/globals.css';

import ScrollButton from '@/components/buttons/ScrollButton';
import Footer from '@/components/Footer';
import LoadingModal from '@/components/loadingModal';
import Modal from '@/components/modal';

import { store } from '@/redux/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <Provider store={store}>
          <LoadingModal />
          <Modal />
          {children}
          <Footer />
          <ScrollButton />
        </Provider>
      </body>
    </html>
  );
}
