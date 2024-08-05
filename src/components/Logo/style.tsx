import styled from 'styled-components';
import theme, { device } from '@src/styles/themes';
import Link from 'next/link';

export const LogoLink = styled(Link)`
  font-family: ${theme.tipography.logo.fontFamily};
  font-size: 2.3rem;
  color: ${theme.colors.text.logo};

  @media ${device.mobileS} {
    font-size: ${theme.sizes.title.xs};
  }

  @media ${device.mobileL}, ${device.tablet} {
    font-size: ${theme.sizes.title.mobileS};
  }
`;
