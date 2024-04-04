// import NavLink from '../Link/navLink';
import theme from '@src/styles/themes';
import StyledLink from '@src/shared/Link/styledLink';
import LupaIcon from '../Icons/Lupa/lupa_icon';
import Logo from '../Logo/Logo';
import { Nav } from './style';
import Box from '@src/shared/Box/box';

const NavBar: React.FC = () => {
  return (
    <Nav>
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

      <Box tag="div">
        <LupaIcon fill={theme.colors.text.hover} />
      </Box>
    </Nav>
  );
};

export default NavBar;
