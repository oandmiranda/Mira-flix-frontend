import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperWrapper from '@src/components/Swiper/swiperWrapper';
import Box from '@src/shared/Box/Box';
import NavBar from '@src/components/Navbar/NavBar';
import { IList } from '@src/types/apiTypes';

export default function Header({ items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <SwiperWrapper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {items.results.length > 0 &&
          items.results.map((item) => (
            <SwiperSlide key={item.id}>
              <Box tag="div" key={item.id} styleSheet={{ display: 'flex' }}>
                <img
                  src={`${baseUrlPathImage}${item.poster_path}`}
                  style={{ width: '50%', height: '50%', background: 'cover' }}
                />
              </Box>
            </SwiperSlide>
          ))}
      </SwiperWrapper>
    </Box>
  );
}
