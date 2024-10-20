import Head from 'next/head';
import Button from '@src/components/Button/button';
import { Sinopse, Title } from '@src/components/Header/style';
import Container from '@src/components/Container/container';
import Box from '@src/shared/Box/box';
import Text from '@src/components/Text/text';
import theme from '@src/styles/themes';
import { TextArea } from './style';
import LoginForm from '@src/components/login/login';
// import imageBackground from '../../../public/assets/images/aquaman.jpeg';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Bem vindo(a) ao MiraFlix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet"></link>
      </Head>

      <Container
        backgroundImage={'/assets/images/login_capa.jpg'}
        hasBackgroundSizeCover
        styleSheet={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '70px',
        }}
      >
        <TextArea>
          <Title>Filmes, séries, documentários e muito mais</Title>
          <Sinopse>
            Assista aos originais MiraFlix e explore um mundo de histórias incríveis com acesso ilimitado a filmes,
            séries e muito mais. Curta seus títulos favoritos ou descubra novas paixões com a liberdade de assistir
            quando e onde quiser.
          </Sinopse>
        </TextArea>

        <Box
          tag="div"
          styleSheet={{
            background: theme.colors.background.gradient,
            width: '360px',
            height: '520px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            gap: '20px',
            padding: '30px',
          }}
        >
          <LoginForm />
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '7px',
              marginTop: '30px',
            }}
          >
            <Text tag="p" styleSheet={{ fontSize: theme.sizes.paragraph.mobileS }}>
              É novo por aqui? cadastre-se
            </Text>
            <Button href="/signup" width="270px">
              cadastre-se
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
