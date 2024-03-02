import theme from '@src/styles/themes';
import { IStyledLink } from '@src/types/interfaces';
import styled from 'styled-components';

export const S_Link = styled.a<IStyledLink>`
  /* color: ${theme.colors.text.navbar};
  font-size: ${(props) => props.styleSheet?.fontSize || '1rem'};
  font-family: ${(props) => props.styleSheet?.fontFamily || theme.tipography.font2.fontFamily};
  padding-inline: 20px; */
`;
