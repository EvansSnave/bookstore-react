import RenderBooks from './RenderBooks';
import AddBooks from './AddBooks';
import Book from './bookClass';

const Booklist = () => {
  const book = new Book('Title', 'Kevin');
  const books = [];
  books.push(book);
  return (
    <div>
      <RenderBooks array={books} />
      <form>
        <h1 className="add-book">Add book</h1>
        <div className="form-input">
          <input placeholder="Book title" className="title-value" />
          <input placeholder="Author" className="author-value" />
          <button className="add-button" type="button" onClick={() => AddBooks(books)}>Add book</button>
        </div>
      </form>
    </div>
  );
};

export default Booklist;
