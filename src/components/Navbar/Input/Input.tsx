import { useState } from 'react';
import { SearchInput } from './style';

export default function Input({ placeholder, type }) {
  const [search, SetSearch] = useState('');

  return (
    <SearchInput
      placeholder={placeholder}
      type={type}
      value={search}
      onChange={(e) => SetSearch(e.target.value)}
    />
  );
}
