import Text from '@src/components/Text/text';
import Box from '@src/shared/Box/box';
import { ErrorImage } from './style';
import withAuth from '@src/hook/withAuth';

function NoVideo() {
  return (
    <Box
      tag="header"
      styleSheet={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '17px',
        padding: '40px',
      }}
    >
      <ErrorImage src={'/assets/images/erro-404.png'} alt={'página não encontrada'} />
      <Text tag="h3" styleSheet={{ color: '#fff' }}>
        {'Ops!!! A API não retorna os vídeos dos filmes :('}
      </Text>
    </Box>
  );
}

export default NoVideo;
