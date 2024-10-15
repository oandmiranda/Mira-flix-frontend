import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from '@src/styles/themes';
import LupaIcon from '@src/components/Icons/Lupa/lupa_icon';
import { SearchInput } from './style';
import { InputProps } from '@src/types/interfaces';

export default function Input({ placeholder, type, styleSheet }: InputProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      // Verifica se o campo não está vazio
      // Redireciona para a página de resultados
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchInput
        style={styleSheet}
        placeholder={placeholder}
        type={type}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" style={{ border: 'none' }}>
        <LupaIcon fill={theme.colors.text.logo} isPositionAbsolute />
      </button>
    </form>
  );
}
