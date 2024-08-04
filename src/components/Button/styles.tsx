import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const S_Button = styled.button`
  width: 160px;
  border-left: 1px solid ${theme.colors.background.blue};
  border-top: 2px solid ${theme.colors.background.blue};
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  color: ${theme.colors.text.navbar};
  cursor: pointer;
  font-size: ${theme.sizes.paragraph.default};
  font-family: ${theme.tipography.default.fontFamily};
  transition:
    background-color 0.4s ease-in-out,
    color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.hover};
    font-weight: 500;
  }

  @media ${device.mobileS} {
    width: 120px;
    padding: 7px;
    font-size: ${theme.sizes.paragraph.mobileS};
    flex-basis: 5%; /* Aproximadamente metade do container */
  }
`;
