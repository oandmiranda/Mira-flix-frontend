import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import Box from '@src/shared/Box/box';
import MediaImage from '../Image/MediaImage';
import { Container } from './styles';

// This component loops the "results" array and accesses its values
export default function Movies({ items, hasCarousel }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  return (
    <Container hasCarousel={hasCarousel}>
      {items.results &&
        items.results.map((movie, key) => (
          <Box key={key} tag="div" styleSheet={{ paddingInline: '4px' }}>
            <Link href={'/'}>
              <MediaImage
                src={`${baseUrlPathImage}${movie.poster_path}`}
                alt={movie.name}
                width={171}
                height={250}
                styleSheet={{ borderRadius: '15px' }}
              />
            </Link>
          </Box>
        ))}
    </Container>
  );
}
