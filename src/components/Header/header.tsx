import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import { IList } from '@src/types/apiTypes';
import Carousel from '@src/components/Carousel/carousel';

export default function Header({ items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <Carousel
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {items.results.length > 0 &&
          items.results.map((item) => (
            // SwiperSlide is a Swiper component (lib)
            <SwiperSlide key={item.id}>
              <Box tag="div" key={item.id} styleSheet={{ display: 'flex' }}>
                <img
                  src={`${baseUrlPathImage}${item.backdrop_path}`}
                  style={{ width: '50%', height: '50%', background: 'cover' }}
                />
              </Box>
            </SwiperSlide>
          ))}
      </Carousel>
    </Box>
  );
}
