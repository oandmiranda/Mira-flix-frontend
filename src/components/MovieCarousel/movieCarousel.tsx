// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselProps } from '@src/types/interfaces';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation, Scrollbar } from 'swiper';

import './styles.module.css';

export default function MovieCarousel({ children }: CarouselProps) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation
        // className="my-swiper"
        modules={[Pagination, Navigation, Scrollbar]}
      >
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper>
    </>
  );
}
