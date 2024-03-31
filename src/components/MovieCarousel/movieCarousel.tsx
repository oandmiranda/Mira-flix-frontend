import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { CarouselProps } from '@src/types/interfaces';
import styles from './swiper.module.css';

register();

export default function MovieCarousel({ children }: CarouselProps) {
  return (
    <Swiper className={styles.swiper} slidesPerView={1} spaceBetween={300}>
      <SwiperSlide className={styles.swiperSlide}>{children}</SwiperSlide>
    </Swiper>
  );
}
