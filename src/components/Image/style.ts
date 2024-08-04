import { MediaImageProps } from '@src/types/interfaces';
import Image from 'next/image';
import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledMediaImage = styled(Image)<MediaImageProps>`
  /* box-shadow: 0 8px 300px rgba(0, 0, 5, 0.1); */
  transition: transform 0.3s ease-in-out;
  margin-bottom: 10px;
  opacity: 0.85;

  ${({ zoomEffect }) =>
    zoomEffect &&
    css`
      &:hover {
        transform: scale(1.22);
        opacity: 1;
      }
    `}
  @media (max-width: 600px) {
    width: 80%;
    height: 80%;
  }
`;
