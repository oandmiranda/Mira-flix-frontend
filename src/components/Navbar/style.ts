import styled from 'styled-components';
import { NavProps } from '@src/types/interfaces';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  opacity: 0.9;
  z-index: 2;
  position: fixed;
  background: ${(props) => (props.scroll ? 'black' : 'transparent')};
  transition: background 0.4s ease-in-out;

  ul {
    display: flex;
    gap: 6px;

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
