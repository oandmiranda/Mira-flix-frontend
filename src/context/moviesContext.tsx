import { createContext, useContext, useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  sinopse: string;
  srcImage: string;
  coverImage: string;
  releaseData: string;
}

// declara o contexto
const MoviesContext = createContext<Movie[]>([]);

// declara o que será provido pelo contexto
export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'Aquaman 2: O Reino Perdido',
        sinopse: 'filminho bom maroto perigoso',
        srcImage: '/assets/images/aquaman.jpeg',
        coverImage: '/assets/images/aquamanCover.jpg',
        releaseData: '19/11/2024',
      },
      {
        id: 2,
        title: 'Batman',
        sinopse: 'não se esqueça de envolver',
        srcImage: '/assets/images/batman.jpeg',
        coverImage: '/assets/images/batmanCover.jpg',
        releaseData: '01/11/2024',
      },
      {
        id: 3,
        title: 'Call of Duty: Black Ops III',
        sinopse: 'seus componentes com MovieProvider',
        srcImage: '/assets/images/callOfDuty.jpg',
        coverImage: '/assets/images/callOfDutyCover.jpg',
        releaseData: '28/09/2024',
      },
      {
        id: 4,
        title: 'Eu Sou a Lenda',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/euSouALenda.jpeg',
        coverImage: '/assets/images/euSouALendaCover.jpg',
        releaseData: '02/11/2024',
      },
      {
        id: 5,
        title: 'Five Nights At Freddys',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/fiveNightsAtFreddys.jpg',
        coverImage: '/assets/images/fiveNightsAtFreddysCover.jpeg',
        releaseData: '03/01/2025',
      },
      {
        id: 6,
        title: 'Frozen 2',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/frozen.jpg',
        coverImage: '/assets/images/frozenCover.jpg',
        releaseData: '21/09/2024',
      },
      {
        id: 7,
        title: 'Mama 2',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/mama2.jpg',
        coverImage: '/assets/images/mama2Cover.jpg',
        releaseData: '07/11/2024',
      },
      {
        id: 8,
        title: 'The Dark Knight',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/theDarkKnight.jpg',
        coverImage: '/assets/images/theDarkKnightCover.jpg',
        releaseData: '10/10/2024',
      },
      {
        id: 9,
        title: 'Velozes e Furiosos 9',
        sinopse: 'seu componente raiz:',
        srcImage: '/assets/images/velozesEFuriosos9.jpg',
        coverImage: '/assets/images/velozesEFuriosos9Cover.jpg',
        releaseData: '04/02/2025',
      },
    ];

    setMovies(mockMovies);
  }, []);

  return <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>;
};

// cria hook personalizado
export const useMoviesContext = () => useContext(MoviesContext);
