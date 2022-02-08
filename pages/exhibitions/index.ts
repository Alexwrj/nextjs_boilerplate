import { exhibitionStoreToken, IExhibitionStore } from '@pages/exhibitions/store';
import { ExhibitionProps } from '@pages/exhibitions/types';

import { Exhibitions } from './Exhibitions';
import { createContainer } from '@services/provider';
import { GetServerSideProps } from 'next';

export default Exhibitions;

// TODO: put the di container into Context of static props

export const getServerSideProps: GetServerSideProps<ExhibitionProps> = async () => {
  const container = createContainer();

  const { loadInitialExhibitions, exhibitions, initialNextPage } =
    container.get<IExhibitionStore>(exhibitionStoreToken);

  await loadInitialExhibitions();

  return {
    props: {
      initialExhibitions: exhibitions,
      initialNextPage,
    },
  };
};
