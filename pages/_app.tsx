import 'reflect-metadata';
import GlobalStyle from '../styles/global';
import { Header } from '@common/Header';
import { FontStyle, Text } from '@common/Text';
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
      <GlobalStyle />
      <Header
        logo={
          <Text fontStyle={FontStyle.Headline} color="white" as="h2">
            Exhibitions!
          </Text>
        }
      />
      <Component {...pageProps} />
    </Context.Provider>
  );
};

// TODO: should find a way to pass di container in order to grab it further in context object
// export interface CoreStaticProps {
//   diContainer: Container;
// }
//
// export const getStaticProps: GetStaticProps<CoreStaticProps> = () => {
//   const diContainer = createContainer();
//
//   return {
//     props: { diContainer },
//   };
// };

export default Root;
