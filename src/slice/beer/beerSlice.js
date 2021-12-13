import { createSlice } from '@reduxjs/toolkit'
import beers from '../../assets/json/beers.json'

const initialState = {
  fullList: [...beers],
  currentPage: 1,
  beersPerPage: 12,
  lastIndex: 12,
  firstIndex: 0,
  currentList: beers.slice(0, 12),
  onSaleFilter: false,
  priceFilter: null,
  typeFilter: null,
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
    },
    saleFilter: (state) => {
      if (state.onSaleFilter) {
        state.onSaleFilter = false
        state.fullList = [...beers]
        state.currentPage = 1;
        updateState(state)
      } else {
        state.onSaleFilter = true;
        state.fullList = [...beers].filter((beer) => beer.on_sale)
        state.currentPage = 1;
        updateState(state)
      }
    },
    priceFilter: (state, action) => {
      if (action.payload === null) {
        state.fullList = [...beers]
        state.priceFilter = null
      } else if (state.typeFilter) {
        state.fullList = [...beers].filter((beer) => ((parseFloat(beer.price) <= action.payload.max && parseFloat(beer.price) >= action.payload.min) && beer.type === state.typeFilter))
        state.priceFilter = action.payload
      } else {
        state.fullList = [...beers].filter((beer) => (parseFloat(beer.price) <= action.payload.max && parseFloat(beer.price) >= action.payload.min))
        state.priceFilter = action.payload
      }
      state.currentPage = 1
      updateState(state)
    },
    typeFilter: (state, action) => {
      if (action.payload === 'Senza filtro') {
        state.fullList = [...beers];
        state.typeFilter = null;
      } else if (state.priceFilter) {
        state.fullList = state.fullList.filter((beer) => beer.type === action.payload);
        state.typeFilter = action.payload;
      } else {
        state.fullList = [...beers].filter((beer) => beer.type === action.payload);
        state.typeFilter = action.payload;
      }
      state.currentPage = 1
      updateState(state)
    }
  },
})

export const { changePage, nextPage, previousPage, saleFilter, priceFilter, typeFilter } = beersSlice.actions

export default beersSlice.reducer