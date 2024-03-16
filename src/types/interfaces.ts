import { StaticImageData } from 'next/image';
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from 'swiper/types';
import { CSSProperties } from 'styled-components';

export interface StyleSheet {
  // sending StyleSheet for other interfaces
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string;
  textAlign?: string;
  lineHeight?: string;
  wordSpacing?: string;
  border?: string;
  borderRadius?: string;
}

export interface BoxProps {
  tag?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  styleSheet?: {
    background?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    paddingInline?: string;
    width?: string;
    height?: string;
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
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  sizes: string;
}

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

export interface CarouselProps {
  className?: string;
  children: React.ReactNode;
  navigation?: NavigationOptions | boolean;
  pagination?: PaginationOptions;
  loop?: boolean;
  modules?: SwiperModule[];
  autoplay?: boolean | AutoplayOptions;
}

export interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  style?: CSSProperties;
}
