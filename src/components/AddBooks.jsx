import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookFromList, addBookToServer } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const [titleBooks, settitleBooks] = useState('');
  const [author, setAuthor] = useState('');
  const booksArr = useSelector((state) => state.arrayBooks.books);

  const addBook = () => {
    const dataForBook = {
      item_id: 'i' + bookList.length + '-' + Date.now(),
      title: titleBooks,
      author,
      category: 'unknown',
    };

    dispatch(addBookFromList(dataForBook));
    dispatch(addBookToServer(dataForBook));
    settitleBooks('');
    setAuthor('');
  };

  return (
    <div id="add-book">
      <h2 className="text-style-12">Add New Book</h2>
      <form id="add-book__form">
        <input
          type="text"
          placeholder="Book title"
          id="add-book__input-book-title"
          className="text-style-13"
          value={titleBooks}
          onChange={(e) => settitleBooks(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Author"
          id="add-book__input-author"
          className="text-style-13"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        ></input>
        <button
          type="button"
          id="add-book__button"
          className="text-style-1"
          onClick={addBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
