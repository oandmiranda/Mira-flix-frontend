import { ContainerProps } from '@src/types/interfaces';
import { StyledContainer } from './style';

export default function Container({ children, hasDegrade }: ContainerProps) {
  return <StyledContainer hasDegrade={hasDegrade}>{children}</StyledContainer>;
}
