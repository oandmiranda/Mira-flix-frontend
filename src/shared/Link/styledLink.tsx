import Link from 'next/link';
import styled from 'styled-components';
import { ILink, LinkProps } from '@src/types/interfaces';
import theme from '@src/styles/themes';

export const S_Link = styled.a<ILink>`
  color: ${(props) => props.style?.color || theme.colors.text.main};
  padding-inline: ${({ hasPaddingInline }) => hasPaddingInline || '0'};
`;

export default function StyledLink({ href, children, hasPaddingInline, styleSheet }: LinkProps) {
  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        {/* Link is a Next Component */}
        <S_Link hasPaddingInline={hasPaddingInline} style={styleSheet}>
          {children}
        </S_Link>
      </Link>
    </li>
  );
}
