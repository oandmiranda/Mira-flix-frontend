import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { MovieType } from '@src/context/moviesContext';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import theme from '@src/styles/themes';
import MovieIcon from '../Icons/Movie/movie_icon';
import Carousel from '@src/components/Carousel/carousel';
import TextArea from '../TextArea/textArea';
import { Container, Image, Sinopse, Title, Button, StyledDatas } from './style';
import { CategoryType } from '@src/types/interfaces';

interface HeaderProps {
  data: (MovieType | CategoryType)[];
  height?: string;
  hasCarousel?: boolean;
}

export default function Header({ data, height, hasCarousel }: HeaderProps) {
  // const mockMoviesCover = useMoviesContext();

  // Função que verifica se o item é do tipo MovieType
  const isMovieType = (item: MovieType | CategoryType): item is MovieType => {
    return (item as MovieType).releaseData !== undefined && (item as MovieType).duration !== undefined;
  };

  return (
    <Container height={height}>
      <NavBar />

      {hasCarousel && isMovieType(data[0]) && (
        <Carousel loop={true} autoplay={{ delay: 6000, disableOnInteraction: false }}>
          {data.map((item) => {
            if (isMovieType(item)) {
              return (
                <SwiperSlide key={item.id}>
                  <Container>
                    <Image src={item.srcImage} alt={item.title} />
                    <TextArea>
                      <Box tag="div">
                        <Button>EM ALTA</Button>
                        <Title>{item.title}</Title>

                        <StyledDatas>
                          {`${item.releaseData} | ${item.duration} |`}
                          <Link
                            href="/"
                            style={{ display: 'flex', wordSpacing: 'normal', color: theme.colors.text.logo }}
                          >
                            &nbsp;&nbsp;
                            <MovieIcon fill="#02b7e3" />
                            &nbsp;&nbsp;{item.category}
                          </Link>
                        </StyledDatas>

                        <Sinopse>{item.sinopse}</Sinopse>
                        <Link href={item.movieId}>
                          <Button cursor="pointer" backgroundTransparent>
                            Ver mais
                          </Button>
                        </Link>
                      </Box>
                    </TextArea>
                  </Container>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Carousel>
      )}

      {data.map((item) => {
        if (!isMovieType(item)) {
          return (
            <Box tag="div" key={item.id} styleSheet={{ height: '100vh', width: '100vw' }}>
              <img
                src={item.srcImage}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundSize: 'cover',
                }}
              />
              <TextArea>
                <div>
                  <Title>{item.name}</Title>
                  <Sinopse>{item.description}</Sinopse>
                </div>
              </TextArea>
            </Box>
          );
        }
        return null;
      })}
    </Container>
  );
}
