import { IList } from '@src/types/apiTypes';
import MediaImage from '../Image/MediaImage';
import Box from '@src/shared/Box/box';
import Text from '../Text/text';
import { ContentArea, GradientArea, HeaderContainer } from './styles';
import Footer from '../Footer/footer';
import theme from '@src/styles/themes';
import Button from '../Button/button';
import NavMenu from './NavMenu/navMenu';

export default function HeaderMovieDetails({ items, id }: IList) {
  const baseUrlPathImage = 'https://image.tmdb.org/t/p/w300';

  const formatVoteAverage = (voteAverage: number | undefined) => {
    return voteAverage?.toFixed(1);
  };

  const movie = items?.results?.find((movie) => movie.id == id) ?? null;

  if (!movie?.name || !movie?.title) {
    return (
      <Box
        tag="header"
        styleSheet={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text tag="h2" styleSheet={{ color: '#fff' }}>
          Erro: Parece que a API não retornou os dados esperados :(
        </Text>
      </Box>
    );
  }

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavMenu />
      <HeaderContainer backgroundImage={`${baseUrlPathImage}${movie?.backdrop_path}`}>
        {movie && (
          <>
            <GradientArea>
              <ContentArea>
                <Box tag="div">
                  <MediaImage
                    src={`${baseUrlPathImage}${movie?.poster_path}`}
                    alt={movie?.name || movie?.title}
                    width={300}
                    height={390}
                    styleSheet={{ borderRadius: '15px' }}
                  />
                </Box>

                <Box
                  tag="div"
                  styleSheet={{
                    marginLeft: '60px',
                    marginBottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <Text tag="h1" styleSheet={{ fontSize: theme.sizes.title }}>
                    {movie.name || movie.title}
                  </Text>
                  <Text tag="h2">{movie.tagline}</Text>
                  <Text tag="h4" styleSheet={{ fontWeight: 'normal', paddingTop: '30px' }}>
                    {movie.overview}
                  </Text>

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
                      styleSheet={{ fontSize: theme.sizes.xs }}
                    >{`Lançamento: ${movie.release_date}`}</Text>
                    <Text
                      tag="li"
                      styleSheet={{ fontSize: theme.sizes.xs }}
                    >{`Duração: ${movie.runtime} minutos`}</Text>
                    <Text
                      tag="li"
                      styleSheet={{ fontSize: theme.sizes.xs }}
                    >{`Avaliação: ${formatVoteAverage(movie.vote_average)}`}</Text>
                  </Box>
                  <Button>Assistir</Button>
                </Box>
              </ContentArea>
            </GradientArea>
          </>
        )}
      </HeaderContainer>
      <Footer />
    </Box>
  );
}
