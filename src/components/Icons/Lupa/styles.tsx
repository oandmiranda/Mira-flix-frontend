import styled from 'styled-components';

// Defina o SVG como um componente estilizado
export const StyledSvg = styled.svg<{ isPositionAbsolute?: boolean }>`
  height: 25px;
  width: 25px;
  position: absolute;
  position: ${({ isPositionAbsolute }) => isPositionAbsolute && 'absolute'};
  right: ${({ isPositionAbsolute }) => isPositionAbsolute && '3px'};
  bottom: ${({ isPositionAbsolute }) => isPositionAbsolute && '6px'};
  cursor: pointer;
`;
