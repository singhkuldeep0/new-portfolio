import React from 'react'
import { useSelector } from 'react-redux'

const Heading = ({Heading , text}) => {
const theme = useSelector(state => state.theme)

  return (

    <div className='mt-8 mb-4 flex flex-col justify-center items-center'>
        <h1 className='font-playfair font-semibold text-4xl md:text-5xl xl:text-6xl' style={{color:theme.texthead}}>{Heading}</h1>
        <span className='font-lato text-sm md:text-lg -mt-0.5 xl:mt-1' style={{color:theme.textlight}}>{text}</span>
    </div>
  )
}

export default Heading
