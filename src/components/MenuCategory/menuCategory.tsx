import Link from 'next/link';
import Box from '@src/shared/Box/box';
import { C_Button } from './style';
import { useCategoriesContext } from '@src/context/categoryContext';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import { CategoryProps } from '@src/types/interfaces';

export default function MenuCategory({ title }: CategoryProps) {
  const categories = useCategoriesContext();

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
        {categories.map((item) => (
          <Box tag="div" key={item.id} styleSheet={{ display: 'flex', padding: '15px' }}>
            <Link href={`/category/${item.title}`}>
              <C_Button>{item.name}</C_Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}