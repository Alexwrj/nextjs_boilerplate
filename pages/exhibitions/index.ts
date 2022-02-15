import { exhibitionStoreToken, IExhibitionStore } from '@pages/exhibitions/store';
import { ExhibitionProps } from '@pages/exhibitions/types';

import { Exhibitions } from './Exhibitions';
import { createContainer } from '@services/provider';
import { GetServerSideProps } from 'next';

export default Exhibitions;

// TODO: put the di container into Context of static props

export const getServerSideProps: GetServerSideProps<ExhibitionProps> = async () => {
  // TODO: should find a way to grab it from context object
  const container = createContainer();

  const exhibitionStore = container.get<IExhibitionStore>(exhibitionStoreToken);

  await exhibitionStore.loadExhibitions();

  return {
    props: {
      initialExhibitions: exhibitionStore.exhibitions,
      initialNextPage: exhibitionStore.getInitialNextPage(),
    },
  };
};
