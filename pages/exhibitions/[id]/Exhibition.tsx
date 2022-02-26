import { buildExhibitionView } from '@pages/exhibitions/helpers';

import { ExhibitionBigCard } from './ExhibitionBigCard';
import { BackButtonWrapper, Layout } from './styled';
import { ExhibitionProps } from './types';
import { BackButton } from '@common/BackButton';
import { FontStyle, Text } from '@common/Text';
import { useRouter } from 'next/router';
import React from 'react';

export const Exhibition: React.FC<ExhibitionProps> = ({ exhibition }) => {
  const router = useRouter();
  const handleBack = () => router.push('/exhibitions');

  return (
    <Layout>
      <BackButtonWrapper>
        <BackButton onClick={handleBack} />
      </BackButtonWrapper>
      {exhibition ? (
        <ExhibitionBigCard exhibition={buildExhibitionView(exhibition)} />
      ) : (
        <Text fontStyle={FontStyle.ItalicMediumTitle}>
          Oops, 404: The item you requested cannot be found.
        </Text>
      )}
    </Layout>
  );
};
