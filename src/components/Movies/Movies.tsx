import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import MediaImage from '../Image/MediaImage';
import { MoviesContainer } from './styles';
import Tooltip from '../Tooltip/tooltip';
import { TooltipContent } from '../Tooltip/style';
import { getStarRating } from '@src/utils/ratingUtils';
import StarRating from '../Icons/Star/star_reting';
import Text from '../Text/text';
import { roundNumber } from '@src/utils/roundNumber';
import { getYear } from '@src/utils/getYear';

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
                  <Text tag="h4">{movie.name || movie.title}</Text>
                  <Text tag="p">{getYear(movie.release_date)}</Text>
                  <Text
                    tag="p"
                    styleSheet={{
                      display: 'flex',
                      alignItems: 'center',
                      lineHeight: 'center',
                      gap: '5px',
                    }}
                  >
                    {roundNumber(movie.vote_average)}
                    <StarRating rating={getStarRating(movie.vote_average)}></StarRating>
                  </Text>
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
        ))}
    </MoviesContainer>
  );
}
