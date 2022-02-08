import 'reflect-metadata';
import '../styles/globals.css';
import { Context } from '@redtea/react-inversify';
import { createContainer } from '@services/provider';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';

const Root = ({ Component, pageProps }: AppProps) => {
  const container = useMemo(() => {
    return createContainer();
  }, [createContainer]);

  return (
    <Context.Provider value={container}>
      <Component {...pageProps} />
    </Context.Provider>
  );
};

export default Root;
