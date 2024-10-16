import styled from 'styled-components';
import { InputProps } from '@src/types/interfaces';

export const SearchInput = styled.input<InputProps>`
  height: 35px;
  width: ${(props) => (props.width ? props.width : '220px')};
  background: #000;
  border-radius: 7px;
  color: #fff;
  padding: 15px 7px;
  font-size: 14px;
  opacity: 0.8;
`;
