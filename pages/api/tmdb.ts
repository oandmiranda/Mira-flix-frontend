import { IList } from '@src/types/apiTypes';

/* const API_VALIDATION =
'https://api.themoviedb.org/3/discover/movie?api_key=a2d8b9dc14ca301b8afa9fc573b9ed99&language=pt-BR';
*/

export const API_KEY = 'a2d8b9dc14ca301b8afa9fc573b9ed99';
export const API_BASE = 'https://api.themoviedb.org/3';
const language_ptBR = 'language=pt-BR';

// this function does the fetch and returns a json
const basicFetch = async (endpoint: string) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  const json = await res.json();
  return json;
};

// originalNetflix page
export const getOriginaisNetflix = async (): Promise<IList> => {
  const originaisNetflixMovies = {
    id: 1,
    title: 'Originais NetFlix',
    slug: 'originais_netflix',
    items: await basicFetch(`/discover/tv?with_network=213&${language_ptBR}&api_key=${API_KEY}`),
    endpoint: 'originais_netflix',
  };

  return originaisNetflixMovies;
};

// Trending page
export const getTrendingMovies = async (): Promise<IList> => {
  const trendingMovies = {
    id: 2,
    title: 'Recomendados para você',
    slug: 'trending',
    items: await basicFetch(`/trending/all/week?${language_ptBR}&api_key=${API_KEY}`),
    endpoint: 'trending',
  };

  return trendingMovies;
};

// Em alta page
export const getEmAltaMovies = async (): Promise<IList> => {
  const emAltaMovies = {
    id: 3,
    title: 'Em alta',
    slug: 'topRated',
    items: await basicFetch(`/movie/top_rated?${language_ptBR}&api_key=${API_KEY}`),
    endpoint: 'top_rated',
  };

  return emAltaMovies;
};

export const getSeries = async (): Promise<IList> => {
  const series = {
    id: 8,
    title: 'Seriados',
    slug: 'series',
    items: await basicFetch(`/tv/popular?${language_ptBR}&api_key=${API_KEY}`),
    endpoint: 'series',
  };

  return series;
};

// object containing a function that returns a list of objects and exports by default
export default {
  getHomeList: async (): Promise<IList[]> => {
    return [
      await getOriginaisNetflix(),

      await getTrendingMovies(),

      await getEmAltaMovies(),
      {
        id: 4,
        title: 'Filmes de ação e aventura',
        slug: 'action',
        items: await basicFetch(`/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`),
        endpoint: 'category/action',
      },
      {
        id: 5,
        title: 'Filmes de comédia',
        slug: 'comedy',
        items: await basicFetch(`/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`),
        endpoint: 'category/comedy',
      },
      {
        id: 6,
        title: 'Filmes de terror',
        slug: 'horror',
        items: await basicFetch(`/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`),
        endpoint: 'category/horror',
      },
      {
        id: 7,
        title: 'Filmes românticos',
        slug: 'romance',
        items: await basicFetch(`/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`),
        endpoint: 'category/romance',
      },
      await getSeries(),
    ];
  },

  // function does the fetch and returns the datas for a single movie with the id parameter
  getMovieDetails: async (id: number) => {
    const response = await fetch(`${API_BASE}/movie/${id}?api_key=${API_KEY}&language=${language_ptBR}`);
    const singleMovieDatas = await response.json();
    return singleMovieDatas;
  },
};
