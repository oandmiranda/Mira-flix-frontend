import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const TextArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }

  @media ${device.mobileL} {
    text-align: center;
    margin-top: 10px;
    width: 100%;
    padding: 4px;
  }
`;

export const Subtitle = styled.p`
  color: ${theme.colors.text.hover};
  padding: 10px;
  line-height: 27px;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.mobileL} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;

export const FormArea = styled.div`
  background: ${theme.colors.background.gradient};
  width: 360px;
  height: 565px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  gap: 20px;
  padding: 30px;

  @media ${device.mobileS} {
    width: 95%;
    height: auto;
  }

  @media ${device.mobileL} {
    width: 85%;
    height: auto;
  }
`;
