import StyledLink from '@src/shared/Link/styledLink';
import theme from '@src/styles/themes';

export default function Logo() {
  return (
    <StyledLink
      href="/"
      styleSheet={{
        fontFamily: theme.tipography.logo.fontFamily,
        fontSize: '2.3rem',
        color: theme.colors.background.blue,
      }}
    >
      MiraFlix
    </StyledLink>
  );
}
