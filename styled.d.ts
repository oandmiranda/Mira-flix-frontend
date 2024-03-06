import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    tipography: {
      font1: {
        fontFamily: string; // imported from the head of the _document.tsx file
      };
      font2: {
        fontFamily: string;
      };
    };
    colors: {
      background: {
        main: string;
        primary: string;
        secondary: string;
        blue: string;
      };
      text: {
        main: string;
        navbar: string;
        hover: string;
        footer: string;
      };
    };
  }
}
