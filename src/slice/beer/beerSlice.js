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

export const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { changePage, decrement, incrementByAmount } = beersSlice.actions

export default beersSlice.reducer