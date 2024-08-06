import { useEffect, useState } from 'react';
import { SearchInput } from './style';
import { API_BASE, API_KEY } from 'pages/api/tmdb';

export default function Input() {
  const [text, setText] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    if (text) {
      const fetchMovies = async () => {
        try {
          const encodedText = encodeURIComponent(text);
          const url = await fetch(`${API_BASE}/search/movie?query=${encodedText}&api_key=${API_KEY}`);
          const data = await url.json();
          console.log('aqui', data);
          setSearchedMovies(data);
        } catch (error) {
          console.error('Error fetching movies:', error); // Adicione tratamento de erro
        }
      };

      fetchMovies();
    } else {
      setSearchedMovies([]); // Limpa a lista de filmes quando o input está vazio
    }
  }, [text]);

  return <SearchInput type="text" value={text} onChange={(e) => setText(e.target.value)} />;
}
