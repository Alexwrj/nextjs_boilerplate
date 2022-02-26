import { ExhibitionView } from '@pages/exhibitions/store/ExhibitionView';

import { ContentWrapper, Image, TitleWrapper } from './styled';
import { FontStyle, Text } from '@common/Text';
import React from 'react';

interface ExhibitionBigCardProps {
  exhibition: ExhibitionView;
}

export const ExhibitionBigCard: React.FC<ExhibitionBigCardProps> = ({
  exhibition: { title, date, imageUrl, description, id },
}) => (
  <>
    <TitleWrapper>
      <Text fontStyle={FontStyle.BigTitle}>{title}</Text>
      <Text fontStyle={FontStyle.ItalicSmallTitle}>{date}</Text>
    </TitleWrapper>
    <ContentWrapper>
      <Image src={imageUrl} alt={`exhibition_${id}`} />
      <Text fontStyle={FontStyle.Text}>{description}</Text>
    </ContentWrapper>
  </>
);
