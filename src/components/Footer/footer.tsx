import Box from '@src/shared/Box/box';
import Logo from '../Logo/Logo';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import { Container } from './style';

export default function Footer() {
  return (
    <Container>
      <Box tag="div" styleSheet={{ padding: '15px', display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </Box>
      <Box
        tag="div"
        styleSheet={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 25px 50px 25px',
          background: theme.colors.background.secondary,
        }}
      >
        <Text tag="p" styleSheet={{ color: theme.colors.text.footer }}>
          <span style={{ color: theme.colors.text.logo }}>Desenvolvido por Anderson Miranda -</span> STREAMING |
          FILMES ONLINE | ASSISTIR FILMES ONLINE | FILMES ONLINE GRÁTIS | FILMES COMPLETOS DUBLADOS
        </Text>
      </Box>
    </Container>
  );
}
