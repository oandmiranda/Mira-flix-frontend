import { useEffect, useState } from 'react';
import MediaImage from '../Image/MediaImage';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';
import { ContentArea, GradientArea, HeaderContainer, TextArea, Image, Overview, Tagline } from './styles';
import theme from '@src/styles/themes';
import Button from '../Button/button';
import { APIResponse, HeaderMovieDetailsProps } from '@src/types/interfaces';
import { Title } from './styles';
import NavBar from '../Navbar/NavBar';

export default function HeaderMovieDetails({ items, id }: HeaderMovieDetailsProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  // função limita "nota de avaliação do filme" (voteAverage) em até 1 caractere
  const formatVoteAverage = (voteAverage: number | undefined) => {
    return voteAverage?.toFixed(1);
  };

  // retorna o filme pelo seu id específico (que vem do router)
  const movie = items.results.find((movie) => movie.id === Number(id)) ?? null;

  // tratamento de erro caso a api não retorne os dados esperados do filme, para posteriormente exibir uma mensagem de erro ao user.
  useEffect(() => {
    if (!items.results || items.results.length === 0) {
      const errorResponse: APIResponse = {
        success: false,
        status_code: 34,
        status_message: 'The resource you requested could not be found.',
      };
      setStatusMessage(errorResponse.status_message);
    }
  }, [items]);

  if (!movie) {
    return (
      <Box
        tag="header"
        styleSheet={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
        }}
      >
        <MediaImage src={'/assets/images/erro-404.png'} alt={'página não encontrada'} width={200} height={200} />

        <Text tag="h2" styleSheet={{ color: '#fff' }}>
          {statusMessage || 'Ops!!! Parece que a API não retornou os dados esperados :('}
        </Text>
      </Box>
    );
  }

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <HeaderContainer
        backgroundImage={`${baseUrlPathImage}${movie.backdrop_path}`}
        backgroundMediaQuerie={`${baseUrlPathImage}${movie.poster_path}`}
      >
        {movie && (
          <>
            <GradientArea>
              <ContentArea>
                <Box tag="div">
                  <Image src={`${baseUrlPathImage}${movie.poster_path}`} alt={movie.name || movie.title} />
                </Box>

                <TextArea>
                  <Title>{movie.name || movie.title}</Title>
                  <Tagline>{movie.tagline}</Tagline>
                  <Overview>{movie.overview}</Overview>

                  <Box
                    tag="ul"
                    styleSheet={{
                      marginTop: '30px',
                      marginBottom: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7px',
                    }}
                  >
                    <Text
                      tag="li"
                      styleSheet={{ fontSize: theme.sizes.paragraph.mobileS }}
                    >{`Lançamento: ${movie.release_date}`}</Text>
                    <Text
                      tag="li"
                      styleSheet={{ fontSize: theme.sizes.paragraph.mobileS }}
                    >{`Duração: ${movie.runtime} minutos`}</Text>
                    <Text
                      tag="li"
                      styleSheet={{ fontSize: theme.sizes.paragraph.mobileS }}
                    >{`Avaliação: ${formatVoteAverage(movie.vote_average)}`}</Text>
                  </Box>
                  <Button href={'/error'}>Assistir</Button>
                </TextArea>
              </ContentArea>
            </GradientArea>
          </>
        )}
      </HeaderContainer>
    </Box>
  );
}
