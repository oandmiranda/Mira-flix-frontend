import { MediaImageProps } from '@src/types/interfaces';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledMediaImage = styled(Image)<MediaImageProps>`
  @media (max-width: 600px) {
    width: 50%;
    height: 50%;
  }
`;
