import Link from 'next/link';
import { NavLinkProps } from '@src/types/interfaces';
import { StyledLink } from './style';

export default function NavLink({ href, children, styleSheet: { ...props } }: NavLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      {/* StyledLink is a Next Component */}
      <StyledLink style={{ ...props }}>{children}</StyledLink>
    </Link>
  );
}
