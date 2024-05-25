import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query, startIndex = 0, maxResults = 10) => {
  const response = await axios.get(`${API_URL}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
  return response.data.items;
};

export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
