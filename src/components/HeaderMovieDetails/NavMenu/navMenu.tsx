// import NavLink from '../Link/navLink';
import theme from '@src/styles/themes';
import StyledLink from '@src/shared/Link/styledLink';
import Box from '@src/shared/Box/box';
import Logo from '@src/components/Logo/Logo';
import { SearchInput } from '@src/components/Navbar/Input/style';
import LupaIcon from '@src/components/Icons/Lupa/lupa_icon';
import { Menu } from './styles';
import { StyledGiHamburgerMenu } from '@src/components/Navbar/style';
import { useBurgerMenuContext } from '@src/context/burgerMenuContext';
import BurgerMenu from '@src/components/BurgerMenu/burgerMenu';

export default function NavMenu() {
  const { menuIsOpen, openMenu } = useBurgerMenuContext();

  return (
    <>
      <Menu>
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
            <StyledLink href="/trending" containsPaddingInline="27px">
              Recomendados pra você
            </StyledLink>
            <StyledLink href="/series" containsPaddingInline="27px">
              Séries
            </StyledLink>
          </ul>
        </Box>

        <Box tag="div" styleSheet={{ alignItems: 'center', display: 'flex', gap: '5px' }}>
          <StyledGiHamburgerMenu size={30} onClick={openMenu} />
          <ul>
            <SearchInput />
            <LupaIcon isPositionAbsolute fill={theme.colors.text.logo} />
          </ul>
        </Box>
      </Menu>
      {menuIsOpen && <BurgerMenu isOpen />}
    </>
  );
}
