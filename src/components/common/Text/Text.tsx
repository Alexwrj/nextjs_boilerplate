import { TextComponentProps, TextProps, TextType } from './types';
import { TextAsH1, TextAsH2, TextAsH3, TextAsP, TextAsSpan } from '@common/Text/styled';
import React from 'react';
import { StyledComponent } from 'styled-components';

const TextTypeMap: Record<TextType, StyledComponent<any, TextProps>> = {
  p: TextAsP,
  span: TextAsSpan,
  h1: TextAsH1,
  h2: TextAsH2,
  h3: TextAsH3,
};

export const Text: React.FC<TextComponentProps> = ({ as = 'p', children, ...props }) => {
  const TextComponent = TextTypeMap[as];

  return <TextComponent {...props}>{children}</TextComponent>;
};
