const API_KEY = 'a2d8b9dc14ca301b8afa9fc573b9ed99';
const API_BASE = 'https://api.themoviedb.org/3';
const language_ptBR = 'language=pt-BR';

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
        - documentários
*/

const basicFetch = async (endpoint: string) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  const json = await res.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originaisNetflix',
        title: 'Originais NetFlix',
        items: await basicFetch(`/discover/tv?with_network=213&${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'topRated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749?${language_ptBR}&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(`/discover/movie?with_genres=99?${language_ptBR}&api_key=${API_KEY}`),
      },
    ];
  },
};
