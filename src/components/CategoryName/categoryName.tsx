import Box from '@src/shared/Box/box';
import { CategoryProps } from '@src/types/interfaces';
import { TextCategory } from './style';
import Link from 'next/link';

export default function CategoryName({ title, href }: CategoryProps) {
  return (
    <Box tag="div">
      <Link href={href || '/'}>
        <TextCategory>{title}</TextCategory>
      </Link>
    </Box>
  );
}
