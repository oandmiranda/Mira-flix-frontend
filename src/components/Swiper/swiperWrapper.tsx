import { Swiper } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './swiper.module.css';
import { CarrouselProps } from '@src/types/interfaces';
register();

export default function SwiperWrapper({ children, navigation, pagination, loop, autoplay }: CarrouselProps) {
  return (
    <Swiper
      className="swiperWrapper"
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      autoplay={autoplay}
    >
      {children}
    </Swiper>
  );
}
