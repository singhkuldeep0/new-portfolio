import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme:{
    texthead:'#049CCC',
    textwhite:'#0C74BC',
    textlight:'#818081',
    textdark:'#040404',
    bgdark:'#bababa',
    bglight:'#DEE4E6',
    buttoncolor:'#DEE4E6',
    buttonbg:'#444444',
    background:'#ffffff'
  },
  mydata:{}
}

export const stateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTheme: (state , action) => {
      state.theme = action.payload
    },
    setMyData:(state , action) => {
      state.mydata = action.payload
    }
  }
})

export const { setTheme , setMyData } = stateSlice.actions

export default stateSlice.reducer
