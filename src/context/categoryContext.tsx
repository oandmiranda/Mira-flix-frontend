import { CategoryContext } from '@src/types/interfaces';
import { createContext, useContext, useEffect, useState } from 'react';

const API_KEY = 'a2d8b9dc14ca301b8afa9fc573b9ed99';
const API_BASE = 'https://api.themoviedb.org/3';
const language_ptBR = 'language=pt-BR';

// declara o contexto
const CategoriesContext = createContext<CategoryContext[]>([]);

// declara o que será provido pelo contexto
export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<CategoryContext[]>([]);

  useEffect(() => {
    const mockCategories: CategoryContext[] = [
      {
        id: 1,
        title: 'Ação',
        page: '/action',
        endpoint: `${API_BASE}/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/furiosa_umaSagaMadMaxCover.jpeg',
      },
      {
        id: 2,
        title: 'Comédia',
        page: '/comedy',
        endpoint: `${API_BASE}/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/sexTape.jpg',
      },
      {
        id: 3,
        title: 'Romance',
        page: '/romance',
        endpoint: `${API_BASE}/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/shuddhDesiRomance.jpg',
      },
      {
        id: 4,
        title: 'Terror',
        page: '/horror',
        endpoint: `${API_BASE}/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/jogosMortaisCover.jpeg',
      },
      {
        id: 5,
        title: 'Séries',
        page: '/series',
        endpoint: `${API_BASE}/discover/movie?with_genres=99?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/aquaman.jpeg',
      },
    ];

    setCategory(mockCategories);
  }, []);

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

// cria hook personalizado
export const useCategoriesContext = () => useContext(CategoriesContext);
