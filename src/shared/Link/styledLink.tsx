import Link from 'next/link';
import { LinkProps } from '@src/types/interfaces';
import { S_Link } from './style';

export default function StyledLink({ href, children, containsPaddingInline, styleSheet }: LinkProps) {
  return (
    <li>
      {/* Link is a Next Component */}
      <Link href={href as string} passHref legacyBehavior>
        <S_Link containsPaddingInline={containsPaddingInline} style={styleSheet}>
          {children}
        </S_Link>
      </Link>
    </li>
  );
}
