import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios'
import {FaQuoteLeft} from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import { setTestimonials } from '../state'
import { toast } from 'react-hot-toast'

const Testimonial = ({ item}) => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)

  const test = useSelector(state => state.testimonials)
  const session = useSession()
  const allTests = test.slice()
  const dispatch = useDispatch()

  const deleteTestimonial = async()=>{
    await axios.delete(`/api/test/${item.id}`).then((result)=>{
      const testimonials = allTests.filter(test => test.id !== item.id)
      dispatch(setTestimonials(testimonials))
      toast.success(result.data.message)
    })
  }

  return session ? (
    
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

            <Image src={item.imageUrl} width={90} height={90} className='rounded-full mx-auto'/>
            <p className='tracking-widest font-semibold py-4 text-white'>{item.name}</p>
    

            <div className='min-h-[140px] relative z-10 rounded-3xl p-6 flex flex-col gap-4'
            style={{ boxShadow: `${background.textprimary} 0px 5px 15px` , fontSize:fontSize.base , background:background.primary , color:background.textsecondary}}
            >
              <FaQuoteLeft style={{color , fontSize:fontSize.xxxl}} className='mx-auto'/>

            <p className='break-words'>
           {item.description}
            </p>
         {session.data && session.data.user.id == item.userId && <button onClick={deleteTestimonial} className='absolute top-0 right-0 bg-red-600 p-1 rounded-tr-lg rounded-bl-lg'>
          <MdDeleteForever style={{fontSize:fontSize.xxl}} className='text-white cursor-pointer'/>
          </button>}
            </div>
        </motion.div>
  ) : null
}

export default Testimonial