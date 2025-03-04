import { device } from '@src/styles/themes';
import { MediaImageProps } from '@src/types/interfaces';
import Image from 'next/image';
import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledMediaImage = styled(Image)<MediaImageProps>`
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
  margin-bottom: 10px;
  opacity: 1;

  ${({ zoomEffect }) =>
    zoomEffect &&
    css`
      &:hover {
        transform: scale(1.22);
        opacity: 0.6;
        transition-delay: 0.2;
      }
    `}
  @media ${device.mobileS} {
    width: 150px;
    height: 220px;
  }

  @media ${device.mobileL} {
    width: 200px;
    height: 250px;
  }
`;
