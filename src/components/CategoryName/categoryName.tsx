import Box from '@src/shared/Box/box';
import { CategoryProps } from '@src/types/interfaces';
import { TextCategory } from './style';

export default function CategoryName({ title }: CategoryProps) {
  return (
    <Box tag="div">
      <TextCategory>{title}</TextCategory>
    </Box>
  );
}
