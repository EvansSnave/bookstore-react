import Book from './bookClass';

const AddBooks = (arr) => {
  const author = document.querySelector('.author-value');
  const title = document.querySelector('.title-value');
  const newBook = new Book(title.value, author.value);
  arr.push(newBook);
};

export default AddBooks;