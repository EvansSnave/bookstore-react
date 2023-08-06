import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [] };

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryStatus(state) {
      state.categories = ['Under construction'];
    },
  },
});

export const { categoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
