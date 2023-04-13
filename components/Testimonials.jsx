import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { client } from '../sanity.cli'
import Heading from './Heading'
import Testimonial from './Testimonial'
import {signIn} from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'
import TestimonialModal from './TestimonialModal'


const Testimonials = ({testimonials:allTestimonials}) => {
  const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
     
  const [testimonials , setTestimonials] = useState(allTestimonials)
  let [isOpen, setIsOpen] = useState(false)

  
  const btnclasses = 'px-4 inline-flex items-center gap-1 py-1.5 font-semibold tracking-tighter rounded-md mt-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-2'

  const user = useSelector(state => state.user)

  return (
    <div id='Testimonials' className='py-12 md:py-16' >
      <div className='flex flex-col justify-center items-center'>
        <Heading Heading="Testimonials" />
        {user ? (<button className={btnclasses} onClick={()=>setIsOpen(true)} style={{background:background.secondary, color:color,fontSize:fontSize.lg, borderColor:color}}>Add a Testimonial</button>) : (<button onClick={()=>signIn('google')} className={btnclasses} style={{background:background.secondary, color:color,fontSize:fontSize.lg, borderColor:color}}>
          <FcGoogle size={fontSize.xl}/>
          Login to Add testimonial
          </button>)
          }
      </div>
        <div className={`flex gap-6 mx-3 md:mx-10 justify-start px-3 md:px-10 scrollbar-thumb-gray-500 scrollbar-track-gray-100 py-10 scrollbar-thin overflow-x-scroll`} >
          {testimonials && testimonials.map(item=>(
            <div key={item._id}>
            <Testimonial item={item} setTestimonials={setTestimonials} testimonials={testimonials}/>
            </div>
          ))}
        </div>

        <TestimonialModal isOpen={isOpen} setIsOpen={setIsOpen} setTestimonials={setTestimonials} testimonials={testimonials}/>
    </div>
  )
}

export default Testimonials