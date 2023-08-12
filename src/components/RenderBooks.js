import PropTypes from 'prop-types';
import {
  removeBookFromServer,
  removeBookFromList,
  getBooksFromServer,
} from '../redux/books/booksSlice';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import AddNewBook from './AddBooks';
import progress from '../assets/progress.jpg';

function BookCard({
  item_id, title, author, category= 'none', handleRemoveBook,
}) {
  return (
    <article className="book-card">
      <div className="book-card__details">
        <div className="book">
          <h4 className="book__category text-style-9">{category}</h4>
          <h2 className="book__name text-style-5">{title}</h2>
          <h3 className="book__author text-style-8">{author}</h3>
        </div>
        <ul className="comments-section">
          <li className="comments-container">
            <p>Comments</p>
          </li>
          <li className="remove-container">
            <button type="button" onClick={() => handleRemoveBook(item_id)}>Remove</button>
          </li>
          <li className="action__item">
            <p>Edit</p>
          </li>
        </ul>
      </div>
      <div className="book-card__progress">
        <div className="progress-porcentage__graphic">
          <img className="image" src={progress} alt="progress bar" />
          <div>
            <p className="progress-porcentage__porcentage text-style-10">25%</p>
            <p className="text-style-2">Completed</p>
          </div>
        </div>
      </div>
      <div className="book-card__progress">
        <h2 className="current-progress">Current Chapter</h2>
        <p className="progress__current-chapter text-style-4">1</p>
        <button type="button" className="progress__update-button text-style-11">
          Update Progress
        </button>
      </div>
    </article>
  );
}

BookCard.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default function BookCards() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookshelf.books);
  const allBooks = Object.values(bookList);

  const handleRemoveBook = (item_id) => {
    dispatch(removeBookFromList(item_id));
    dispatch(removeBookFromServer(item_id));
  };

  useEffect(() => {
    dispatch(getBooksFromServer());
  }, [dispatch]);

  return (
    <section id="book-cards">
      {allBooks.map((book) => (
        <BookCard
          key={book.item_id}
          item_id={book.item_id}
          title={book.title}
          author={book.author}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
      <AddNewBook></AddNewBook>
    </section>
  );
}
