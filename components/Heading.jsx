import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Heading = ({ Heading, text, rightbtn }) => {
  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)

  return (
    <div className={`flex ${rightbtn ? 'justify-between' : 'justify-center'} items-center`}>
      <div />
      <div />
      <div className='flex gap-1 flex-col justify-center items-center'>
        <span className='font-playfair font-semibold' style={{ color: color, fontSize: fontSize.xxxxxxl }}>{Heading}</span>
        <span className='font-lato md:text-lg -mt-4' style={{ color: background.textprimary, fontSize: fontSize.base }}>{text}</span>
      </div>
      {rightbtn && (
        <div className='items-center justify-center mr-20 lg:mr-44 hidden md:flex gap-4'>
          <MdOutlineArrowRightAlt style={{ fontSize: fontSize.xxxxxxl, color }} />
          <Link href="/projects">
            <button className='w-fit inline-flex items-center justify-center gap-3 rounded-md px-8  py-1 border-2 font-semibold text-white hover:scale-105 duration-300 ease-in-out' style={{ fontSize: fontSize.xxl, background: color }}>
            View All Projects
          </button>
          </Link>
        </div>)}
    </div>

  )
}

export default Heading
