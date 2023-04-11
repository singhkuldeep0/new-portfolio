import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const AnimatedButton = ({link , text}) => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)
     
      const rootLink = {
        initial:{
            paddingRight:16,
        },
        hover: {
            paddingRight:32,
            transition: {
                duration:0.2,
                type: "tween",
                ease: "easeIn"
              }
        },
        rest: { 
           paddingRight:16,
           transition: {
            duration:0.3,
            type: "tween",
            ease: "easeIn"
          }
        },
          
        }

      const slashMotion = {
        initial:{x:0},
        hover: {
            x:18,
            transition: {
                duration:0.4,
                type: "tween",
                ease: "easeIn"
              }
        },
        rest: { 
            x:0,
            transition: {
                duration:0.3,
                type: "tween",
                ease: "easeIn"
              }
        },
          
        }

    

  return (
    <Link href={link}>
    <motion.div variants={rootLink} initial="initial" whileHover="hover" animate="rest"  className="relative flex w-fit px-6 py-2 items-center gap-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1.5 translate-y-1.5 group-hover:-translate-x-0 group-hover:-translate-y-0" style={{ background: color }}></span>
    <span className="absolute inset-0 w-full h-full border-2 border-black group-hover:bg-inherit" style={{ borderColor: color , background:background.secondary }}></span>
    <span className="relative" style={{ color: color, fontSize: fontSize.xl }}>{text}</span>
    <motion.div variants={slashMotion} style={{ fontSize: fontSize.xl }} className='relative'>
    <FaLocationArrow className='rotate-45' style={{color:color}}/>
    </motion.div>
  </motion.div>
  </Link>
  )

}

export default AnimatedButton