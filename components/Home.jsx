import React from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'
import { FaLocationArrow , FaTwitter , FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { Zoom } from 'react-awesome-reveal'

const Home = () => {

  const mydata = useSelector(state => state.mydata[0])
  const theme = useSelector(state => state.theme)

  if(!mydata){
    return ''
  }

  return ( 
    <div className='[90vh] flex flex-col md:flex-row-reverse md:justify-between items-center w-full'>
      <div className="left flex items-center justify-center w-full h-[45vh] md:w-1/2 md:h-[90vh] " style={{background:theme.bgdark}}>

          <Zoom className='aspect-square overflow-hidden rounded-full'>
        {mydata.image && <img src={urlFor(mydata.image).url()} alt="" className='h-[250px] w-[200px] lg:w-[300px] lg:h-[400px] z-[1]' style={{background:theme.bglight}}/>}
          </Zoom>
        
      </div>
      <div className='right flex items-center justify-center w-full h-[45vh]  md:h-[90vh] md:w-1/2'  style={{background:theme.bglight}}>
        {mydata && (
          <div className='flex flex-col gap-1 md:gap-2 pt-3' style={{color:theme.textlight}}>
          <h1 className='text-center md:text-left text-4xl lg:text-6xl pb-1 md:pb-3 text-white font-playfair font-bold' style={{color:theme.texthead}}>
            <span className='text-base mr-2 font-roboto-slab' style={{color:theme.textlight}}>Hi I'm</span>
            {mydata.name}
            </h1>
          <p className='text-center md:text-left text-lg tracking-tighter font-poppins font-semibold px-12 md:px-0 leading-none'>
          Self taught 
          <span style={{color:theme.texthead}}>
          <Typewriter
            words={[' designer', ' full-stack developer']}
            loop
            cursorColor={theme.texthead}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
          </p>
          <div className="buttons flex gap-4 justify-center md:justify-start items-center mt-4">
            <button className='font-semibold inline-flex gap-2 items-center text-base px-6 py-2 rounded-full cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>Contact Me <FaLocationArrow className='text-base rotate-45'/></button>
            <button className='font-semibold text-base px-6 rounded-full py-1.5  border-2 cursor-pointer' style={{borderColor:theme.buttonbg , color:theme.buttonbg}}>Download Cv</button>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-3 md:mt-20 gap-4">
              <div className='h-11 w-11 border-2 flex items-center justify-center rounded-full cursor-pointer' style={{color:theme.buttonbg , borderColor:theme.buttonbg }}>
                <AiFillInstagram className='text-3xl'/>
              </div>
              <div className='h-11 w-11 border-2 flex items-center justify-center rounded-full cursor-pointer' style={{color:theme.buttonbg , borderColor:theme.buttonbg }}>
                <FaTwitter className='text-2xl'/>
              </div>
              <div className='h-11 w-11 border-2 flex items-center justify-center rounded-full cursor-pointer' style={{color:theme.buttonbg , borderColor:theme.buttonbg }}>
                <FaFacebookF className='text-2xl'/>
              </div>
              <div className='h-11 w-11 border-2 flex items-center justify-center rounded-full cursor-pointer' style={{color:theme.buttonbg , borderColor:theme.buttonbg }}>
                <BsGithub className='text-2xl'/>
              </div>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
