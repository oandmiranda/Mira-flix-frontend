import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Scrollbar, Autoplay, Mousewheel, Keyboard, Pagination, EffectCoverflow } from 'swiper';
import { CarouselProps } from '@src/types/interfaces';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
register();
import {
  SwiperButtonNext,
  SwiperButtonPrev,
  SwiperPagination,
  SwiperPaginationBulletActive,
  SwiperWrapper,
} from './style';

export default function Carousel({
  children,
  loop,
  autoplay,
  effect,
  coverflowEffect,
  pagination,
}: CarouselProps) {
  return (
    <Swiper
      // className="swiperWrapper"
      modules={[Scrollbar, Autoplay, Mousewheel, Keyboard, Pagination, EffectCoverflow]}
      loop={loop}
      autoplay={autoplay}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      effect={effect}
      coverflowEffect={coverflowEffect}
      pagination={pagination}
    >
      {children}
      <SwiperWrapper />
      <SwiperPagination />
      <SwiperPaginationBulletActive />
      <SwiperButtonPrev />
      <SwiperButtonNext />
    </Swiper>
  );
}
