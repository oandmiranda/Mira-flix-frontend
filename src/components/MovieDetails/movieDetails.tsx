import { useEffect, useState } from 'react';
import { APIResponse, MovieDetailsProps } from '@src/types/interfaces';
import { getStarRating } from '@src/utils/ratingUtils';
import { formatDate } from '@src/utils/formatDate';
import { roundNumber } from '@src/utils/roundNumber';
import { formatMovieDuration } from '@src/utils/formatMovieDuration';
import theme from '@src/styles/themes';
import Box from '@src/shared/Box/box';
import MediaImage from '../Image/MediaImage';
import Text from '../Text/text';
import NavBar from '../Navbar/NavBar';
import StarRating from '../Icons/Star/star_reting';
import { ContentArea, GradientArea, HeaderContainer, TextArea, Image, Overview, Title } from './styles';

export default function MovieDetails({ items, id }: MovieDetailsProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

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
                <Box tag="div" styleSheet={{ position: 'relative' }}>
                  <Image src={`${baseUrlPathImage}${movie.poster_path}`} alt={movie.name || movie.title} />
                </Box>

                <TextArea>
                  <Title>{movie.name || movie.title}</Title>

                  <Box
                    tag="ul"
                    styleSheet={{
                      marginTop: '30px',
                      marginBottom: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <Text
                      tag="li"
                      styleSheet={{
                        fontSize: theme.sizes.paragraph.mobileL,
                        color: theme.colors.background.button,
                      }}
                    >{`Duração: ${formatMovieDuration(movie.runtime)}`}</Text>
                    <Text
                      tag="li"
                      styleSheet={{
                        fontSize: theme.sizes.paragraph.mobileL,
                        color: theme.colors.background.button,
                      }}
                    >{`Lançamento: ${formatDate(movie.release_date)}`}</Text>
                    <Text
                      tag="p"
                      styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'center',
                        gap: '5px',
                        color: theme.colors.background.button,
                      }}
                    >
                      {roundNumber(movie.vote_average)}
                      <StarRating rating={getStarRating(movie.vote_average)}></StarRating>
                    </Text>
                    <Overview>{movie.overview}</Overview>
                  </Box>
                </TextArea>
              </ContentArea>
            </GradientArea>
          </>
        )}
      </HeaderContainer>
    </Box>
  );
}
