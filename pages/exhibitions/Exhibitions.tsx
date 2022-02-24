import { buildExhibitionView } from '@pages/exhibitions/helpers';
import { exhibitionsStoreToken, IExhibitionsStore } from '@pages/exhibitions/store';
import { ExhibitionsGrid, InfiniteScrollWrapper } from '@pages/exhibitions/styled';
import { ExhibitionsProps } from '@pages/exhibitions/types';

import { ExhibitionCard } from './ExhibitionCard';
import { InfiniteScroll } from '@common/InfiniteScroll';
import { PageLayout } from '@common/PageLayout';
import { useService } from '@redtea/react-inversify';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';

export const Exhibitions: React.FC<ExhibitionsProps> = observer(
  ({ initialExhibitions, initialNextPage }) => {
    const { setInitialExhibitions, exhibitions, loadExhibitions, setInitialNextPage, hasNextPage } =
      useService<IExhibitionsStore>(exhibitionsStoreToken);

    useEffect(() => {
      setInitialExhibitions(initialExhibitions);
    }, [initialExhibitions, setInitialExhibitions]);

    useEffect(() => {
      setInitialNextPage(initialNextPage);
    }, [initialNextPage, setInitialNextPage]);

    const handleOverlap = useCallback(() => {
      loadExhibitions();
    }, [loadExhibitions]);

    return (
      <PageLayout>
        <ExhibitionsGrid>
          {exhibitions.map((exhibition) => (
            <ExhibitionCard exhibition={buildExhibitionView(exhibition)} />
          ))}
        </ExhibitionsGrid>
        {hasNextPage && (
          <InfiniteScroll customWrapper={InfiniteScrollWrapper} onOverlap={handleOverlap} />
        )}
      </PageLayout>
    );
  },
);
