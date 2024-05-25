import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { fetchBooks } from '../services/bookService';
import '../index.css';
function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    const fetchedBooks = await fetchBooks(searchQuery);
    setBooks(fetchedBooks);
  };

  return (
    <div className="container mx-auto">
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} query={query} />
    </div>
  );
}

export default Home;
