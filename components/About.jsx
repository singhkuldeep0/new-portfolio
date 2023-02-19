import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import Heading from './Heading'

const About = () => {

    const theme = useSelector(state => state.theme)

  return (
    <Fade className='mt-20 mb-10'>
      <Heading Heading="About Me" text="Education , Experience"/>
      <div className='w-full flex mt-10'>
            <div className='w-1/2 h-96' style={{background:theme.buttoncolor}}>
                
            </div>
            <div className='w-1/2 h-96 flex justify-center items-center' style={{background:theme.bglight , color:theme.textdark}}>
                <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-Merriweather font-semibold'>Education</h1>
                <span className='text-xl font-semibold'>Langara College</span>
                <span className='text-lg font-semibold'>PDD: WMDD(Developer) May 2023 - Present</span>
                <div className='h-1 w-full my-2' style={{background:theme.textdark}}/>
                <h1 className='text-4xl font-Merriweather font-semibold'>Experience</h1>
                <ul className='flex flex-col gap-1 pl-3 text-lg font-semibold'>
                    <ul>Frontend Development</ul>
                    <ul>User Expereince Design</ul>
                    <ul>Backend Development</ul>
                </ul>
                </div>
            </div>
      </div>
    </Fade>
  )
}

export default About
