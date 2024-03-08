import { createContext, useContext, useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  sinopse: string;
  srcImage: string;
  releaseData: string;
}

const MoviesContext = createContext<Movie[]>([]);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'Filme1',
        sinopse: 'filminho bom maroto perigoso',
        srcImage: '@src/assets/images/image1.png',
        releaseData: '19/11/2025',
      },
      {
        id: 2,
        title: 'Filme2',
        sinopse: 'não se esqueça de envolver',
        srcImage: '@src/assets/images/image1.png',
        releaseData: '19/11/2025',
      },
      {
        id: 3,
        title: 'Filme3',
        sinopse: 'seus componentes com MovieProvider',
        srcImage: '@src/assets/images/image1.png',
        releaseData: '19/11/2025',
      },
      {
        id: 4,
        title: 'Filme4',
        sinopse: 'seu componente raiz:',
        srcImage: '@src/assets/images/image1.png',
        releaseData: '19/11/2025',
      },
    ];

    setMovies(mockMovies);
  }, []);

  return <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>;
};

// cria hook personalizado
export const useMoviesContext = () => useContext(MoviesContext);
