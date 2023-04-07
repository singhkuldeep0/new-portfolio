import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationArrow , FaTwitter , FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {

  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)

  const icons = [
    {
      link:'https://www.instagram.com/singh_kuldeep_0',
      icon:<AiFillInstagram style={{fontSize:fontSize.xxxxl}}/>
    },
    {
      link:'https://twitter.com/kuldeep42210099',
      icon:<FaTwitter style={{fontSize:fontSize.xxxxl}}/>
    },
    {
      link:'https://www.linkedin.com/in/kuldeep-singh-21a69024b',
      icon:<FaLinkedinIn style={{fontSize:fontSize.xxxxl}} className="p-1"/>
    },
    {
      link:'https://github.com/kuldeep345',
      icon:<BsGithub style={{fontSize:fontSize.xxxxl}}/>
    },
  ]


  return ( 
    <div id="Home" className='h-[100vh] flex flex-col md:flex-row-reverse md:justify-between items-center w-full'>
      <div className="left flex items-center justify-start pl-6 md:pl-0 md:justify-center w-full pt-12 md:pt-0 h-[50vh] md:w-2/5 md:h-[100vh] " style={{background:background.primary}}>

          <div className='relative aspect-square rounded-2xl w-60 h-60 md:w-80 md:h-80 before:rounded-2xl ml-8 before:absolute before:w-60 md:before:w-80 before:h-60 md:before:h-80 before:-top-8 before:left-8 before:border-4 before:border-inherit before:bg-inherit' style={{borderColor:color , background:background.secondary}}>
         <Image src='/profile.png' alt="" fill  className='rounded-2xl'/>

          </div>
        
      </div>
      <div className='right flex items-center justify-center w-full min-h-[45vh] pt-4 md:h-[90vh] md:w-3/5'  style={{background:background.secondary}}>

          <div className='flex flex-col gap-1 md:gap-2 pt-3' style={{color:background.textprimary}}>
          <h1 className='text-center md:text-left  pb-1 md:pb-3 font-playfair font-bold' style={{color:color , fontSize:fontSize.xxxxxxl}}>
            <span className='mr-2 font-roboto-slab' style={{color:background.textsecondary , fontSize:fontSize.base}}>Hi I&apos;m</span>
            Kuldeep Singh
            </h1>
          <p className='text-center md:text-left tracking-tighter font-poppins font-semibold px-4 md:px-0 leading-none' style={{fontSize:fontSize.lg}}>
          Self taught 
          <span className='ml-3' style={{color:color, fontSize:fontSize.xxxl}}>
            Full Stack developer      
          </span>
          </p>
          <div className="buttons flex gap-4 justify-center md:justify-start items-center mt-4">
            <Link href="/projects" className='button font-semibold inline-flex gap-2 items-center px-6 py-2 rounded-full cursor-pointer' style={{background:color , color:'white' , fontSize:fontSize.base}}>View projects <FaLocationArrow className='rotate-45'/></Link>
            <Link href="/resume.pdf" target="_blank"><button className='button font-semibold px-6 rounded-full py-1.5  border-2 cursor-pointer' style={{borderColor:background.textsecondary , color:background.textsecondary , fontSize:fontSize.base}}>Download Resume</button></Link>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-3 md:mt-20 gap-6">
            {icons.map(item=>(
              <div key={item.link} className='p-2 cursor-pointer flex items-center justify-center rounded-full hover:scale-110 duration-300 transition-all ease-in-out' style={{color:'white' , borderColor:color , background:color}}>
                <Link href={item.link} target="_blank" >{item.icon}</Link>
              </div>
                ))}
          </div>
          </div>

      </div>
    </div>
  )
}

export default Home
