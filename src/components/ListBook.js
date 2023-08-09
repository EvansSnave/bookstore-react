/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Booklist = () => {
  const [books, setBooks] = useState([
    {
      title: 'Books',
      author: 'Kevin',
      id: uuidv4(),
    },
    {
      title: 'Boo',
      author: 'Ke',
      id: uuidv4(),
    },
  ]);
  return (
    <ul className="books-container">
      {books.map((book) => (
        <li className="book" key={book.id}>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default Booklist;
