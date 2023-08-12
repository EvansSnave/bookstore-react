import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookFromList, addBookToServer } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const bookList = useSelector((state) => state.booksArr.books);

  const handleAddBook = () => {
    const newBookData = {
      item_id: 'item' + bookList.length,
      title: bookTitle,
      author,
      category: 'none',
    };

    dispatch(addBookFromList(newBookData));
    dispatch(addBookToServer(newBookData));
    setBookTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <div className="form-title-container"><h2 className="form-title">Add New Book</h2></div>
      <form className="form-add">
        <input
          type="text"
          placeholder="Book title"
          className="form-input-title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add author"
          className="form-input-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="form-submit" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}
