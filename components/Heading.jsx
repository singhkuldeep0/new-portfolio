import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import AnimatedButton from './AnimatedButton'

const Heading = ({ Heading, text, rightbtn }) => {
  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)

  return (
    <div className={`flex ${rightbtn ? 'justify-center md:justify-between' : 'justify-center'} items-center`}>
      <div />
      <div />
      <div className='flex gap-1 flex-col justify-center items-center'>
        <span className='font-playfair font-semibold' style={{ color: color, fontSize: fontSize.xxxxxxl }}>{Heading}</span>
        <span className='font-lato md:text-lg -mt-4' style={{ color: background.textprimary, fontSize: fontSize.base }}>{text}</span>
      </div>
      {rightbtn && (
        <div className='items-center justify-center mr-20'>
         <AnimatedButton text="View All Projects" link="/projects"/>
        </div>)}
    </div>

  )
}

export default Heading
