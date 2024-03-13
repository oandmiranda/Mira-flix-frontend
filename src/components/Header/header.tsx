import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { useMoviesContext } from '@src/context/moviesContext';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import Carousel from '@src/components/Carousel/carousel';
import { TextArea } from '../TextArea/style';
import Text from '../Text/text';
import theme from '@src/styles/themes';

export default function Header() {
  const movies = useMoviesContext();

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <Carousel
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {movies &&
          movies.map((movie) => (
            // SwiperSlide is a Swiper component (lib)
            <SwiperSlide key={movie.id}>
              <Box tag="div" styleSheet={{ width: '100vw', height: '100vh' }}>
                <img
                  src={movie.srcImage}
                  alt={movie.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundSize: 'cover' }}
                />
                <TextArea>
                  <Text tag="h1" styleSheet={{ fontSize: theme.sizes.title, color: theme.colors.text.hover }}>
                    {movie.title}
                  </Text>
                  <Text tag="p" styleSheet={{ fontSize: theme.sizes.sinopse }}>
                    {movie.sinopse}
                  </Text>
                </TextArea>
              </Box>
            </SwiperSlide>
          ))}
      </Carousel>
    </Box>
  );
}
