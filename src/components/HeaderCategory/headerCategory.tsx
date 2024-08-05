import Box from '@src/shared/Box/box';
import NavBar from '@src/components/Navbar/NavBar';
import { useCategoriesContext } from '@src/context/categoryContext';
import TextArea from '../TextArea/textArea';
import { Container, Sinopse, Title } from '../Header/style';

export default function HeaderCategory({ slug }: { slug: string | string[] | undefined }) {
  const categories = useCategoriesContext();
  const movie = categories.find((category) => category.title === slug);
  // Verifica se o objeto foi encontrado
  if (!movie) {
    return null;
  }

  return (
    <Container>
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
            <Title>{movie.name}</Title>
            <Sinopse>{movie.description}</Sinopse>
          </div>
        </TextArea>
      </Box>
    </Container>
  );
}
