/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import AddNewBook from './AddBooks';
import progress from '../assets/progress.jpg';

function BookCard({
  item_id, title, author, category,
}) {
  const dispatch = useDispatch();

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
            <button type="button" onClick={() => { dispatch(removeBook(item_id)); }}>Remove</button>
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
  category: PropTypes.string.isRequired,
};

function BookList() {
  const bookList = useSelector((state) => state.booksArr.books);
  const output = bookList.map((book) => (
    <BookCard
      key={uuidv4()}
      item_id={book.item_id}
      title={book.title}
      author={book.author}
      category={book.category}
    />
  ));

  return output;
}

export default function BookCards() {
  return (
    <>
      <section className="books-container">
        <BookList />
      </section>
      <AddNewBook />
    </>
  );
}
