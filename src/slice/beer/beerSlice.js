import { createSlice } from '@reduxjs/toolkit'
import beers from '../../assets/json/beers.json'

const initialState = {
  fullList: [...beers],
  currentPage: 1,
  beersPerPage: 12,
  lastIndex: 12,
  firstIndex: 0,
  currentList: beers.slice(0, 12),
}

const updateState = (state) => {
  state.lastIndex = state.currentPage * state.beersPerPage;
  state.firstIndex = state.lastIndex - state.beersPerPage
  state.currentList = state.fullList.slice(state.firstIndex, state.lastIndex)
}

export const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
      updateState(state);
    },
    nextPage: (state) => {
      if (state.lastIndex < state.fullList.length) {
        state.currentPage += 1;
        updateState(state);
      }
    },
    previousPage: (state) => {
      if (state.firstIndex > 0) {
        state.currentPage -= 1;
        updateState(state);
      }
    }
  },
})

export const { changePage, nextPage, previousPage } = beersSlice.actions

export default beersSlice.reducer