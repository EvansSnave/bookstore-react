import deleteBooks from './deleteBooks';

const RenderBooks = () => {
  const books = [
    {
      title: 'Kevin',
      author: 'Evans',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <li key={books.indexOf(book)}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button className="delete-button" type="button" onClick={deleteBooks}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default RenderBooks;
