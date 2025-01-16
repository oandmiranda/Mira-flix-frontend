import theme from '@src/styles/themes';
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

export const Container = styled.section.withConfig({ shouldForwardProp: (prop) => prop !== 'isOpen' })<{
  isOpen: boolean;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background.gradient};
  backdrop-filter: blur(3px);
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.6s ease forwards;

  @media (min-width: 768px) {
    width: 40%;
    height: 100%;
  }

  svg.close-icon {
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

  a {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  a {
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.text.hover};
    }
  }

  .home {
    color: ${theme.colors.background.button};
    transition: color 0.3s ease-in-out;
    font-weight: 500;

    &:hover {
      color: ${theme.colors.background.blue};
    }
  }

  hr {
    margin: 10px 0;
    border-color: ${theme.colors.background.blue};
  }
`;
