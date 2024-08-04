import styled from 'styled-components';
import { device } from '@src/styles/themes';

export const ErrorImage = styled.img`
  width: 200px;
  height: 200px;

  @media ${device.mobileS} {
    width: 150px;
    height: 120;
  }
`;
