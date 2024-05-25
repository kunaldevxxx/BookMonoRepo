import { useState, useEffect } from 'react';

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  const addBookmark = (book) => {
    const updatedBookmarks = [...bookmarks, book];
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const removeBookmark = (bookId) => {
    const updatedBookmarks = bookmarks.filter(book => book.id !== bookId);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return { bookmarks, addBookmark, removeBookmark };
};

export { useBookmarks };
