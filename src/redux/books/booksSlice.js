import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const APIlink =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AZWwdB6xdu3Biv6ZvG64/books/';
export const getBooksFromServer = createAsyncThunk('arrayBooks/getBooks', async () => {
  const formatApiResponse = (response) => {
    const dataReturned = Object.keys(response).map((key) => {
      return {
        item_id: key,
        ...response[key][0],
      };
    });
    return dataReturned;
  };

  const response = await axios.get(APIlink);
  return formatApiResponse(response.data);
});

export const addBookToServer = createAsyncThunk('arrayBooks/addBook', async (bookData) => {
  const response = await axios.post(APIlink, bookData);
  return response.data;
});

export const removeBookFromServer = createAsyncThunk('arrayBooks/removeBook', async (bookId) => {
  const response = await axios.delete(`${APIlink}${bookId}`);
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
      .addCase(getBooksFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksFromServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooksFromServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { addBookFromList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
