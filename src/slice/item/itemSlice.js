import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBeer: {},
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeItem: (state, action) => {
      state.currentBeer = action.payload;
    },
  },
});

export const { changeItem } = itemSlice.actions;

export default itemSlice.reducer;
