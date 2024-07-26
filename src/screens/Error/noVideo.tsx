import Text from '@src/components/Text/text';
import Box from '@src/shared/Box/box';

export default function NoVideo() {
  return (
    <Box
      tag="header"
      styleSheet={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <Text tag="h2" styleSheet={{ color: '#fff' }}>
        {'Ops!!! A API não retorna os vídeos dos filmes :('}
      </Text>
    </Box>
  );
}
