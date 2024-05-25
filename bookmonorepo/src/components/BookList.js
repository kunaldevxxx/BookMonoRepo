import React from 'react';
import BookCard from './BookCard';
import { useInView } from 'react-intersection-observer';
import '../index.css';
function BookList({ books, query }) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map((book, index) => (
        <BookCard key={book.id} book={book} />
      ))}
      {books.length > 0 && (
        <div ref={ref} className="col-span-full">
          {inView && <p>Loading more results...</p>}
        </div>
      )}
    </div>
  );
}

export default BookList;
