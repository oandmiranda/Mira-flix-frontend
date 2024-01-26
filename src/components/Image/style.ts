import Image from 'next/image';
import styled from 'styled-components';

export const StyledMediaImage = styled(Image)`
  width: ${(props) => props.style?.width || 'auto'};
  height: ${(props) => props.style?.height || 'auto'};

  @media (max-width: 600px) {
    width: 50%;
    height: 50%;
  }
`;
