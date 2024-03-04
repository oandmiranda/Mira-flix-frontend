import { StaticImageData } from 'next/image';
import { CSSProperties } from 'styled-components';

export interface StyleSheet {
  // sending StyleSheet for other interfaces
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  cursor?: string;
}

export interface BoxProps {
  tag?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  styleSheet?: {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    paddingInline?: string;
    width?: string;
    whiteSpace?: string;
  };
}

export interface IconProps {
  href?: string;
  children?: React.ReactNode;
  size?: string;
  fill?: 'inherit' | string; // color
}

export interface MediaImageProps {
  priority?: boolean;
  src: StaticImageData;
  alt: string;
  styleSheet: {
    width?: string;
    height?: string;
    borderRadius?: string;
  };
}

// export interface IStyledLink {
//   children: React.ReactNode;
//   style?: CSSProperties;
//   styleSheet?: StyleSheet;

// }

export interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  styleSheet?: StyleSheet;
  containsPaddingInline?: string;
}

export interface TextProps {
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
