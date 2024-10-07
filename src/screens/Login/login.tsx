import Head from 'next/head';
import Box from '@src/shared/Box/box';
import Button from '@src/components/Button/button';
import LoginForm from '@src/components/login/login';
import TextArea from '@src/components/TextArea/textArea';
import { Container, Sinopse, Title } from '@src/components/Header/style';
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

      <Box tag="div" styleSheet={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <img
          src={'/assets/images/streaming.jpg'}
          alt={'image_background'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        />
        <TextArea>
          <div>
            <Title>Filmes, séries, esportes e muito mais</Title>
            <Sinopse>
              Assista a Amazon Originais premiados e aproveite entrega grátis e rápida em diversos produtos. Com o
              plano anual você parcela em até 12x de R$ 13,90/mês sem juros (R$ 166,80 por ano).
            </Sinopse>
          </div>
          <LoginForm />
          <Button href="/signup">cadastre-se</Button>
        </TextArea>
      </Box>
    </>
  );
}
