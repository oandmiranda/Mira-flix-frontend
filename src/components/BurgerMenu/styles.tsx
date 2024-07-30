import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    right: -100%;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
    opacity: 1;
  }
  to {
    right: -100%;
    opacity: 0;
  }
`;

export const Container = styled.section<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #02b7e3 0%, #0d414e 100%);
  backdrop-filter: blur(3px);
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.6s ease forwards;

  svg {
    position: absolute;
    top: 16px;
    right: 29px;
    cursor: pointer;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;
