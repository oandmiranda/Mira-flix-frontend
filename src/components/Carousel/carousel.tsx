import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Scrollbar, Autoplay, Mousewheel, Keyboard } from 'swiper';
import { CarouselProps } from '@src/types/interfaces';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
register();
import {
  SwiperButtonNext,
  SwiperButtonPrev,
  SwiperPagination,
  SwiperPaginationBullet,
  SwiperPaginationBulletActive,
  SwiperWrapper,
} from './style';

export default function Carousel({ children, loop, autoplay }: CarouselProps) {
  return (
    <Swiper
      // className="swiperWrapper"
      modules={[Scrollbar, Autoplay, Mousewheel, Keyboard]}
      loop={loop}
      autoplay={autoplay}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
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
