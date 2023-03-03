import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationArrow , FaTwitter , FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { FaReact , FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs , SiJavascript , SiTypescript , SiTailwindcss , SiRedux , SiMongodb } from 'react-icons/si'
import Image from 'next/image'

const Home = () => {

  const mydata = useSelector(state => state.mydata)
  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)

  if(!mydata){
    return ''
  }

  return ( 
    <div id="Home" className='[100vh] flex flex-col md:flex-row-reverse md:justify-between items-center w-full pt-10 sm:pt-0'>
      <div className="left flex items-center justify-center w-full h-[55vh] md:w-2/5 md:h-[90vh] " style={{background:background.primary}}>

          <div className='relative aspect-square w-60 h-60 md:w-80 md:h-80 rounded-full  before:absolute before:w-60 md:before:w-80 before:h-60 md:before:h-80 before:-top-12 before:left-14 beforeborder before:rounded-2xl' style={{background:color}}>
         <Image src='/profile.png' alt="" fill className='rounded-2xl'/>
         <FaReact className='text-2xl md:text-3xl absolute -top-10 left-16 md:left-20 text-white'/>
         <SiNextdotjs className='text-2xl md:text-3xl absolute -top-10 left-[107px] md:left-[140px] text-white'/>
         <SiJavascript className='text-2xl md:text-3xl absolute -top-10 left-[156px] md:left-[200px] rounded-md text-white'/>
         <SiTypescript className='text-2xl md:text-3xl absolute -top-10 left-[210px] md:left-[265px] rounded-md text-white'/>
         <FaNodeJs className='text-2xl md:text-3xl absolute -top-10 left-[260px] md:left-[330px] text-white'/>
         <SiTailwindcss className='text-3xl md:text-4xl absolute top-0 md:top-1 -right-12 text-white'/>
         <SiRedux className='text-2xl md:text-3xl absolute top-10 md:top-14 -right-12 text-white'/>
         <SiMongodb className='text-3xl md:text-4xl absolute top-20 md:top-28 -right-12 text-white'/>
          </div>
        
      </div>
      <div className='right flex items-center justify-center w-full min-h-[45vh] pt-4 md:h-[90vh] md:w-3/5'  style={{background:background.secondary}}>
        {mydata && (
          <div className='flex flex-col gap-1 md:gap-2 pt-3' style={{color:background.textprimary}}>
          <h1 className='text-center md:text-left  pb-1 md:pb-3 font-playfair font-bold' style={{color:color , fontSize:fontSize.xxxxxxl}}>
            <span className='mr-2 font-roboto-slab' style={{color:background.textsecondary , fontSize:fontSize.base}}>Hi I'm</span>
            {mydata.name}
            </h1>
          <p className='text-center md:text-left tracking-tighter font-poppins font-semibold px-12 md:px-0 leading-none' style={{fontSize:fontSize.lg}}>
          Self taught 
          <span style={{color:color}}>
          <Typewriter
            words={[' designer', ' full-stack developer']}
            loop
            cursorColor={color}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
          </p>
          <div className="buttons flex gap-4 justify-center md:justify-start items-center mt-4">
            <button className='button font-semibold inline-flex gap-2 items-center px-6 py-2 rounded-full cursor-pointer' style={{background:color , color:'white' , fontSize:fontSize.base}}>Contact Me <FaLocationArrow className='rotate-45'/></button>
            <button className='button font-semibold px-6 rounded-full py-1.5  border-2 cursor-pointer' style={{borderColor:background.textsecondary , color:background.textsecondary , fontSize:fontSize.base}}>Download Cv</button>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-3 md:mt-20 gap-4">
              <div className='p-2 border-2 flex items-center justify-center rounded-full button' style={{color:color , borderColor:color }}>
                <AiFillInstagram style={{fontSize:fontSize.xxxl}}/>
              </div>
              <div className='p-2 border-2 flex items-center justify-center rounded-full button' style={{color:color , borderColor:color }}>
                <FaTwitter style={{fontSize:fontSize.xxxl}}/>
              </div>
              <div className='p-2 border-2 flex items-center justify-center rounded-full button' style={{color:color , borderColor:color }}>
                <FaFacebookF style={{fontSize:fontSize.xxxl}}/>
              </div>
              <div className='p-2 border-2 flex items-center justify-center rounded-full button' style={{color:color , borderColor:color }}>
                <BsGithub style={{fontSize:fontSize.xxxl}}/>
              </div>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
