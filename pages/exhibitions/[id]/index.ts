import { exhibitionStoreToken } from '@pages/exhibitions/[id]/store/ExhibitionStore';

import { Exhibition } from './Exhibition';
import { IExhibitionStore } from './store';
import { ExhibitionParams, ExhibitionProps } from './types';
import { createContainer } from '@services/provider';
import { GetServerSideProps } from 'next';

export default Exhibition;

export const getServerSideProps: GetServerSideProps<ExhibitionProps> = async ({ params }) => {
  const { id } = params as ExhibitionParams;
  const container = createContainer();

  const exhibitionStore = container.get<IExhibitionStore>(exhibitionStoreToken);

  await exhibitionStore.loadExhibition(id);

  return {
    props: {
      exhibition: exhibitionStore.exhibition,
    },
  };
};
