import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 0px 20px 60px 20px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.h2`
  font-family: ${theme.tipography.default.fontFamily};

  @media ${device.mobileS} {
    font-size: ${theme.sizes.subtitle.mobileS};
  }

  @media ${device.mobileL} {
    font-size: ${theme.sizes.subtitle.mobileL};
  }
`;
