import theme, { device } from '@src/styles/themes';
import { HeaderContainerProps } from '@src/types/interfaces';
import styled from 'styled-components';

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundImage});
  background-size: cover;

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
  margin-bottom: 10px;

  @media ${device.tablet} {
    width: 270px;
    height: 340px;
  }

  @media ${device.mobileL}, ${device.mobileS} {
    display: none;
  }
`;

export const GradientArea = styled.div`
  width: 100%; // exponencia o gradiente
  height: 100%; // exponencia o gradiente
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 65%),
    linear-gradient(to right, #000 1%, rgba(0, 0, 0, 0.6) 100%);

  @media ${device.mobileS}, ${device.mobileL} {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.2) 65%),
      linear-gradient(to right, #000 3%, rgba(0, 0, 0, 0.4) 80%);
  }
`;
export const Title = styled.h1`
  color: ${theme.colors.text.hover};
  margin-top: 20px;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.title.xs};
  }
  @media ${device.mobileL} {
    font-size: ${theme.sizes.title.xs};
  }

  @media ${device.tablet} {
    font-size: ${theme.sizes.title.xs};
  }
`;

export const TextArea = styled.div`
  margin-left: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS}, ${device.mobileL} {
    position: absolute;
    margin: 0 5px;
    top: 60px;
    left: 0;
    padding: 20px;
    opacity: 0;
    transform: translateY(100%);
    transition: all 1.1s ease-in-out;
  }

  @media ${device.tablet} {
    position: absolute;
    top: 100px;
    left: 250px;
    width: 58%;
    opacity: 0;
    transform: translateY(100%);
    transition: all 1.1s ease-in-out;
  }

  @media ${device.laptop}, ${device.desktop} {
    position: absolute;
    top: 100px;
    left: 280px;
    width: 65%;
    opacity: 0;
    transform: translateY(100%);
    transition: all 1.1s ease-in-out;
  }
`;

export const ContentArea = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 90%;
  margin-top: 30px;

  @media ${device.mobileS}, ${device.mobileL}, ${device.tablet}, ${device.laptop}, ${device.desktop} {
    &:hover ${TextArea} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Tagline = styled.h4``;

export const Overview = styled.h4`
  font-weight: normal;
  padding-top: 30px;
  line-height: 20px;

  @media ${device.tablet}, ${device.mobileL}, ${device.mobileS} {
    font-size: ${theme.sizes.paragraph.mobileS};
  }
`;
