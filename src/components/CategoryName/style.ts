import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const TextCategory = styled.h1`
  margin-bottom: 15px;
  padding: 15px;
  font-weight: normal;
  border-bottom: 1px solid #1f2222;
  color: ${theme.colors.text.logo};

  @media ${device.mobileS} {
    font-size: ${theme.sizes.subtitle.mobileL};
    margin-bottom: 0;
  }
`;
