import '../styles/globals.css';
import { createContainer } from '../src/services/provider';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const Root = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    createContainer();
  }, [createContainer]);

  return <Component {...pageProps} />;
};

export default Root;
