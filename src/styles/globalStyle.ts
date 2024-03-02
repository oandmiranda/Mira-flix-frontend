import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background: ${({ theme }) => theme.colors.background.main};
    font-family: ${({ theme }) => theme.tipography.font2.fontFamily};
  }
  
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
