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

  const deleteBooks = (event) => {
    console.log(event.currentTarget)
  }
  return (
    <ul className="books-container">
      {books.map((book) => (
        <li className="book" key={book.id}>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
          <button className="remove-button" type="button"
          onClick={event => deleteBooks(event)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Booklist;
