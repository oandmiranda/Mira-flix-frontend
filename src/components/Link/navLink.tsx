import Link from 'next/link';
import { NavLinkProps } from '@src/types/interfaces';
import { StyledLink } from './style';

export default function NavLink({ href, children, styleSheet }: NavLinkProps) {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        {/* Link is a Next Component */}
        <StyledLink style={styleSheet}>{children}</StyledLink>
      </Link>
    </li>
  );
}
