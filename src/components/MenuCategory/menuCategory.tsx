import Link from 'next/link';
import Box from '@src/shared/Box/box';
import { useCategoriesContext } from '@src/context/categoryContext';
import { CategoryProps } from '@src/types/interfaces';
import Button from '../Button/button';
import { Container, Label, StyledWrapper } from './style';

export default function MenuCategory({ title, paddingTop }: CategoryProps) {
  const categories = useCategoriesContext();
  const filterCategories = categories.filter(
    (item) => item.id !== 1 && item.id !== 2 && item.id !== 3 && item.id !== 8,
  );

  return (
    <Container paddingTop={paddingTop}>
      <Box tag="div" styleSheet={{ display: 'flex', justifyContent: 'center', padding: '10px 0 35px 0' }}>
        <Label>{title}</Label>
      </Box>

      <StyledWrapper>
        {filterCategories.map((item) => (
          <Box tag="div" key={item.id} styleSheet={{ display: 'flex', padding: '15px' }}>
            <Link href={`/category/${item.title}`}>
              <Button>{item.name}</Button>
            </Link>
          </Box>
        ))}
      </StyledWrapper>
    </Container>
  );
}
