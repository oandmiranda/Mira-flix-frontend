import styled from 'styled-components';
import { NavProps } from '@src/types/interfaces';

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
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, 0b0c0c 100%); */

  ul {
    display: flex;
  }
`;
