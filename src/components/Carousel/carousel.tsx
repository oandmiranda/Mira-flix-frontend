import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import './swiper.module.css';
import { CarouselProps } from '@src/types/interfaces';
register();
import {
  SwiperButtonNext,
  SwiperButtonPrev,
  SwiperPagination,
  SwiperPaginationBullet,
  SwiperPaginationBulletActive,
  SwiperWrapper,
} from './style';

export default function Carousel({ children, navigation, pagination, loop, autoplay }: CarouselProps) {
  return (
    <Swiper
      // className="swiperWrapper"
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      autoplay={autoplay}
    >
      {children}
      <SwiperWrapper />
      <SwiperPagination />
      <SwiperPaginationBullet />
      <SwiperPaginationBulletActive />
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </Swiper>
  );
}
