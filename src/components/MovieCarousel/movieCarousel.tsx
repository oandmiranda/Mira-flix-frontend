import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper';
import { IList } from '@src/types/apiTypes';
import Tooltip from '../Tooltip/tooltip';
import { TooltipContent } from '../Tooltip/style';
import MediaImage from '../Image/MediaImage';
import styles from './styles.module.css';

register();

export default function MovieCarousel({ items }: { items: IList['items'] }) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  const formatVoteAverage = (voteAverage: number | undefined) => {
    return voteAverage?.toFixed(1);
  };

  return (
    <Swiper
      slidesPerView={6}
      navigation={true}
      spaceBetween={0}
      className={styles.container}
      modules={[FreeMode, Navigation]}
    >
      {items.results &&
        items.results.map((movie, key) => (
          <SwiperSlide key={key}>
            <div
              style={{
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
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
