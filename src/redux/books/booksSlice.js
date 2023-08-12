import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const urlAPI =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AZWwdB6xdu3Biv6ZvG64/books/';
export const bookAPi = createAsyncThunk('arrayBooks/getBooks', async () => {
  const res = (response) => {
    const dataFormat = Object.keys(response).map((key) => {
      return {
        item_id: key,
        ...response[key][0],
      };
    });
    return dataFormat;
  };

  const response = await axios.get(urlAPI);
  return res(response.data);
});

export const addBookToServer = createAsyncThunk('arrayBooks/addBook', async (bookData) => {
  const response = await axios.post(urlAPI, bookData);
  return response.data;
});

export const removeBookFromServer = createAsyncThunk('arrayBooks/removeBook', async (bookId) => {
  const response = await axios.delete(`${urlAPI}${bookId}`);
  return response.data;
});

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'arrayBooks',
  initialState,
  reducers: {
    addBookFromList: (state, action) => {
      const newBook = action.payload;
      state.books = state.books.concat(newBook);
    },

    removeBookFromList: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookAPi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(bookAPi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(bookAPi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { addBookFromList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
