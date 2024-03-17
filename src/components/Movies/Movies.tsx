import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';

// This component loops the "results" array and accesses its values
export default function Movies({ items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <Box tag="div">
      {items.results &&
        items.results.map((movie) => (
          <div key={movie.id}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Link href={'/'}>
                <img src={`${baseUrlPathImage}${movie.poster_path}`} style={{ width: '200px' }} />
                <Text>{movie.name}</Text>
                <Text>{movie.popularity}</Text>
              </Link>
            </div>
          </div>
        ))}
    </Box>
  );
}
