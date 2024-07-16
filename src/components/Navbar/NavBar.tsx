// import NavLink from '../Link/navLink';
import theme from '@src/styles/themes';
import StyledLink from '@src/shared/Link/styledLink';
import LupaIcon from '../Icons/Lupa/lupa_icon';
import Logo from '../Logo/Logo';
import { Nav } from './style';
import Box from '@src/shared/Box/box';
import { useEffect, useState } from 'react';
import { SearchInput } from './Input/style';

export default function NavBar() {
  const [scroll, setScroll] = useState(false); // Estado que controla a cor da navbar

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setScroll(true); // Altera a cor da navbar para preta
    } else {
      setScroll(false); // Altera a cor da navbar para transparente
    }
  };

  useEffect(() => {
    // Adiciona o listener de evento de scroll quando o componente é montado
    window.addEventListener('scroll', changeColor);

    // Função de limpeza que remove o listener de evento de scroll quando o componente é desmontado
    // "return" => Código de limpeza (desmontagem)
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <Nav scroll={scroll}>
      <Box
        tag="div"
        styleSheet={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '55%',
          whiteSpace: 'nowrap',
        }}
      >
        <Logo />
        <ul>
          <StyledLink href="/" containsPaddingInline="27px">
            Home
          </StyledLink>
          <StyledLink href="/emalta" containsPaddingInline="27px">
            Em alta
          </StyledLink>
          <StyledLink href="/series" containsPaddingInline="27px">
            Séries
          </StyledLink>
          <StyledLink href="/favoritos" containsPaddingInline="27px">
            Favoritos
          </StyledLink>
        </ul>
      </Box>

      <Box tag="div" styleSheet={{ alignItems: 'center', display: 'flex', gap: '5px' }}>
        <SearchInput />
        <LupaIcon fill={theme.colors.text.hover} />
      </Box>
    </Nav>
  );
}
