import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import Heading from './Heading'
import useMediaQuery from '../hooks/MediaQuery'

const About = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

  return (
    <div id="About">
    <Fade className='pt-10'>
      <Heading Heading="About Me" text="Education , Experience"/>
      <div className='w-full flex flex-col md:flex-row '>
            <div className='w-full md:w-1/2 h-96 flex justify-center items-center' style={{background:background.primary}}>
              <div className='aspect-square rounded-full overflow-hidden h-[70%]'>
            <img src='/profile.png' alt="" className='z-[1] object-fill' style={{background:color}}/>
              </div>
            </div>
            <div className='w-full md:w-1/2 min-h-96 py-3 px-3 flex justify-center items-center' style={{background:background.secondary , color:background.textsecondary}}>
                <div className='flex flex-col gap-3'>
                <h1 className='font-Merriweather font-semibold' style={{fontSize:fontSize.xxxxl}}>Education</h1>
                <span className='font-semibold' style={{fontSize:fontSize.xl}}>Langara College</span>
                <span className='font-semibold' style={{fontSize:fontSize.lg}}>PDD: WMDD(Developer) May 2023 - Present</span>
                <div className='h-1 w-full my-2' style={{background:background.textsecondary}}/>
                <h1 className='font-Merriweather font-semibold' style={{fontSize:fontSize.xxxxl}}>Experience</h1>
                <ul className='flex flex-col gap-1 pl-3 font-semibold' style={{fontSize:fontSize.lg}}>
                    <ul>Frontend Development</ul>
                    <ul>User Expereince Design</ul>
                    <ul>Backend Development</ul>
                </ul>
                </div>
            </div>
      </div>
    </Fade>
    </div>
  )
}

export default About
