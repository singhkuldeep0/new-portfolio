import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fontSize:{
    xs:'12px',
    sm:'14px',
    base:'16px',
    lg:'18px',
    xl:'20px',
    xxl:'24px',
    xxxl:'30px',
    xxxxl:'36px',
    xxxxxl:'48px',
    xxxxxxl:'60px',
  },
  color:'#1d9bf0',
  background:{
    secondary:'#000000',
    primary:'#636363',
    bgneutral:'#ffffff',
    textprimary:'#cecece',
    textsecondary:'#ffffff',
    neutral:'#a9a9a9'
  },
  mode:'default',
  mydata:[],
  myprojects:[]
}

export const stateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setColor: (state , action) => {
      state.color = action.payload
    },
    setMode: (state , action) => {
      state.mode = action.payload
    },
    setFontSize: (state , action) => {
      state.fontSize = action.payload
    },
    setBackground: (state , action) => {
      state.background = action.payload
    },
    setMyData:(state , action) => {
      state.mydata = action.payload
    },
    setMyProjects:(state , action) => {
      state.myprojects = action.payload
    }
  }
})

export const { setColor, setMode , setMyData , setMyProjects , setBackground , setFontSize} = stateSlice.actions

export default stateSlice.reducer
