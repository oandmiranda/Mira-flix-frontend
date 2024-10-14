import LupaIcon from '@src/components/Icons/Lupa/lupa_icon';
import theme from '@src/styles/themes';
import { CSSProperties, HTMLInputTypeAttribute, useState } from 'react';
import { SearchInput } from './style';
import Link from 'next/link';

interface InputProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
  styleSheet?: CSSProperties;
}

export default function Input({ placeholder, type, styleSheet }: InputProps) {
  const [search, SetSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchInput
        style={styleSheet}
        placeholder={placeholder}
        type={type}
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
      />
      <Link href={`/search?query=${encodeURIComponent(search)}`} passHref>
        <button type="submit">
          <LupaIcon fill={theme.colors.text.logo} isPositionAbsolute />
        </button>
      </Link>
    </form>
  );
}
