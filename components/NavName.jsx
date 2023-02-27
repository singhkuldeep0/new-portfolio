import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

 const textMotion = {
    rest: {
      x: 4,
      transition: {
        type: "spring",
        damping:100,
        stiffness:800,
      }
    },
    hover: {
      x: -48,
      transition: {
        type: "spring",
        damping:100,
        stiffness:800,
      }
    }
  };
  
const slashMotion = {
    rest: { 
      rotate:-360 , 
      transition: {
        type: "spring",
        damping:100,
        stiffness:800,
      }
    },
    hover: {
      rotate:360,
      transition: {
        type: "spring",
        damping:100,
        stiffness:800,
      }
    }
  };
  

const NavName = ({isTopOfPage}) => {

  const color = useSelector(state => state.color)

    return (
        <motion.div initial="rest" whileHover="hover" animate="rest"
            className='flex h-full hover:gap-1 items-center overflow-hidden w-[148px] cursor-pointer'>
            <div className='flex justify-center items-center' >
                <motion.span className='text-xl' variants={slashMotion} style={{color:color}}>©</motion.span>
            </div>
            <motion.div className='flex text-white text-xl font-Poppins overflow-hidden font-bold tracking-tighter' style={{ color:color }}>
                <motion.div className='flex' variants={textMotion}>
                    <span>Singh</span>
                    <span>Kuldeep</span>
                </motion.div>
                <motion.div className='mx-2' variants={textMotion}>
                    <span>Singh</span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default NavName
