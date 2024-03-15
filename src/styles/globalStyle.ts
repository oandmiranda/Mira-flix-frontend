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
    color: ${({ theme }) => theme.colors.text.main};
    font-family: ${({ theme }) => theme.tipography.default.fontFamily};
    overflow-x: hidden;
  }
  
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: silver;
  }
`;

export default GlobalStyle;
