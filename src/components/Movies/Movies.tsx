import Box from '@src/shared/Box/Box';
import { IList } from '@src/types/apiTypes';
import Text from '../Text/text';

// This component loops the "results" array and accesses its values
export default function Movies({ items }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';
  return (
    <Box tag="div">
      <Text tag="h2">teste</Text>
      <Box tag="div">
        {items.results.length > 0 &&
          items.results.map((item, key) => <img key={key} src={`${baseUrlPathImage}${item.poster_path}`} />)}
      </Box>
    </Box>
  );
}
