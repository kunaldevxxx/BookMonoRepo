import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../services/bookService';
import { Image, Typography } from 'antd';
import '../index.css';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      const bookDetails = await fetchBookDetails(id);
      setBook(bookDetails);
    };
    getBookDetails();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-4">
      <Image
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          width={'100%'}
          height={256}
          style={{ width: '100%', height: '100%',  objectFit: 'contain' }}
        />
        <h3 className="text-xl font-bold">{book.volumeInfo.title}</h3>
        <p className="text-gray-600">{book.volumeInfo.authors?.join(', ')}</p>
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
      </div>
    </div>
  );
}

export default BookDetails;
