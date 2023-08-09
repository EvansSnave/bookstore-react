import Addbooks from './AddBooks';

const Form = () => (
  <form className="form-books">
    <p className="form-title">Add new book</p>
    <input className="title-input" placeholder="Book title" />
    <input className="author-input" placeholder="Author" />
    <button
      className="submit-book"
      type="button"
      onClick={() => {

      }}
    >
      Add book
    </button>
  </form>
);
