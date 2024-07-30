import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@src/styles/globalStyle';
import theme from '@src/styles/themes';
import { MoviesProvider } from '@src/context/moviesContext';
import { CategoriesProvider } from '@src/context/categoryContext';
import { BurgerMenuProvider } from '@src/context/burgerMenuContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BurgerMenuProvider>
          <MoviesProvider>
            <CategoriesProvider>
              <Component {...pageProps} />
            </CategoriesProvider>
          </MoviesProvider>
        </BurgerMenuProvider>
      </ThemeProvider>
    </>
  );
}
