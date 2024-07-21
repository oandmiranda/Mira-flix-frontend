import { IList } from '@src/types/apiTypes';
import MediaImage from '../Image/MediaImage';

export default function HeaderMovieDetails({ items, id }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  const movie = items?.results?.find((movie) => movie.id == id) ?? null;

  return (
    <div>
      {movie && <h3>{movie.name || movie.title}</h3>}
      <MediaImage
        src={`${baseUrlPathImage}${movie?.backdrop_path}`}
        alt={movie?.name || movie?.title}
        width={400}
        height={200}
        styleSheet={{ padding: '4px', borderRadius: '15px' }}
      />
    </div>
  );
}
