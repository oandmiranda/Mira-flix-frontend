import StyledLink from '@src/shared/Link/styledLink';
import theme from '@src/styles/themes';

export default function Logo() {
  return (
    <StyledLink
      href="/"
      styleSheet={{
        fontFamily: theme.tipography.font2.fontFamily,
        fontSize: '2rem',
        color: theme.colors.background.blue,
      }}
    >
      LogoFlix
    </StyledLink>
  );
}
