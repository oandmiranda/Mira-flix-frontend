import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import MediaImage from '../Image/MediaImage';
import { MoviesContainer } from './styles';
import Tooltip from '../Tooltip/tooltip';
import { TooltipContent } from '../Tooltip/style';
import { getStarRating } from '@src/utils/ratingUtils';
import StarRating from '../Icons/Star/star_reting';

// This component loops the "results" array and accesses its values
export default function Movies({ items, hasCarousel }: { items: IList['items']; hasCarousel?: boolean }) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  return (
    <MoviesContainer hasCarousel={hasCarousel}>
      {items.results &&
        items.results.map((movie, key) => (
          <Link href={`/movie/${movie.id}`} key={key}>
            <Tooltip
              content={
                <TooltipContent>
                  <h4>{movie.name || movie.title}</h4>
                  <StarRating rating={getStarRating(movie.vote_average)}></StarRating>
                </TooltipContent>
              }
            >
              <MediaImage
                src={`${baseUrlPathImage}${movie.poster_path}`}
                alt={movie.name}
                width={180}
                height={250}
                zoomEffect
                styleSheet={{ padding: '10px', borderRadius: '20px' }}
              />
            </Tooltip>
          </Link>
        ))}
    </MoviesContainer>
  );
}
