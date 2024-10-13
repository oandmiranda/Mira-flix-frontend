import { device } from '@src/styles/themes';
import { ContainerProps } from '@src/types/interfaces';
import styled from 'styled-components';

export const StyledContainer = styled.main<ContainerProps>`
  min-width: 100vw;
  background: ${(props) =>
      props.hasDegrade
        ? `linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 3%, rgba(0, 0, 0, 0.2) 30%),
    linear-gradient(to left, #000 1%, rgba(0, 0, 0, 0) 100%)`
        : 'none'},
    ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : 'none')};
  background-size: ${(props) => (props.hasBackgroundSizeCover ? 'cover' : 'auto')};

  @media ${device.mobileS}, ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
