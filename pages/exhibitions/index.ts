import { exhibitionsStoreToken, IExhibitionsStore } from '@pages/exhibitions/store';
import { ExhibitionsProps } from '@pages/exhibitions/types';

import { Exhibitions } from './Exhibitions';
import { createContainer } from '@services/provider';
import { GetServerSideProps } from 'next';

export default Exhibitions;

// TODO: put the di container into Context of static props

export const getServerSideProps: GetServerSideProps<ExhibitionsProps> = async () => {
  // TODO: should find a way to grab it from context object
  const container = createContainer();

  const exhibitionsStore = container.get<IExhibitionsStore>(exhibitionsStoreToken);

  await exhibitionsStore.loadExhibitions();

  return {
    props: {
      initialExhibitions: exhibitionsStore.exhibitions,
      initialNextPage: exhibitionsStore.getInitialNextPage(),
    },
  };
};
