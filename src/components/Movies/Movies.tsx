import Link from 'next/link';
import { IList } from '@src/types/apiTypes';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';
// import Image from 'next/image';
import MediaImage from '../Image/MediaImage';
import theme from '@src/styles/themes';

// This component loops the "results" array and accesses its values
export default function Movies({ title, items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <Box tag="div" styleSheet={{ marginBottom: '24px' }}>
      <Text
        tag="h1"
        styleSheet={{
          marginBottom: '15px',
          padding: '10px',
          fontWeight: 'normal',
          borderBottom: '1px solid #1F2222',
          color: theme.colors.text.logo,
        }}
      >
        {title}
      </Text>

      <Box tag="div" styleSheet={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.results &&
          items.results.map((movie, key) => (
            <Box key={key} tag="div" styleSheet={{ padding: '8px 5px' }}>
              <Link href={'/'}>
                <MediaImage
                  src={`${baseUrlPathImage}${movie.poster_path}`}
                  alt={movie.name}
                  width={173}
                  height={250}
                  styleSheet={{ borderRadius: '15px' }}
                />
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
