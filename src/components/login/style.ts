import { device } from '@src/styles/themes';
import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.mobileL} {
    height: auto;
  }

  > input {
    height: 37px;
    width: 270px;
    background: #111;
    border-radius: 7px;
    color: #fff;
    padding: 10px;
    font-size: 15px;
    opacity: 0.8;
    margin-bottom: 7px;

    @media ${device.mobileS} {
      width: 240px;
    }
  }
`;
