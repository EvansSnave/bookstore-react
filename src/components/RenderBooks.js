import deleteBooks from './deleteBooks';

const RenderBooks = (prop) => (
  <ul className="book-container">
    {prop.array.map((book, index) => (
      <li key={prop.array.indexOf(book)} className="book-data">
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button className="delete-button" type="button" onClick={() => deleteBooks(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default RenderBooks;
