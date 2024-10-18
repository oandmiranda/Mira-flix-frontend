import { device } from '@src/styles/themes';
import styled from 'styled-components';

export const TextArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS}, ${device.mobileL} {
    width: 100%;
  }
`;
