import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@src/components/Header/header';
import api_tmdb from '../../../pages/api/tmdb';
import withAuth from '@src/hook/withAuth';
import { IList } from '@src/types/apiTypes';
import Container from '@src/components/Container/container';
import MenuCategory from '@src/components/MenuCategory/menuCategory';
import Footer from '@src/components/Footer/footer';
import CategoryName from '@src/components/CategoryName/categoryName';
import Box from '@src/shared/Box/box';
import MovieCarousel from '@src/components/MovieCarousel/movieCarousel';

function Home() {
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
        <title>MiraFlix | Assista online</title>
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
      <Container hasDegrade>
        <MenuCategory title="O que você quer ver hoje?" />

        {apiDatas.map((item) => {
          // Verifique e assegura que item.id seja string ou number
          const id = typeof item.id === 'string' || typeof item.id === 'number' ? item.id : 'defaultKey';

          return (
            <React.Fragment key={id}>
              <CategoryName href={item.endpoint} title={item.title} key={id} />
              <Box
                tag="div"
                styleSheet={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <MovieCarousel items={item.items} />
              </Box>
            </React.Fragment>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
