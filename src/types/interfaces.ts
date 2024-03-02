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
  tag?: 'p' | 'li' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
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

export interface LinkProps extends ILink {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
  styleSheet?: StyleSheet;
}

export interface ILink {
  hasPaddingInline?: string;
}

export interface TextProps {
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
