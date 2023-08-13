import AddNewBook from './AddBooks';
import BookCards from './RenderBooks';
import './css/Books.css';

export default function Books() {
  return (
    <section id="books">
      <BookCards />
      <span className="x-line"></span>
      <AddNewBook />
    </section>
  );
}
