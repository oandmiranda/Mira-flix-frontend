import theme from '@src/styles/themes';
import styled from 'styled-components';
import { device } from '@src/styles/themes';

export const Container = styled.div<{ height?: string }>`
  width: 100vw;
  height: ${(props) => (props.height ? props.height : '100vh')};
`;

export const Title = styled.h1`
  font-size: ${theme.sizes.title.desktop};
  color: ${theme.colors.text.hover};
  padding: 10px;

  @media ${device.mobileS}, ${device.mobileL} {
    font-size: ${theme.sizes.title.xs};
  }

  @media ${device.tablet} {
    font-size: ${theme.sizes.title.mobileL};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* background-size: cover; */
  object-fit: cover;
`;

export const Sinopse = styled.p`
  color: ${theme.colors.text.hover};
  padding: 10px;
  line-height: 27px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }

  @media ${device.mobileL} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;

export const Button = styled.button<{ cursor?: string; backgroundTransparent?: boolean }>`
  padding: 7px;
  width: 80px;
  border: 1px solid;
  border-radius: 20px;
  background: ${(props) => (props.backgroundTransparent ? 'gold' : theme.colors.background.blue)};
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: ${(props) => props.cursor};

  @media ${device.mobileS} {
    padding: 5px;
    width: 60px;
    font-size: 0.6rem;
  }
`;

export const StyledDatas = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  word-spacing: 10px;
  font-weight: 600;
  white-space: nowrap;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;
