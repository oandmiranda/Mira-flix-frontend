import { DefaultTheme } from 'styled-components/dist/types';

const theme: DefaultTheme = {
  tipography: {
    font1: {
      fontFamily: '"Grape Nuts", cursive', // imported from the head of the _document.tsx file
    },
    font2: {
      fontFamily: '"Josefin Sans", sans-serif',
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
    },
  },
};

export default theme;
