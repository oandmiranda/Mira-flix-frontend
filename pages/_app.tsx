import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@src/styles/globalStyle';
import theme from '@src/styles/themes';
import { MoviesProvider } from '@src/context/moviesContext';
// import theme from '@src/styles/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesProvider>
          {/* <MoviesContext */}
          <GlobalStyle />
          <Component {...pageProps} />
        </MoviesProvider>
      </ThemeProvider>
    </>
  );
}
