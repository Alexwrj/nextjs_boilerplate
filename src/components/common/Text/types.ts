export type TextType = 'p' | 'span' | 'h1' | 'h2' | 'h3';
export type TextColor = 'white' | 'black';

export enum FontStyle {
  Headline = 1,
  BigTitle,
  SmallTitle,
  Text,
  ItalicSmallTitle,
  ItalicMediumTitle,
  ItalicSmallText,
}

export interface TextProps {
  fontStyle: FontStyle;
  color?: TextColor;
}

export interface TextComponentProps extends TextProps {
  as?: TextType;
}
