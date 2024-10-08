import { useState } from 'react';
import { SearchInput } from './style';

export default function Input({ placeholder, type, styleSheet }) {
  const [search, SetSearch] = useState('');

  return (
    <SearchInput
      style={styleSheet}
      placeholder={placeholder}
      type={type}
      value={search}
      onChange={(e) => SetSearch(e.target.value)}
    />
  );
}
