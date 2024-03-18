import { ContainerProps } from '@src/types/interfaces';
import { StyledContainer } from './style';

export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
