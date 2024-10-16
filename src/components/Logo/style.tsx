import styled from 'styled-components';
import theme, { device } from '@src/styles/themes';
import Link from 'next/link';
import { LogoProps } from '@src/types/interfaces';

export const LogoLink = styled(Link)<LogoProps>`
  font-family: ${theme.tipography.logo.fontFamily};
  font-size: 2.3rem;
  color: ${theme.colors.text.logo};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.title.xs};
  }

  @media ${device.mobileL}, ${device.tablet} {
    font-size: ${theme.sizes.title.mobileS};
  }
`;

export const LogoText = styled.p`
  font-family: ${theme.tipography.logo.fontFamily};
  font-size: 2.3rem;
  color: ${theme.colors.text.logo};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    font-size: ${theme.sizes.title.xs};
  }

  @media ${device.mobileL}, ${device.tablet} {
    font-size: ${theme.sizes.title.mobileS};
  }
`;
