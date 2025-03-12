import { device } from '@src/styles/themes';
import styled, { keyframes } from 'styled-components';

// Animação de rodinha girando
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const AuthContainer = styled.div<{ width?: string }>`
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

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props.theme.colors.background.blue};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s linear infinite;
  margin: 10px auto;
`;
