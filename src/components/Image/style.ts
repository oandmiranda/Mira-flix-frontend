import { MediaImageProps } from '@src/types/interfaces';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledMediaImage = styled(Image)<MediaImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  size: ${(props) => props.sizes};

  @media (max-width: 600px) {
    width: 50%;
    height: 50%;
  }
`;
