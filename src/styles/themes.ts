import { DefaultTheme } from 'styled-components/dist/types';

const theme: DefaultTheme = {
  tipography: {
    default: {
      fontFamily: '"Montserrat", sans-serif',
    },
    logo: {
      fontFamily: '"Rubik Gemstones", system-ui',
    },
    font2: {
      fontFamily: '"Grape Nuts", cursive',
    },
  },
  colors: {
    errorStyle: '#FF0000',
    successStyle: '#28a745',
    background: {
      gradient: 'linear-gradient(135deg,#360a0a, #012d38)',
      error: 'linear-gradient(5deg, #ff4d4d, #FF0000)',
      main: '#0b0c0c',
      primary: '#151717',
      secondary: '#1f2222',
      blue: '#02b7e3',
      button: '#058bac',
    },
    text: {
      main: '#e5e5e5',
      navbar: '#E0E0E2',
      hover: '#fff',
      footer: '#777',
      logo: '#02b7e3',
    },
  },
  sizes: {
    title: {
      xxs: '1.4rem',
      xs: '1.6rem',
      mobileS: '2rem',
      mobileL: '2.4rem',
      tablet: '2.8rem',
      laptop: '3rem',
      desktop: '3.2rem',
    },
    subtitle: {
      mobileS: '1.1rem',
      mobileL: '1.3rem',
      tablet: '1.5rem',
      laptop: '1.7rem',
      desktop: '1.9rem',
    },
    paragraph: {
      xs: '0.7rem',
      mobileS: '0.8rem',
      mobileL: '0.9rem',
      default: '1rem',
    },
  },
};

export const size = {
  mobileS: '110px',
  mobileL: '520px',
  tablet: '768px',
  laptop: '999px',
  desktop: '1330px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
