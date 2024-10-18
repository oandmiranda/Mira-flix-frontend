import { useRouter } from 'next/router';
import { useState } from 'react';
import theme from '@src/styles/themes';
import LupaIcon from '@src/components/Icons/Lupa/lupa_icon';
import { SearchInput } from './style';
import { InputProps } from '@src/types/interfaces';
import { useBurgerMenuContext } from '@src/context/burgerMenuContext';

export default function Input({ placeholder, type, width, styleSheet }: InputProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { closeMenu } = useBurgerMenuContext();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.trim()) {
      // Verifica se o campo não está vazio
      // Redireciona para a página de resultados
      closeMenu();
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchInput
        width={width}
        style={styleSheet}
        placeholder={placeholder}
        type={type}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" style={{ border: 'none', position: 'relative' }}>
        <LupaIcon fill={theme.colors.text.logo} isPositionAbsolute />
      </button>
    </form>
  );
}
