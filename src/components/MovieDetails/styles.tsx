import theme, { device } from '@src/styles/themes';
import { HeaderContainerProps } from '@src/types/interfaces';
import styled from 'styled-components';

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundImage});
  background-size: cover;
  overflow: hidden;

  @media ${device.mobileS}, ${device.mobileL} {
    background: url(${(props) => props.backgroundMediaQuerie});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 370px;
  border-radius: 15px;
  box-shadow: 2px 3px 10px #02b7e3;
  transition: transform 0.52s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }

  @media ${device.tablet} {
    width: 270px;
    height: 340px;
  }

  @media ${device.mobileL}, ${device.mobileS} {
    display: none;
  }
`;

export const GradientArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) 60%),
    linear-gradient(to right, #000 1%, rgba(0, 0, 0, 0.6) 95%);

  @media ${device.mobileS}, ${device.mobileL} {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.2) 65%),
      linear-gradient(to right, #000 3%, rgba(0, 0, 0, 0.4) 80%);
  }
`;

export const Title = styled.h1`
  font-size: ${theme.sizes.title.mobileL};
  color: ${theme.colors.text.hover};
  margin-top: 20px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.title.mobileS};
  }
  @media ${device.mobileL} {
    font-size: ${theme.sizes.title.mobileS};
  }

  @media ${device.tablet} {
    font-size: ${theme.sizes.title.mobileL};
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 410px;
  padding-right: 20px;

  @media ${device.mobileS}, ${device.mobileL} {
    position: static;
    justify-content: center;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  margin-top: 30px;
`;

export const Overview = styled.h4`
  font-weight: normal;
  padding-top: 30px;
  line-height: 20px;

  @media ${device.tablet}, ${device.mobileL}, ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;
