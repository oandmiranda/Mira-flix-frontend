import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    tipography: {
      default: {
        fontFamily: string;
      };
      logo: {
        fontFamily: string;
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
    sizes: {
      title: string;
    };
  }
}
