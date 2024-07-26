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
  }
`;
