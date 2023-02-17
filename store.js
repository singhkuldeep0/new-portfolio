import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './state/index'

export const store = configureStore({
  reducer:stateReducer ,
})