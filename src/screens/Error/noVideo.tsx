import Head from 'next/head';
import withAuth from '@src/hook/withAuth';
import Box from '@src/shared/Box/box';
import Text from '@src/components/Text/text';
import { ErrorImage } from './style';

function NoVideo() {
  return (
    <>
      <Head>
        <title>Erro 404</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_popcorn.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet"></link>
      </Head>
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
    </>
  );
}

export default withAuth(NoVideo);
