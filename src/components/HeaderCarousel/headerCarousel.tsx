import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Scrollbar, Autoplay, Mousewheel, Keyboard, Pagination, Grid } from 'swiper';
import { CarouselProps } from '@src/types/interfaces';
import { SwiperMain, SwiperSlide } from './style';

register();

export default function HeaderCarousel({
  children,
  loop,
  autoplay,
  effect,
  coverflowEffect,
  grid,
  slidesPerView,
  spaceBetween,
  pagination,
}: CarouselProps) {
  return (
    <Swiper
      // className="swiperWrapper"
      modules={[Scrollbar, Autoplay, Mousewheel, Keyboard, Pagination, Grid]}
      loop={loop}
      autoplay={autoplay}
      // cssMode={true}
      // mousewheel={true}
      // keyboard={true}
      effect={effect}
      coverflowEffect={coverflowEffect}
      pagination={pagination}
      slidesPerView={slidesPerView}
      grid={grid}
      spaceBetween={spaceBetween}
    >
      {children}
      <SwiperMain />
      <SwiperSlide />
    </Swiper>
  );
}
