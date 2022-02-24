import { ExhibitionProps } from './types';
import { FontStyle, Text } from '@common/Text';
import React from 'react';

export const Exhibition: React.FC<ExhibitionProps> = ({ exhibition }) => {
  if (exhibition) {
    return <div>{JSON.stringify(exhibition)}</div>;
  }

  return (
    <Text fontStyle={FontStyle.ItalicTitle}>
      Oops, 404: The item you requested cannot be found.
    </Text>
  );
};
