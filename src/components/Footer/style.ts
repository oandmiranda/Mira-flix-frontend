import theme from '@src/styles/themes';
import styled, { keyframes } from 'styled-components';

export const Container = styled.section``;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0); /* Posição inicial e final */
  }
  50% {
    transform: translateY(-10px); /* Move para cima */
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100px;
  margin: 10px 0;
  padding: 16px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 2px 4px 8px rgba(14, 14, 20, 0.6);
  background: ${theme.colors.background.button};
  transition: background 0.4s ease-in-out;
  animation: ${moveUpDown} 2s ease-in-out infinite;

  &:hover {
    background: ${theme.colors.background.blue};
  }
`;
