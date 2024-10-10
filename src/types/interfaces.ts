import { StaticImageData } from 'next/image';
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from 'swiper/types';
import { CSSProperties } from 'styled-components';
import { SwiperProps } from 'swiper/react';
import React from 'react';

export interface StyleSheet {
  // sending StyleSheet for other interfaces
  display?: string;
  width?: string;
  height?: string;
  position?: string;
  padding?: string;
  paddingRight?: string;
  paddingInline?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginBottom?: string;
  marginLeft?: string;
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string;
  textAlign?: string;
  lineHeight?: string;
  wordSpacing?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  boxShadow?: string;
}

export interface BoxProps {
  tag?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  styleSheet?: CSSProperties;
}

export interface IconProps {
  href?: string;
  children?: React.ReactNode;
  size?: string;
  fill?: 'inherit' | string; // color
  isPositionAbsolute?: boolean;
}

export interface MediaImageProps {
  priority?: boolean;
  src: string | StaticImageData | undefined;
  alt: string | undefined;
  width: number;
  height: number;
  zoomEffect?: boolean;
  styleSheet?: CSSProperties;
}

export interface NavProps {
  scroll?: boolean;
}

export interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  styleSheet?: CSSProperties;
  containsPaddingInline?: string;
}

export interface TextProps {
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  styleSheet?: CSSProperties;
}

export interface CarouselProps {
  settings?: SwiperProps;
  children?: React.ReactNode;
  navigation?: NavigationOptions | boolean;
  pagination?: PaginationOptions;
  loop?: boolean;
  modules?: SwiperModule[];
  autoplay?: boolean | AutoplayOptions;
  cssMode?: boolean;
  mousewhreel?: boolean;
  keyboard?: boolean;
  effect?: string;
  grabCursor?: boolean;
  centeredSlides?: boolean;
  slidesPerView?: number | 'auto';
  grid?: {
    rows: number;
  };
  spaceBetween?: number;
  coverflowEffect?: {
    rotate?: number;
    stretch?: number;
    depth?: number;
    modifier?: number;
    slideShadows?: boolean;
  };
}

export interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  width?: string;
  background?: string;
  styleSheet?: CSSProperties;
}

export interface ContainerProps {
  styleSheet?: CSSProperties;
  children: React.ReactNode;
  hasDegrade?: boolean;
  hasBackgroundSizeCover?: boolean;
  backgroundImage?: string | boolean;
}

export interface HeaderProps<T> {
  context: T[];
  showCarousel?: boolean;
}

// export interface BaseContext {
//   id?: number | undefined;
//   srcImage?: string;
//   title?: string;
//   page?: string;
//   endpoint?: string;
//   sinopse?: string;
//   coverImage?: string;
//   available?: string;
//   releaseData?: number;
//   duration?: string;
//   category?: string;
// }

export interface CategoryContext {
  id?: number;
  title?: string;
  name?: string;
  endpoint?: string;
  srcImage?: string;
  description?: string;
}

export interface MovieContext {
  id?: number;
  title?: string;
  sinopse?: string;
  srcImage?: string;
  coverImage?: string;
  available?: string;
  releaseData?: number;
  duration?: string;
  category?: string;
}

export interface BurgerMenuProps {
  menuIsOpen: boolean;
  // toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

export interface CategoryProps {
  title?: string;
  href?: string;
}

export interface MovieContainer {
  hasCarousel?: boolean;
}

export interface TextAreaProps {
  children?: React.ReactNode;
}

export interface APIResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface HeaderContainerProps {
  backgroundImage?: string;
  backgroundMediaQuerie?: string;
}

export interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}
