import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { MdDeleteForever } from 'react-icons/md'
import toast from 'react-hot-toast'
import axios from 'axios'
import {FaQuoteLeft} from 'react-icons/fa'

const Testimonial = () => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)
  const user = useSelector(state => state.user)
  // style={{ boxShadow: `${background.textprimary} 0px 5px 15px` }}

  return (
    
        <motion.div
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 3000,
            damping: 500
          }}
          className="w-[220px] text-center h-auto pt-4 rounded-3xl min-h-[300px]"
          style={{background:color , fontSize:fontSize.xl}}
        >

            <Image src='/logo.jpg' width={90} height={90} className='rounded-full mx-auto'/>
            <p className='tracking-widest font-semibold py-4 text-white'>KULDEEP SINGH</p>
    

            <div className='min-h-[140px] relative z-10 rounded-3xl p-6 flex flex-col gap-4'
            style={{ boxShadow: `${background.textprimary} 0px 5px 15px` , fontSize:fontSize.base , background:background.primary , color:background.textsecondary}}
            >
              <FaQuoteLeft style={{color , fontSize:fontSize.xxxl}} className='mx-auto'/>

            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page
            It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
          <div className='absolute top-0 right-0 bg-red-600 p-1 rounded-tr-lg rounded-bl-lg'>
          <MdDeleteForever style={{fontSize:fontSize.xxl}} className='text-white cursor-pointer'/>
          </div>
            </div>
        </motion.div>
  )
}

export default Testimonial