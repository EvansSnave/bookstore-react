import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import BookCards from './components/RenderBooks';
import AddNewBook from './components/AddBooks';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Bookstore</h1>
        <ul className="links">
          <li className="links-books"><Link to="/">Books</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
        </ul>
      </nav>
      <AddNewBook />

      <Routes>
        <Route path="/" element={<BookCards />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
