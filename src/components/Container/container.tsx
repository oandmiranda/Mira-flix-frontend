import { ContainerProps } from '@src/types/interfaces';
import { StyledContainer } from './style';

export default function Container({
  children,
  hasDegrade,
  backgroundImage,
  styleSheet,
  hasBackgroundSizeCover,
}: ContainerProps) {
  return (
    <StyledContainer
      style={styleSheet}
      hasDegrade={hasDegrade}
      backgroundImage={backgroundImage}
      hasBackgroundSizeCover={hasBackgroundSizeCover}
    >
      {children}
    </StyledContainer>
  );
}
