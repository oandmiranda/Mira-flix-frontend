import { useState } from 'react';
import { SearchInput } from './style';

export default function Input() {
  const [search, SetSearch] = useState('');

  return <SearchInput type="search" value={search} onChange={(e) => SetSearch(e.target.value)} />;
}
