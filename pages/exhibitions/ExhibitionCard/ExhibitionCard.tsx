import { ExhibitionCardWrapper, Image } from '@pages/exhibitions/ExhibitionCard/styled';
import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';

import { FontStyle, Text } from '@common/Text';
import Link from 'next/link';
import React from 'react';

interface ExhibitionInterface {
  exhibition: ExhibitionView;
}

export const ExhibitionCard: React.FC<ExhibitionInterface> = ({
  exhibition: { id, title, date, imageUrl },
}) => (
  <ExhibitionCardWrapper>
    <Link href={`/exhibitions/${id}`}>
      <Image src={imageUrl} alt={`exhibition_${id}`} />
    </Link>
    <Text fontStyle={FontStyle.SmallTitle}>{title}</Text>
    <Text fontStyle={FontStyle.ItalicSmallText}>{date}</Text>
  </ExhibitionCardWrapper>
);
