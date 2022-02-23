import { ExhibitionCardWrapper, Image } from '@pages/exhibitions/ExhibitionCard/styled';
import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';

import { Text } from '@common/Text/Text';
import { FontStyle } from '@common/Text/types';
import React from 'react';

interface ExhibitionInterface {
  exhibition: ExhibitionView;
}

export const ExhibitionCard: React.FC<ExhibitionInterface> = ({
  exhibition: { id, title, date, imageUrl },
}) => (
  <ExhibitionCardWrapper>
    <Image src={imageUrl} alt={`exhibition_${id}`} />
    <Text fontStyle={FontStyle.ItemTitle}>{title}</Text>
    <Text fontStyle={FontStyle.ItalicText}>{date}</Text>
  </ExhibitionCardWrapper>
);
