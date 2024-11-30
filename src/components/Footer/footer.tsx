import Box from '@src/shared/Box/box';
import Logo from '../Logo/Logo';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import { FaArrowUpLong } from 'react-icons/fa6';
import { Container, Button } from './style';

export default function Footer() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Box
        tag="div"
        styleSheet={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Button onClick={scroll}>
          <FaArrowUpLong size={30} />
        </Button>
        <Text tag="h3" styleSheet={{ marginBottom: '70px', color: theme.colors.text.main }}>
          Voltar ao topo
        </Text>
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
