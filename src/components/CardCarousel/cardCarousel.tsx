import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { FreeMode, Navigation } from 'swiper';
import { IList } from '@src/types/apiTypes';
import Tooltip from '../Tooltip/tooltip';
import { TooltipContent } from '../Tooltip/style';
import MediaImage from '../Image/MediaImage';
import Box from '@src/shared/Box/box';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

register();

export default function CardCarousel({ items }: { items: IList['items'] }) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  const formatVoteAverage = (voteAverage: number | undefined) => {
    return voteAverage?.toFixed(1);
  };

  return (
    <Swiper
      modules={[FreeMode, Navigation]}
      centeredSlides={false}
      slidesPerView={6}
      slidesPerGroup={1}
      speed={900}
      navigation={true}
      spaceBetween={0}
      className={styles.container}
      breakpoints={{
        99: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        340: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        999: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1170: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1330: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
    >
      {items.results &&
        items.results.map((movie, key) => (
          <SwiperSlide key={key}>
            <Box
              tag="div"
              styleSheet={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link href={`/movie/${movie.id}`}>
                <Tooltip
                  content={
                    <TooltipContent>
                      <h4>{movie.name || movie.title}</h4>
                      <p>{`Avaliação: ${formatVoteAverage(movie.vote_average)}`}</p>
                    </TooltipContent>
                  }
                >
                  <MediaImage
                    src={`${baseUrlPathImage}${movie.poster_path}`}
                    alt={movie.name}
                    width={210}
                    height={290}
                    zoomEffect
                    styleSheet={{ padding: '10px', borderRadius: '20px' }}
                  />
                </Tooltip>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
