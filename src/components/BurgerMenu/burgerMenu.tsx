import StyledLink from '@src/shared/Link/styledLink';
import { IoClose } from 'react-icons/io5';
import { Container } from './styles';
import { useBurgerMenuContext } from '@src/context/burgerMenuContext';
import { SearchInput } from '../Navbar/Input/style';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';
import Input from '../Navbar/Input/Input';

export default function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  const { closeMenu } = useBurgerMenuContext();

  return (
    <Container isOpen={isOpen}>
      <IoClose size={40} onClick={closeMenu} />
      <nav>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/trending">Recomendados para você</StyledLink>
        <StyledLink href="/series">Séries</StyledLink>
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            marginTop: '40px',
          }}
        >
          <Text tag="h4">Buscar</Text>
          <Input placeholder="Busque por filmes ou séries" />
        </Box>
      </nav>
    </Container>
  );
}
