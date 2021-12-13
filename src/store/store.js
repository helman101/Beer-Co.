import { configureStore } from '@reduxjs/toolkit'
import beersReducer from '../slice/beer/beerSlice'

export default configureStore({
  reducer: {
    beers: beersReducer,
  },
})