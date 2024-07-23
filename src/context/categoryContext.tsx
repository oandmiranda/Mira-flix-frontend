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
        title: 'action',
        name: 'Ação',
        endpoint: `${API_BASE}/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/furiosa_umaSagaMadMaxCover.jpeg',
        description:
          'Prepare-se para explosões épicas e perseguições de tirar o fôlego. Ação garantida do início ao fim em diversos clássicos dos cinemas.',
      },
      {
        id: 2,
        title: 'comedy',
        name: 'Comédia',
        endpoint: `${API_BASE}/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/sexTape.jpg',
        description:
          'Rir é o melhor remédio! Mergulhe em um mundo de situações hilárias, personagens excêntricos e piadas que vão te fazer gargalhar até doer a barriga. Prepare-se para uma dose extra de leveza e descontração.',
      },
      {
        id: 3,
        title: 'romance',
        name: 'Romance',
        endpoint: `${API_BASE}/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/shuddhDesiRomance.jpg',
        description:
          'O amor está no ar! Vivencie histórias emocionantes sobre encontros amorosos, paixões arrebatadoras e superação de obstáculos. Prepare-se para se apaixonar, chorar e sorrir ao lado de personagens cativantes em busca do seu final feliz.',
      },
      {
        id: 4,
        title: 'horror',
        name: 'Terror',
        endpoint: `${API_BASE}/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`,
        srcImage: '/assets/images/jogosMortaisCover.jpeg',
        description:
          'Criaturas horripilantes e eventos paranormais te colocarão à prova. Gritos, sustos e adrenalina te esperam nessa jornada arrepiante pelo lado obscuro da realidade.',
      },
      {
        id: 5,
        title: 'series',
        name: 'Séries',
        endpoint: '',
        srcImage: '/assets/images/greysAnatomy.jpeg',
        description:
          'Descubra mundos fascinantes e histórias cativantes. De dramas emocionantes a comédias hilárias, cada episódio é uma jornada envolvente repleta de personagens inesquecíveis e tramas surpreendentes. Prepare-se para se apaixonar e maratonar suas novas séries favoritas.',
      },
      {
        id: 6,
        title: 'trending',
        name: 'Recomendados para você',
        endpoint: '',
        srcImage: '/assets/images/simpsonsCover.jpg',
        description:
          'Descubra uma seleção especial de filmes que combinam com seu estilo e interesses. Escolhemos títulos que acreditamos que você vai adorar baseados nas novidades mais empolgantes. Prepare-se para uma experiência cinematográfica feita sob medida, com histórias envolventes e personagens inesquecíveis.',
      },
    ];

    setCategory(mockCategories);
  }, []);

  return <CategoriesContext.Provider value={category}>{children}</CategoriesContext.Provider>;
};

// cria hook personalizado
export const useCategoriesContext = () => useContext(CategoriesContext);
