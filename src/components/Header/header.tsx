import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { useMoviesContext } from '@src/context/moviesContext';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import theme from '@src/styles/themes';
import MovieIcon from '../Icons/Movie/movie_icon';
import HeaderCarousel from '@src/components/HeaderCarousel/headerCarousel';
import TextArea from '../TextArea/textArea';
import { Container, Image, Sinopse, Title, Button, StyledDatas } from './style';

export default function Header({ height }: { height?: string }) {
  const movies = useMoviesContext();

  return (
    <Container height={height}>
      <NavBar />
      <HeaderCarousel loop={true} autoplay={{ delay: 6000, disableOnInteraction: false }}>
        {movies &&
          movies.map((movie) => (
            // SwiperSlide is a Swiper component (lib)
            <SwiperSlide key={movie.id}>
              <Container>
                <Image src={movie.srcImage} alt={movie.title} />
                <TextArea>
                  <Box tag="div">
                    <Button>EM ALTA</Button>
                    <Title>{movie.title}</Title>

                    <StyledDatas>
                      {`${movie.releaseData} | ${movie.duration} |`}
                      <Link
                        href="/"
                        style={{ display: 'flex', wordSpacing: 'normal', color: theme.colors.text.logo }}
                      >
                        &nbsp;&nbsp;
                        <MovieIcon fill="#02b7e3" />
                        &nbsp;&nbsp;{movie.category}
                      </Link>
                    </StyledDatas>

                    <Sinopse>{movie.sinopse}</Sinopse>
                  </Box>
                </TextArea>
              </Container>
            </SwiperSlide>
          ))}
      </HeaderCarousel>
    </Container>
  );
}
