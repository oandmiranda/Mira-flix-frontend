import styled from 'styled-components';

// dados que são exibidos quando hover
export const TooltipBox = styled.div`
  position: absolute;
  bottom: 5px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 15px;
  border-radius: 7px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
  width: 100%;
`;

// container que envolve o TooltipBox
export const TooltipContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${TooltipBox} {
    opacity: 1;
  }
`;

// componente que estiliza o titulo e avaliação do filme
export const TooltipContent = styled.div`
  h4 {
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
