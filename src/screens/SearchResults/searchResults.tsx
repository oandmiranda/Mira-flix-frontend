import { useRouter } from 'next/router';
import Container from '@src/components/Container/container';
import Footer from '@src/components/Footer/footer';
import Header from '@src/components/Header/header';
import MenuCategory from '@src/components/MenuCategory/menuCategory';
import MovieCarousel from '@src/components/MovieCarousel/movieCarousel';
import Text from '@src/components/Text/text';
import withAuth from '@src/hook/withAuth';
import Box from '@src/shared/Box/box';
import theme from '@src/styles/themes';
import Head from 'next/head';
import { API_KEY } from 'pages/api/tmdb';
import { useEffect, useState } from 'react';
import { Items } from '@src/types/apiTypes';

function SearchResults() {
  const router = useRouter();
  const { query } = router.query; // Obtem o termo da busca da URL
  const [results, setResults] = useState<Items>({ results: [] });
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        const searchQuery = typeof query === 'string' ? query : query.toString();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          setResults(data);

          if (data.results.length === 0) {
            setError('Nenhum resultado encontrado para a sua busca 😕 Tente novamente com outra palavra-chave.');
          } else {
            setError('');
          }
        } catch (error) {
          console.error('Erro na busca:', error);
        }
      };

      fetchMovies();
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>MiraFlix | Assista online</title>
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

      <Header height="80vh" />
      <Container hasDegrade>
        <MovieCarousel items={results} />
        {error && (
          <Box tag="div" styleSheet={{ display: 'flex', justifyContent: 'center' }}>
            <Text
              tag="h4"
              styleSheet={{
                position: 'absolute',
                top: '530px',
                zIndex: '1',
                padding: '20px',
                margin: '0 10px',
                color: '#ffffffe4',
                background: theme.colors.background.error,
                borderRadius: '20px',
              }}
            >
              {error}
            </Text>
          </Box>
        )}
        <MenuCategory title="Procurando uma categoria?" paddingTop="65px" />
      </Container>
      <Footer />
    </>
  );
}

export default withAuth(SearchResults);
