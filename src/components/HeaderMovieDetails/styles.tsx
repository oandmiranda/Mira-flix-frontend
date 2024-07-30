import styled from 'styled-components';

interface HeaderContainerProps {
  backgroundImage?: string;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.backgroundImage});
  background-size: cover;
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
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 90%;
  margin-top: 70px;
`;
