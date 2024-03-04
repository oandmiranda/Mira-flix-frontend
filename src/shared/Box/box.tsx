import { BoxProps } from '@src/types/interfaces';
import { StyledBox } from './style';

export default function Box({ tag, children, styleSheet }: BoxProps) {
  return (
    <StyledBox as={tag} style={styleSheet}>
      {children}
    </StyledBox>
  );
}
