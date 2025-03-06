import theme, { device } from '@src/styles/themes';
import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  overflow: visible;
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.83) 25%, rgba(0, 0, 0, 0)),
    linear-gradient(to right, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 60%);
  color: white;
  padding: 13px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s ease-in-out;

  ${TooltipContainer}:hover & {
    opacity: 1;
  }
`;

export const TooltipContent = styled.div`
  display: flex;
  position: absolute;
  top: 170px;
  flex-direction: column;
  gap: 3px;

  h4 {
    margin-bottom: 3px;
    font-size: ${theme.sizes.subtitle.mobileS};

    @media ${device.mobileS} {
      font-size: ${theme.sizes.paragraph.mobileS};
    }
  }
  p {
    font-size: 0.9rem;

    @media ${device.mobileS} {
      font-size: ${theme.sizes.paragraph.xs};
    }
  }

  @media ${device.mobileS}, ${device.mobileL} {
    top: 110px;
  }
`;
