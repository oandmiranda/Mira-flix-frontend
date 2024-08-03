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
        logo: string;
        main: string;
        navbar: string;
        hover: string;
        footer: string;
      };
    };
    sizes: {
      title: {
        mobileS: string;
        mobileL: string;
        tablet: string;
        laptop: string;
        desktop: string;
      };
      subtitle: {
        mobileS: string;
        mobileL: string;
        tablet: string;
        laptop: string;
        desktop: string;
      };
      paragraph: {
        mobileS: string;
        mobileL: string;
        default: string;
      };
    };
  }
}
