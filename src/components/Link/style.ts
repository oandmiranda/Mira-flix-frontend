import theme from '@src/styles/themes';
import { IStyledLink } from '@src/types/interfaces';
import styled from 'styled-components';

export const StyledLink = styled.a<IStyledLink>`
  color: ${(props) => props.styleSheet?.color || 'black'};
  font-size: ${(props) => props.styleSheet?.fontSize || '1rem'};
  font-family: ${(props) => props.styleSheet?.fontFamily || theme.tipography.font2.fontFamily};
`;
