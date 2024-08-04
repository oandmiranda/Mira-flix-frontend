import styled from 'styled-components';
import theme, { device } from '@src/styles/themes';
import Link from 'next/link';

export const LogoLink = styled(Link)`
  font-family: ${theme.tipography.logo.fontFamily};
  font-size: 2.3rem;
  color: ${theme.colors.text.logo};

  @media ${device.mobileS} {
    font-size: 1.7rem;
  }

  @media ${device.mobileL} {
    font-size: 1.9;
  }

  @media ${device.tablet} {
    font-size: 2.1;
  }
`;
