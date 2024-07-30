import Link from 'next/link';
import Box from '@src/shared/Box/box';
import { useCategoriesContext } from '@src/context/categoryContext';
import { CategoryProps } from '@src/types/interfaces';
import theme from '@src/styles/themes';
import Text from '../Text/text';
import Button from '../Button/button';

export default function MenuCategory({ title }: CategoryProps) {
  const categories = useCategoriesContext();
  const filterCategories = categories.filter((item) => item.id !== 6 && item.id !== 5);

  return (
    <Box
      tag="section"
      styleSheet={{
        padding: '0px 20px 60px 20px',
      }}
    >
      <Box tag="div" styleSheet={{ display: 'flex', justifyContent: 'center', padding: '10px 0 35px 0' }}>
        <Text tag="h2" styleSheet={{ fontFamily: theme.tipography.default.fontFamily }}>
          {title}
        </Text>
      </Box>

      <Box tag="div" styleSheet={{ display: 'flex', justifyContent: 'center' }}>
        {filterCategories.map((item) => (
          <Box tag="div" key={item.id} styleSheet={{ display: 'flex', padding: '15px' }}>
            <Link href={`/category/${item.title}`}>
              <Button>{item.name}</Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
