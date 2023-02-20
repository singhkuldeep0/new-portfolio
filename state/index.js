import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme:{
    texthead:'#049CCC',
      textwhite:'#040C0C',
      textlightsecondary:'#84CCFC',
      textdarksecondary:'#049CCC',
      textlightprimary:'#9C9C9C',
      textdarkprimary:'#545454',
      bglightprimary:'#cbeaff',
      bgdarkprimary:'#049CCC',
      bglightsecondary:'#d7d7d7',
      bgdarksecondary:'#545454',
      buttonbgprimary:'#545454',
      buttonbgseconadary:'#049CCC',
      background:'#ffffff'
  },
  mydata:[],
  myprojects:[]
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
    },
    setMyProjects:(state , action) => {
      state.myprojects = action.payload
    }
  }
})

export const { setTheme , setMyData , setMyProjects } = stateSlice.actions

export default stateSlice.reducer
