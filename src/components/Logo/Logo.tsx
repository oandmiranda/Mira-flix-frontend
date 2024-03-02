import StyledLink from '@src/shared/Link/StyledLink';
import theme from '@src/styles/themes';

export default function Logo() {
  return (
    <StyledLink href="/" styleSheet={{ fontFamily: theme.tipography.font1.fontFamily, fontSize: '2rem' }}>
      LogoFlix
    </StyledLink>
  );
}
