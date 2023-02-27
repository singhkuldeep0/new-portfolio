import React from 'react'
import { useSelector } from 'react-redux'

const Heading = ({Heading , text}) => {
const color = useSelector(state => state.color)
const background = useSelector(state => state.background)
const fontSize = useSelector(state => state.fontSize)

  return (

    <div className='pt-8 flex flex-col justify-center items-center'>
        <h1 className='font-playfair font-semibold' style={{color:color , fontSize:fontSize.xxxxxxl}}>{Heading}</h1>
        <span className='font-lato md:text-lg -mt-0.5 xl:mt-1' style={{color:background.textprimary, fontSize:fontSize.sm}}>{text}</span>
    </div>
  )
}

export default Heading
