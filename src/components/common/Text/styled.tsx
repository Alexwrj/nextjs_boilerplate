import { FontStyle, TextColor, TextProps } from '@common/Text/types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const styleMap: Record<FontStyle, FlattenSimpleInterpolation> = {
  [FontStyle.Headline]: css`
    font-size: 48px;
    line-height: 56px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  `,
  [FontStyle.ItemTitle]: css`
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;
  `,
  [FontStyle.ItalicTitle]: css`
    font-size: 24px;
    line-height: 16px;
    font-weight: 400;
    font-family: 'Roboto Italic', sans-serif;
    margin: 0;
  `,
  [FontStyle.ItalicText]: css`
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    font-family: 'Roboto Italic', sans-serif;
    margin: 0;
  `,
};

const colorMap: Record<TextColor, string> = {
  white: '#ffffff',
  black: '#000000',
};

const getStyle = ({ fontStyle, color = 'black' }: TextProps) => {
  return css`
    ${fontStyle && styleMap[fontStyle]};
    color: ${colorMap[color]};
  `;
};

export const TextAsP = styled.p<TextProps>`
  ${(props) => getStyle(props)};
`;

export const TextAsSpan = styled.span<TextProps>`
  ${(props) => getStyle(props)};
`;

export const TextAsH1 = styled.h1<TextProps>`
  ${(props) => getStyle(props)};
`;

export const TextAsH2 = styled.h2<TextProps>`
  ${(props) => getStyle(props)};
`;

export const TextAsH3 = styled.h3<TextProps>`
  ${(props) => getStyle(props)};
`;
