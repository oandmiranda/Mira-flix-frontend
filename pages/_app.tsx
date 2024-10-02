import type { AppProps } from 'next/app';
import GlobalStyle from '@src/styles/globalStyle';
import theme from '@src/styles/themes';
import { ThemeProvider } from 'styled-components';
import { MoviesProvider } from '@src/context/moviesContext';
import { CategoriesProvider } from '@src/context/categoryContext';
import { BurgerMenuProvider } from '@src/context/burgerMenuContext';
import { AuthProvider } from '@src/context/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BurgerMenuProvider>
          <MoviesProvider>
            <CategoriesProvider>
              <AuthProvider>
                <Component {...pageProps} />
              </AuthProvider>
            </CategoriesProvider>
          </MoviesProvider>
        </BurgerMenuProvider>
      </ThemeProvider>
    </>
  );
}
