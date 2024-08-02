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
  color: #fff; /* Muda a cor dos botões para branco */
  background-color: rgba(0, 0, 0, 0.7); /* Adiciona um fundo semi-transparente */
  border-radius: 50%; /* Faz os botões serem redondos */
  width: 42px; /* Largura do botão */
  height: 42px; /* Altura do botão */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease; /* Adiciona a transição */
}

.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 1); /* Muda a cor de fundo ao passar o mouse */
}

.swiper-button-prev::after, .swiper-button-next::after {
  font-size: 20px; /* Tamanho da seta */
}

`;

export default GlobalStyle;
