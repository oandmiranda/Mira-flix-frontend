// import NavLink from '../Link/navLink';
import NavLink from '../Link/navLink';
import { Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Contact</NavLink>
      </ul>
    </Nav>
  );
};

export default NavBar;
