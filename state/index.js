import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fontSize:{
    xs:'10px',
    sm:'12px',
    base:'14px',
    lg:'16px',
    xl:'18px',
    xxl:'20px',
    xxxl:'26px',
    xxxxl:'32px',
    xxxxxl:'42px',
    xxxxxxl:'48px',
  },
  color:'#1d9bf0',
  background:{
    secondary: '#ffffff',
    primary: '#d0d0d0',
    bgneutral: '#dcdcdc',
    textprimary: '#4a4a4a',
    textsecondary: '#000000',
    neutral: '#e0e0e0'
  },
  mode:'default',
  mydata:[],
  myprojects:[],
  technologies:[]
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
    },
    setTechnologies:(state , action) => {
      state.technologies = action.payload
    },
  }
})

export const { setColor, setMode , setMyData , setMyProjects , setBackground , setFontSize , setTechnologies} = stateSlice.actions

export default stateSlice.reducer
