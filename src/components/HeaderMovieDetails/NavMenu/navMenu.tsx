// import NavLink from '../Link/navLink';
import theme from '@src/styles/themes';
import StyledLink from '@src/shared/Link/styledLink';
import Box from '@src/shared/Box/box';
import Logo from '@src/components/Logo/Logo';
import { SearchInput } from '@src/components/Navbar/Input/style';
import LupaIcon from '@src/components/Icons/Lupa/lupa_icon';
import { Menu } from './styles';

export default function NavMenu() {
  return (
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
          <StyledLink href="/emalta" containsPaddingInline="27px">
            Em alta
          </StyledLink>
          <StyledLink href="/series" containsPaddingInline="27px">
            Séries
          </StyledLink>
        </ul>
      </Box>

      <Box tag="div" styleSheet={{ alignItems: 'center', display: 'flex', gap: '5px' }}>
        <SearchInput />
        <LupaIcon fill={theme.colors.text.hover} />
      </Box>
    </Menu>
  );
}
