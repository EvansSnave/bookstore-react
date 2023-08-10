import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    booksArr: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
