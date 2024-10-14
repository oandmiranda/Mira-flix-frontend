import theme from '@src/styles/themes';
import StyledLink from '@src/shared/Link/styledLink';
import LupaIcon from '../Icons/Lupa/lupa_icon';
import Logo from '../Logo/Logo';
import { Nav, StyledGiHamburgerMenu } from './style';
import Box from '@src/shared/Box/box';
import { useEffect, useState } from 'react';
import { SearchInput } from './Input/style';
import { useBurgerMenuContext } from '@src/context/burgerMenuContext';
import BurgerMenu from '../BurgerMenu/burgerMenu';
import Input from './Input/Input';

export default function NavBar() {
  const { menuIsOpen, openMenu } = useBurgerMenuContext();
  const [scroll, setScroll] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <>
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
            <StyledLink href="/trending" containsPaddingInline="27px">
              Recomendados para você
            </StyledLink>
            <StyledLink href="/top_rated" containsPaddingInline="27px">
              Em alta
            </StyledLink>
            <StyledLink href="/series" containsPaddingInline="27px">
              Séries
            </StyledLink>
          </ul>
        </Box>

        <Box tag="div" styleSheet={{ alignItems: 'center', display: 'flex', gap: '5px' }}>
          <StyledGiHamburgerMenu size={30} onClick={openMenu} />
          <ul>
            <Input placeholder="busque for filmes ou séries" />
          </ul>
        </Box>
      </Nav>

      {menuIsOpen && <BurgerMenu isOpen />}
    </>
  );
}
