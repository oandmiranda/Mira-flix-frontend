import styled from 'styled-components';
import { TextProps } from '@src/types/interfaces';

const StyledBox = styled.div``;

export default function Box({ tag, children, styleSheet }: TextProps) {
  return (
    <StyledBox as={tag} style={styleSheet}>
      {children}
    </StyledBox>
  );
}
