import React from 'react'
import { useSelector } from 'react-redux'

const Heading = ({Heading , text}) => {
const color = useSelector(state => state.color)
const background = useSelector(state => state.background)
const fontSize = useSelector(state => state.fontSize)

  return (

    <div className='flex gap-1 flex-col justify-center items-center'>
        <span className='font-playfair font-semibold' style={{color:color , fontSize:fontSize.xxxxxxl}}>{Heading}</span>
        <span className='font-lato md:text-lg -mt-4' style={{color:background.textprimary, fontSize:fontSize.base}}>{text}</span>
    </div>
  )
}

export default Heading
