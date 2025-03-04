import { Url } from 'next/dist/shared/lib/router/router';
import { StaticImageData } from 'next/image';
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from 'swiper/types';
import { CSSProperties } from 'styled-components';
import { SwiperProps } from 'swiper/react';
import React, { HTMLInputTypeAttribute } from 'react';
import { Results } from './apiTypes';

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

export interface HeaderProps {
  data?: (MovieType | CategoryType)[];
  height?: string;
  slugCategory?: string | undefined;
}

export interface HeaderMovieDetailsProps {
  items: { results: Results[]; id: number };
  id: string;
}

export interface HeaderContainerProps {
  backgroundImage?: string;
  backgroundMediaQuerie?: string;
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
  href?: Url;
  children: React.ReactNode;
  width?: string;
  background?: string;
  backgroundhover?: boolean;
  styleSheet?: CSSProperties;
  type?: string;
  disabled?: any;
}

export interface ContainerProps {
  styleSheet?: CSSProperties;
  children: React.ReactNode;
  hasDegrade?: boolean;
  hasBackgroundSizeCover?: boolean;
  backgroundImage?: string | boolean;
}

export interface CategoryType {
  id?: number;
  title?: string;
  name?: string;
  endpoint?: string;
  srcImage?: string;
  description?: string;
}

export interface MovieType {
  id: number;
  title: string;
  sinopse: string;
  srcImage: string;
  coverImage: string;
  available: string;
  releaseData: number;
  duration: string;
  category: string;
  movieId: string;
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

export interface MovieContainer {
  hasCarousel?: boolean;
}

export interface BurgerMenuProps {
  menuIsOpen: boolean;
  // toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

export interface CategoryProps {
  title?: string;
  paddingTop?: string;
  href?: string;
}

export interface TextAreaProps {
  children?: React.ReactNode;
}

export interface APIResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

export interface ErrorStyleType {
  color: string;
  padding: string;
  fontSize: string;
}

export interface SuccessStyleType {
  color: string;
  fontSize: string;
  fontWeight: string;
  marginTop: string;
}

export interface InputProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
  width?: string;
  styleSheet?: CSSProperties;
}

export interface LogoProps {
  cursorDefault?: boolean;
  noLink?: boolean;
  styleSheet?: CSSProperties;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
