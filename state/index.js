import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
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
  myprojects:[],
  technologies:[],
  type:'login',
  modal:false
}

export const stateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state , action) => {
      state.user = action.payload
    },
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
    setMyProjects:(state , action) => {
      state.myprojects = action.payload
    },
    setTechnologies:(state , action) => {
      state.technologies = action.payload
    },
    setType:(state,action) => {
      state.type = action.payload
    },
    setModal:(state,action) => {
      state.modal = action.payload
    }
  }
})

export const {setUser , setColor, setMode , setMyProjects , setBackground , setFontSize , setTechnologies, setModal, setType} = stateSlice.actions

export default stateSlice.reducer
