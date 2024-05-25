import React from 'react';
import BookCard from '../components/BookCard';
import { useBookmarks } from '../hooks/useBookmarks';
import { Typography } from 'antd';

const { Title } = Typography;

function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <div className="container mx-auto p-4">
      <Title level={2}>Bookmarked Books</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {bookmarks.length > 0 ? (
          bookmarks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No bookmarks yet.</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
