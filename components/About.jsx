import React from 'react'
import { useSelector } from 'react-redux'
import Heading from './Heading'
import useMediaQuery from '../hooks/MediaQuery'
import Image from 'next/image'
import { FaGithub , FaInstagram , FaFacebook , FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

    const rootbox = {
      hidden :{
          opacity:0
      },
      visible :{
          opacity:1,
          transition:{ duration: 0.5, delay:0.2 , type: "tween" }
      }
  }


  return (
    <div id="About">
    <motion.div
     variants={rootbox}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
    className='pt-10'>
      <Heading Heading="About Me" text="Education , Experience"/>
      <div className='w-full flex flex-col md:flex-row py-10'>
            <div className='w-full md:w-1/2 h-96 flex justify-center items-center' style={{background:background.primary}}>
              <div className='relative aspect-square w-60 h-60 md:w-72 md:h-72 rounded-full  before:absolute before:w-60 md:before:w-72 before:h-60 md:before:h-72 before:rounded-full before:top-0 md:before:-top-3 before:right-16 beforeborder' style={{background:color}}>
            <Image src='/profile.png' alt="" className='rounded-full' fill />
            <FaGithub className='absolute top-9 -left-4 text-2xl text-white cursor-pointer'/>
            <FaInstagram className='absolute top-20 -left-10 text-2xl text-white cursor-pointer'/>
            <FaFacebook className='absolute top-[130px] -left-10 text-2xl text-white cursor-pointer'/>
            <FaTwitter className='absolute top-[180px] -left-6 md:-left-8 text-2xl text-white cursor-pointer'/>
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
    </motion.div>
    </div>
  )
}

export default About
