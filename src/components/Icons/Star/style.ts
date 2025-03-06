import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? 'gold' : 'lightgray')};
  font-size: 17px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.xs};
  }
`;
