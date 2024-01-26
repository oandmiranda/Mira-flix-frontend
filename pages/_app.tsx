import GlobalStyle from '@src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '@src/styles/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
