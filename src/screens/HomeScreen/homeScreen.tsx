import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@src/components/Header/header';
import Movies from '@src/components/Movies/Movies';
import api_tmdb from '../../../pages/api/tmdb';
import { IList } from '@src/types/apiTypes';
import Container from '@src/components/Container/container';
import Footer from '@src/components/Footer/footer';

export default function HomeScreen() {
  const [apiDatas, setApiDatas] = useState<IList[]>([]);

  useEffect(() => {
    const showResults = async () => {
      const list = await api_tmdb.getHomeList();
      console.log(list);
      setApiDatas(list);
    };
    showResults();
  }, []);

  // verificação para garantir que apiDatas[0] tenha sido retornada antes de tentar acessar o seu objeto.
  // const items = apiDatas[0] ? apiDatas[0].items : undefined;

  return (
    <>
      <Head>
        <title>New Project</title>
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

      <Header />
      {apiDatas.map((item, key) => (
        <Container key={key} hasDegrade>
          <Movies title={item.title} items={item.items} />
        </Container>
      ))}
      <Footer />
    </>
  );
}
