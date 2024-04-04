import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import { TextArea } from '../TextArea/style';
import Text from '../Text/text';
import theme from '@src/styles/themes';
import { useCategoriesContext } from '@src/context/categoryContext';

export default function HeaderCategory({ slug }: { slug: string | string[] | undefined }) {
  const categories = useCategoriesContext();
  const movie = categories.find((category) => category.title === slug);
  // Verifica se o objeto foi encontrado
  if (!movie) {
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
              {movie.name}
            </Text>

            <Text
              styleSheet={{
                display: 'flex',
                padding: '10px',
                width: '100%',
                fontWeight: 'normal',
                wordSpacing: '2px',
                fontSize: theme.sizes.subtitle,
              }}
            >
              {movie.description}
            </Text>
          </div>
        </TextArea>
      </Box>
    </Box>
  );
}
