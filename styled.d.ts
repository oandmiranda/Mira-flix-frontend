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
      errorStyle: string;
      successStyle: string;
      background: {
        gradient: string;
        error: string;
        main: string;
        primary: string;
        secondary: string;
        blue: string;
        button: string;
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
        xxs: string;
        xs: string;
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
        xs: string;
        mobileS: string;
        mobileL: string;
        default: string;
      };
    };
  }
}
