import { device } from '@src/styles/themes';
import { MediaImageProps } from '@src/types/interfaces';
import Image from 'next/image';
import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledMediaImage = styled(Image)<MediaImageProps>`
  transition:
    transform 0.45s ease-in-out,
    opacity 0.45s ease-in-out;
  margin-bottom: 10px;
  opacity: 1;

  ${({ zoomEffect }) =>
    zoomEffect &&
    css`
      &:hover {
        transform: scale(1.1);
        transition-delay: 0.2;
      }
    `}
  @media ${device.mobileL} {
    width: 200px;
    height: 250px;
  }

  @media ${device.mobileS} {
    width: 165px;
    height: 230px;
  }
`;
