import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const Container = styled.section<{ paddingTop?: string }>`
  padding: 0px 20px 60px 20px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '0')};
  padding-right: 20px;
  padding-bottom: 60px;
  padding-left: 20px;
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
