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
    background: {
      main: '#0b0c0c',
      primary: '#151717',
      secondary: '#1f2222',
      blue: '#02b7e3',
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
    title: '3.2rem',
    subtitle: '1.1rem',
  },
};

export default theme;
