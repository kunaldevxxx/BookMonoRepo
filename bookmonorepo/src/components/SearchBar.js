import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = (value) => {
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="p-4">
      <Search
        placeholder="Search for books..."
        enterButton="Search"
        size="large"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
