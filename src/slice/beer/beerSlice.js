import { createSlice } from "@reduxjs/toolkit";
import beers from "../../assets/json/beers.json";

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
};

const updateState = (state) => {
  state.lastIndex = state.currentPage * state.beersPerPage;
  state.firstIndex = state.lastIndex - state.beersPerPage;
  state.currentList = state.fullList.slice(state.firstIndex, state.lastIndex);
};

const filterList = async (state) => {
  let newList = [...beers];

  if (state.onSaleFilter) {
    newList = newList.filter((beer) => beer.on_sale === true);
  }
  if (state.priceFilter) {
    newList = newList.filter(
      (beer) =>
        parseFloat(beer.price) <= state.priceFilter.max &&
        parseFloat(beer.price) >= state.priceFilter.min
    );
  }
  if (state.typeFilter) {
    newList = newList.filter((beer) => beer.type === state.typeFilter);
  }

  state.fullList = newList;
  state.currentPage = 1;
  updateState(state);
};

export const beersSlice = createSlice({
  name: "beers",
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
      state.onSaleFilter = !state.onSaleFilter;
      filterList(state);
    },
    priceFilter: (state, action) => {
      state.priceFilter = action.payload;
      filterList(state);
    },
    typeFilter: (state, action) => {
      state.typeFilter =
        action.payload === "Senza filtro" ? null : action.payload;
      filterList(state);
    },
  },
});

export const {
  changePage,
  nextPage,
  previousPage,
  saleFilter,
  priceFilter,
  typeFilter,
} = beersSlice.actions;

export default beersSlice.reducer;
