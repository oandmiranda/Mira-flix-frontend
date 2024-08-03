import { device } from '@src/styles/themes';
import styled from 'styled-components';

export const TextArea_S = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 3%, rgba(0, 0, 0, 0.2) 30%),
    linear-gradient(to right, #000 1%, rgba(0, 0, 0, 0) 100%);

  div {
    width: 47%;

    @media ${device.tablet} {
      width: 70%;
    }

    @media ${device.mobileL} {
      width: 80%;
    }

    @media ${device.mobileS} {
      width: 95%;
    }
  }
`;
