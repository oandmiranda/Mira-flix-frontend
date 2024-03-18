import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';
// import Image from 'next/image';
import MediaImage from '../Image/MediaImage';
import Carousel from '../Carousel/carousel';
import { SwiperSlide } from 'swiper/react';

// This component loops the "results" array and accesses its values
export default function Movies({ title, items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <Box tag="div">
      <Text
        tag="h2"
        styleSheet={{
          marginBottom: '15px',
          padding: '10px',
          fontWeight: 'normal',
          borderBottom: '1px solid #1F2222',
        }}
      >
        {title}
      </Text>

      <Box tag="div" styleSheet={{ display: 'flex' }}>
        {items.results &&
          items.results.map((movie, key) => (
            <Carousel
              key={key}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
            >
              <SwiperSlide>
                <Box tag="div">
                  <Link href={'/'}>
                    <MediaImage
                      src={`${baseUrlPathImage}${movie.poster_path}`}
                      alt={movie.name}
                      width={190}
                      height={250}
                      styleSheet={{ borderRadius: '18px' }}
                    />
                  </Link>
                </Box>
              </SwiperSlide>
            </Carousel>
          ))}
      </Box>
    </Box>
  );
}
