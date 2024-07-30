import Head from 'next/head';
import { useEffect, useState } from 'react';
import api_tmdb from '../../pages/api/tmdb';
import HeaderCategory from '@src/components/HeaderCategory/headerCategory';
import { IList } from '@src/types/apiTypes';
import Movies from '@src/components/Movies/Movies';
import Container from '@src/components/Container/container';
import { useRouter } from 'next/router';
import Footer from '@src/components/Footer/footer';
import MenuCategory from '@src/components/MenuCategory/menuCategory';

export default function FilterCategory() {
  const router = useRouter();
  const [movies, setMovies] = useState<IList[]>([]);

  useEffect(() => {
    const showResults = async () => {
      const list = await api_tmdb.getHomeList();
      setMovies(list);
    };

    showResults();
  }, []);

  return (
    <>
      <Head>
        <title>{`Categoria | ${router.query.slug}`}</title>
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

      <HeaderCategory slug={router.query.slug} />
      <Container hasDegrade>
        {movies
          .filter((item) => item.slug === router.query.slug)
          .map((item) => (
            <Movies items={item.items} key={Number(item.id)} />
          ))}
        <MenuCategory title="O que você quer assistir hoje?" />
      </Container>
      <Footer />
    </>
  );
}
