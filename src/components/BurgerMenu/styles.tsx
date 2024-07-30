import styled from 'styled-components';

export const Container = styled.section<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 5;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #02b7e3 0%, #0d414e 100%);
  backdrop-filter: blur(3px);
  transition:
    opacity 0.3s ease,
    pointer-events 0.3s ease;

  svg {
    position: absolute;
    top: 16px;
    right: 29px;
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
