import { useEffect, useState } from 'react';
import { IList } from '@src/types/apiTypes';
import Head from 'next/head';
import { getSeries } from '../../../pages/api/tmdb';
import Movies from '@src/components/Movies/Movies';
import HeaderCategory from '@src/components/HeaderCategory/headerCategory';
import Container from '@src/components/Container/container';
import MenuCategory from '@src/components/MenuCategory/menuCategory';
import withAuth from '@src/hook/withAuth';

function SeriesPage() {
  // returns data for a single movie
  const [series, setSeries] = useState<IList | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      const series = await getSeries();
      setSeries(series);
      console.log(series);
    };
    fetchSeries();
  }, []);

  return (
    <>
      <Head>
        <title>Series</title>
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
      <HeaderCategory slug={'series'} />

      <Container hasDegrade>
        {series && (
          <>
            <Movies items={series.items} />
            <MenuCategory title="Navegue pelas categorias" />
          </>
        )}
      </Container>
    </>
  );
}

export default withAuth(SeriesPage);
