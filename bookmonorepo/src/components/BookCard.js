import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import '../index.css';
import { useBookmarks } from '../hooks/useBookmarks';

const { Meta } = Card;

function BookCard({ book }) {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const isBookmarked = bookmarks.some(b => b.id === book.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(book.id);
    } else {
      addBookmark(book);
    }
  };

  return (
    <Card
      hoverable
      style={{ width: '100%', marginBottom: '20px' }}
      cover={<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks?.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />}
      actions={[
        <Button type="link" onClick={handleBookmark} icon={isBookmarked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />} />,
        <Link to={`/book/${book.id}`}>
          <Button type="link">View Details</Button>
        </Link>
      ]}
    >
      <Meta title={book.volumeInfo.title} description={book.volumeInfo.authors?.join(', ')} />
    </Card>
  );
}

export default BookCard;
