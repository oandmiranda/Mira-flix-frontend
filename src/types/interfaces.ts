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
  as?: keyof JSX.IntrinsicElements;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
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

export interface IStyledLink {
  children: React.ReactNode;
  style?: CSSProperties;
  styleSheet?: {
    color?: string;
    fontSize?: string;
    fontFamily?: string;
  };
}

export interface NavLinkProps extends IStyledLink {
  href: string;
}

export interface TextProps {
  tag?: 'p' | 'li' | 'h4' | 'h5';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
