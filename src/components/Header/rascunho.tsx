import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import { TextArea } from '../TextArea/style';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import MovieIcon from '../Icons/Movie/movie_icon';
import Button from '../Button/button';
import HeaderCarousel from '@src/components/HeaderCarousel/headerCarousel';
import { BaseContext } from '@src/context/moviesContext'; // Importando o tipo BaseContext

interface HeaderProps<T extends BaseContext> {
  useContext: T[];
  showCarousel: boolean;
}

export default function Header<T extends BaseContext>({ useContext, showCarousel }: HeaderProps<T>) {
  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      {showCarousel ? (
        <HeaderCarousel loop={true} autoplay={{ delay: 6000, disableOnInteraction: false }}>
          {useContext &&
            useContext.map((item) => (
              <SwiperSlide key={item.id}>
                <Box tag="div" styleSheet={{ width: '100vw', height: '100vh' }}>
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
                      <Button
                        styleSheet={{
                          padding: '7px',
                          border: '1px solid',
                          borderRadius: '20px',
                          backgroundColor: theme.colors.background.blue,
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '0.7rem',
                        }}
                      >
                        NOVO
                      </Button>
                      <Text
                        tag="h1"
                        styleSheet={{
                          fontSize: theme.sizes.title,
                          color: theme.colors.text.hover,
                          padding: '10px',
                        }}
                      >
                        {item.title}
                      </Text>

                      <Text
                        styleSheet={{
                          display: 'flex',
                          padding: '10px',
                          width: '100%',
                          wordSpacing: '10px',
                          fontWeight: '600',
                        }}
                      >
                        {`${item.releaseData} | ${item.duration} |`}
                        <Link
                          href="/"
                          style={{ display: 'flex', wordSpacing: 'normal', color: theme.colors.text.logo }}
                        >
                          &nbsp;&nbsp;
                          <MovieIcon fill="#02b7e3" />
                          &nbsp;&nbsp;{item.category}
                        </Link>
                      </Text>

                      <Text
                        tag="p"
                        styleSheet={{ color: theme.colors.text.hover, padding: '10px', lineHeight: '27px' }}
                      >
                        {item.sinopse}
                      </Text>
                    </div>
                  </TextArea>
                </Box>
              </SwiperSlide>
            ))}
        </HeaderCarousel>
      ) : (
        useContext &&
        useContext.map((item, key) => (
          <Box tag="div" key={key} styleSheet={{ width: '100vw', height: '100vh' }}>
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
                <Button
                  styleSheet={{
                    padding: '7px',
                    border: '1px solid',
                    borderRadius: '20px',
                    backgroundColor: theme.colors.background.blue,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '0.7rem',
                  }}
                >
                  NOVO
                </Button>
                <Text
                  tag="h1"
                  styleSheet={{ fontSize: theme.sizes.title, color: theme.colors.text.hover, padding: '10px' }}
                >
                  {item.title}
                </Text>

                <Text
                  styleSheet={{
                    display: 'flex',
                    padding: '10px',
                    width: '100%',
                    wordSpacing: '10px',
                    fontWeight: '600',
                  }}
                >
                  {`${item.releaseData} | ${item.duration} |`}
                  <Link href="/" style={{ display: 'flex', wordSpacing: 'normal', color: theme.colors.text.logo }}>
                    &nbsp;&nbsp;
                    <MovieIcon fill="#02b7e3" />
                    &nbsp;&nbsp;{item.category}
                  </Link>
                </Text>

                <Text tag="p" styleSheet={{ color: theme.colors.text.hover, padding: '10px', lineHeight: '27px' }}>
                  {item.sinopse}
                </Text>
              </div>
            </TextArea>
          </Box>
        ))
      )}
    </Box>
  );
}
