import React from 'react';
import SearchInput from './SearchInput';
import ErrorPanel from './ErrorPanel';

const SearchBlock = () => {
  return (
    <div>
      <SearchInput />
      <ErrorPanel />
    </div>
  )
};

export default SearchBlock;
