import { createContext, useContext, useEffect, useState } from 'react';

const API_KEY = 'a2d8b9dc14ca301b8afa9fc573b9ed99';
const API_BASE = 'https://api.themoviedb.org/3';
const language_ptBR = 'language=pt-BR';

interface Category {
  id: number;
  name: string;
  endpoint: string;
}

// declara o contexto
const CategoriesContext = createContext<Category[]>([]);

// declara o que será provido pelo contexto
export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const mockCategories: Category[] = [
      {
        id: 1,
        name: 'Ação',
        endpoint: `${API_BASE}/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`,
      },
      {
        id: 2,
        name: 'Comédia',
        endpoint: `${API_BASE}/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`,
      },
      {
        id: 3,
        name: 'Romance',
        endpoint: `${API_BASE}/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`,
      },
      {
        id: 4,
        name: 'Terror',
        endpoint: `${API_BASE}/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`,
      },
      {
        id: 5,
        name: 'Documentários',
        endpoint: `${API_BASE}/discover/movie?with_genres=99?${language_ptBR}&api_key=${API_KEY}`,
      },
    ];

    setCategory(mockCategories);
  }, []);

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

// cria hook personalizado
export const useCategoriesContext = () => useContext(CategoriesContext);
