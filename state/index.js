import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme:{
    navhead:"#142CAC",
    navText:"#fc246c",
    nav:'#F40463',
    webbg:'#142CAC',
    lighttext:'#ffffff',
    darktext:'#fc246c',
  }
}

export const stateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTheme: (state ,action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = stateSlice.actions

export default stateSlice.reducer