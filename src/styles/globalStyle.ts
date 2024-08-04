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

  /* navigation button from swiper carousel */
.swiper-button-prev, .swiper-button-next {
  width: 43px; 
  height: 43px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  background-color: #034d60;
  transition: background-color 0.5s ease; 
}

.swiper-button-prev:hover, .swiper-button-next:hover {
  background-color: #058bac;
}

.swiper-button-prev::after, .swiper-button-next::after {
  font-size: 20px; /* Tamanho da seta */
}

`;

export default GlobalStyle;
