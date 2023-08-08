import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import progress from '../assets/progress.jpg';

const AddBooks = (title, author) => {
  const books = useSelector((state) => state.books);
  useDispatch(addBook(books));
  return (
    <li key={books.length} className="book-data">
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button className="delete-button" type="button">Delete</button>
      <div className="progress">
        <img src={progress} alt="progress icon" className="image" />
        25% completed 
      </div>
    </li>
  );
};

export default AddBooks;
