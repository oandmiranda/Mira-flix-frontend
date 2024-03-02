// import NavLink from '../Link/navLink';
import theme from '@src/styles/themes';
import StyledLink from '../../shared/Link/StyledLink';
import LupaIcon from '../Icons/Lupa/lupa_icon';
import Logo from '../Logo/Logo';
import { Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Logo />
      <ul>
        <StyledLink hasPaddingInline="20px" href="/">
          Home
        </StyledLink>
        <StyledLink href="/">About</StyledLink>
        <StyledLink href="/">Contact</StyledLink>
      </ul>
      <div>
        <LupaIcon fill={theme.colors.text.hover} />
      </div>
    </Nav>
  );
};

export default NavBar;
