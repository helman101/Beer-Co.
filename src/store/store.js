import { configureStore } from '@reduxjs/toolkit'
import beersReducer from '../slice/beer/beerSlice'
import itemReduce from '../slice/item/itemSlice'

export default configureStore({
  reducer: {
    beers: beersReducer,
    item: itemReduce,
  },
})