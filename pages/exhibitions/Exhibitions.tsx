import { exhibitionStoreToken, IExhibitionStore } from '@pages/exhibitions/store';
import { ExhibitionsGrid } from '@pages/exhibitions/styled';
import { ExhibitionProps } from '@pages/exhibitions/types';

import { ExhibitionCard } from './ExhibitionCard';
import { PageLayout } from '@common/PageLayout';
import { useService } from '@redtea/react-inversify';
import React from 'react';

export const Exhibitions: React.FC<ExhibitionProps> = ({ initialExhibitions, initialNextPage }) => {
  const { buildView } = useService<IExhibitionStore>(exhibitionStoreToken);

  return (
    <PageLayout>
      <ExhibitionsGrid>
        {initialExhibitions.map((exhibition) => (
          <ExhibitionCard exhibition={buildView(exhibition)} />
        ))}
      </ExhibitionsGrid>
    </PageLayout>
  );
};
