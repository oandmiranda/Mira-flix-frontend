import MediaImage from '@src/components/Image/MediaImage';
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        padding: '40px',
      }}
    >
      <MediaImage src={'/assets/images/erro-404.png'} alt={'página não encontrada'} width={200} height={200} />
      <Text tag="h2" styleSheet={{ color: '#fff' }}>
        {'Ops!!! A API não retorna os vídeos dos filmes :('}
      </Text>
    </Box>
  );
}
