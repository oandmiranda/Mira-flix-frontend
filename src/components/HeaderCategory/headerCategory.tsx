import Link from 'next/link';
import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import { TextArea } from '../TextArea/style';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import MovieIcon from '../Icons/Movie/movie_icon';
import { useCategoriesContext } from '@src/context/categoryContext';

export default function HeaderCategory({ slug }: { slug: string }) {
  const categories = useCategoriesContext();
  const movie = categories.find((category) => category.title === slug);
  // Verifica se o objeto foi encontrado
  if (!movie) {
    console.log('deu ruim essa porra!');
    return null;
  }

  return (
    <Box tag="header" styleSheet={{ height: '100vh', width: '100vw' }}>
      <NavBar />
      <Box tag="div" key={movie.id} styleSheet={{ height: '100vh', width: '100vw' }}>
        <img
          src={movie.srcImage}
          alt={movie.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        />
        <TextArea>
          <div>
            <Text
              tag="h1"
              styleSheet={{ fontSize: theme.sizes.title, color: theme.colors.text.hover, padding: '10px' }}
            >
              {movie.title}
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
              {`${movie.id} | ${movie.id} |`}
              <Link href="/" style={{ display: 'flex', wordSpacing: 'normal', color: theme.colors.text.logo }}>
                &nbsp;&nbsp;
                <MovieIcon fill="#02b7e3" />
                &nbsp;&nbsp;{movie.title}
              </Link>
            </Text>

            <Text tag="p" styleSheet={{ color: theme.colors.text.hover, padding: '10px', lineHeight: '27px' }}>
              {movie.title}
            </Text>
          </div>
        </TextArea>
      </Box>
    </Box>
  );
}
