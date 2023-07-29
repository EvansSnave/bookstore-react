/* eslint-disable react/destructuring-assignment */

import deleteBooks from './deleteBooks';
import progress from '../assets/progress.jpg';

const RenderBooks = (prop) => (
  <ul className="book-container">
    {prop.array.map((book, index) => (
      <li key={prop.array.indexOf(book)} className="book-data">
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author}</p>
        <button className="delete-button" type="button" onClick={() => deleteBooks(index)}>Delete</button>
      </li>
    ))}
    <div className="progress">
      <img src={progress} alt="progress icon" className="image" />
      25% completed
    </div>
  </ul>
);

export default RenderBooks;
