import styled from 'styled-components';
import theme from '@src/styles/themes';
import { LinkProps } from '@src/types/interfaces';

export const S_Link = styled.a<LinkProps>`
  padding-inline: ${(props) => props.containsPaddingInline};
  color: ${(props) => props.styleSheet?.color || theme.colors.text.main};
  font-size: ${(props) => props.styleSheet?.fontSize || '1rem'};
  font-family: ${(props) => props.styleSheet?.fontFamily || theme.tipography.default.fontFamily};
`;
