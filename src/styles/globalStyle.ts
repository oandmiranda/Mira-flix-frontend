import { createGlobalStyle } from 'styled-components';
import theme from './themes';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${theme.colors.background.main};
    color: ${theme.colors.text.main};
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
