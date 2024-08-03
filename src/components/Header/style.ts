import theme from '@src/styles/themes';
import styled from 'styled-components';
import { device } from '@src/styles/themes';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: ${theme.sizes.title.desktop};
  color: ${theme.colors.text.hover};
  padding: 10px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.subtitle.mobileL};
  }

  @media ${device.mobileL} {
    font-size: ${theme.sizes.title.mobileL};
  }

  @media ${device.tablet} {
    font-size: ${theme.sizes.title.tablet};
  }
`;

export const Sinopse = styled.p`
  color: ${theme.colors.text.hover};
  padding: 10px;
  line-height: 27px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }

  @media ${device.mobileL} {
    font-size: ${theme.sizes.paragraph.mobileL};
  }
`;

export const Button = styled.button`
  padding: 7px;
  width: 80px;
  border: 1px solid;
  border-radius: 20px;
  background: ${theme.colors.background.blue};
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;

  @media ${device.mobileS} {
    padding: 4px;
    width: 55px;
    font-size: 0.5rem;
  }
`;

export const StyledDatas = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  word-spacing: 10px;
  font-weight: 600;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;
