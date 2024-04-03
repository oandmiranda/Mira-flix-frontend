import { IList } from '@src/types/apiTypes';

/* const API_VALIDATION =
'https://api.themoviedb.org/3/discover/movie?api_key=a2d8b9dc14ca301b8afa9fc573b9ed99&language=pt-BR';
*/
/*
ENDPOINST:
- originais netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- séries
*/

const API_KEY = 'a2d8b9dc14ca301b8afa9fc573b9ed99';
const API_BASE = 'https://api.themoviedb.org/3';
const language_ptBR = 'language=pt-BR';

// this function does the fetch and returns a json
const basicFetch = async (endpoint: string) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  const json = await res.json();
  return json;
};

// object containing a function that returns a list of objects and exports by default
export default {
  getHomeList: async (): Promise<IList[]> => {
    return [
      {
        id: 'originaisNetflix',
        title: 'Originais NetFlix',
        items: await basicFetch(`/discover/tv?with_network=213&${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'topRated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        id: 'series',
        title: 'Séries',
        items: await basicFetch(`/discover/movie?with_genres=99?${language_ptBR}&api_key=${API_KEY}`),
      },
    ];
  },
};
