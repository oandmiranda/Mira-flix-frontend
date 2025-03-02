import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { CategoryType, MovieType } from '@src/types/interfaces';
import { useCategoriesContext } from '@src/context/categoryContext';
import theme from '@src/styles/themes';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import Carousel from '@src/components/Carousel/carousel';
import TextArea from '../TextArea/textArea';
import MovieIcon from '../Icons/Movie/movie_icon';
import { Container, Image, Sinopse, Title, Button, StyledDatas } from './style';

interface HeaderProps {
  data?: (MovieType | CategoryType)[];
  height?: string;
  slugCategory?: string | undefined;
}

export default function Header({ data, height, slugCategory }: HeaderProps) {
  const categories = useCategoriesContext();

  // Verify if it's MovieType
  const isMovieType = (item: MovieType | CategoryType): item is MovieType => {
    return (item as MovieType).releaseData !== undefined && (item as MovieType).duration !== undefined;
  };

  const getCategoryData = (slugCategory: string | undefined) => {
    const category = categories.find((cat) => cat.title === slugCategory);
    return category ? [category] : [];
  };

  // Data to be rendered
  let renderData: (MovieType | CategoryType)[] = [];

  if (slugCategory) {
    renderData = getCategoryData(slugCategory);
  } else if (data) {
    renderData = data;
  }

  return (
    <Container height={height}>
      <NavBar />

      {data && (
        <Carousel loop autoplay={{ delay: 6000, disableOnInteraction: false }}>
          {data.map((item) =>
            isMovieType(item) ? (
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
            ) : null,
          )}
        </Carousel>
      )}

      {/* Rendering to CategoryType or slugCategory */}
      {renderData.map((item) =>
        !isMovieType(item) ? (
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
        ) : null,
      )}
    </Container>
  );
}
