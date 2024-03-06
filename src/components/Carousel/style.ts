// SwiperStyles.tsx
import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SwiperPagination = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 310px) and (max-width: 520px) {
    display: none;
  }
`;

export const SwiperPaginationBullet = styled.div`
  background-color: #ffffff;
  opacity: 0.5;
  padding: 3px;
  margin-bottom: 60px;
`;

export const SwiperPaginationBulletActive = styled.div`
  background-color: #fff;
  opacity: 1;
`;

export const SwiperButtonPrev = styled.div`
  color: #fff;
  opacity: 0;
  padding-right: 5px;
`;

export const SwiperButtonNext = styled.div`
  color: #fff;
  opacity: 0;
  padding-right: 5px;
`;
