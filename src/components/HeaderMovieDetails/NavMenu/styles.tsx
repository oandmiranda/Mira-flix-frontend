import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

export const Menu = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  opacity: 0.9;
  position: fixed;
  background: #000;
  transition: background 0.4s ease-in-out;
  z-index: 4;

  ul {
    display: flex;
    gap: 6px;
    position: relative;

    @media (max-width: 999px) {
      display: none;
    }
  }
`;

export const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  @media (min-width: 1000px) {
    display: none; /* Esconde o ícone em telas maiores que 1000px */
  }
`;
