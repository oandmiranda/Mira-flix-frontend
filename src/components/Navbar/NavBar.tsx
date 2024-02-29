// import NavLink from '../Link/navLink';
import NavLink from '../Link/navLink';
import Logo from '../Logo/Logo';
import { Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Logo />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">About</NavLink>
      <NavLink href="/">Contact</NavLink>
    </Nav>
  );
};

export default NavBar;
