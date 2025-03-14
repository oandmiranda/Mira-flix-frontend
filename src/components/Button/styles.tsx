import styled from 'styled-components';
import theme, { device } from '@src/styles/themes';
import { ButtonProps } from '@src/types/interfaces';

export const S_Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundhover', // impede que a backgroundhover seja enviado ao DOM para evitar erros
})<ButtonProps>`
  width: ${(props) => (props.width ? props.width : '160px')};
  border-left: 1px solid ${theme.colors.background.button};
  border-top: 2px solid ${theme.colors.background.button};
  border-right: none;
  border-bottom: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => (props.background ? props.background : 'transparent')};
  color: ${theme.colors.text.navbar};
  box-shadow: 2px 4px 8px rgba(14, 14, 20, 0.6);
  padding: 10px;
  cursor: pointer;
  font-size: ${theme.sizes.paragraph.default};
  font-family: ${theme.tipography.default.fontFamily};
  transition:
    background-color 0.4s ease-in-out,
    color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.backgroundhover ? theme.colors.background.blue : theme.colors.background.button};
    color: ${theme.colors.text.hover};
    font-weight: 500;
  }

  @media ${device.mobileS} {
    width: ${(props) => (props.width ? '240px' : '160px')};
    padding: 7px;
    font-size: ${theme.sizes.paragraph.mobileS};
    flex-basis: 5%; /* Aproximadamente metade do container */
  }
`;
