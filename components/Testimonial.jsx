import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { BsFillTrashFill } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { client } from '../sanity.cli'
import toast from 'react-hot-toast'
import axios from 'axios'

const Testimonial = ({ item, testimonials, setTestimonials }) => {

  console.log(item.id)
  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)
  const { data } = useSession()

  const deleteTestimonial = async () => {

    if (!data) {
      return;
    }

    if (data.user.id !== item.userId) {
      toast.error('Invalid User')
    }
    
    try {
      
    await axios.delete(`/api/test/${item.id}`).then((result)=>{
      console.log(result)
      const filteredTestimonial = testimonials.filter((test)=>test.id !== item.id)
      setTestimonials(filteredTestimonial)
      toast.success("Testimonial successfully deleted")
    })
    
  } catch (error) {
    toast.error('something went wrong! please reload and try again')   
  }
  }

  return (
    < >
      {item && (
        <motion.div
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 3000,
            damping: 500
          }}
          className="h-auto rounded-lg min-h-[300px] relative"
          
          style={{ boxShadow: `${background.textprimary} 0px 5px 15px` }}
        >
          <div
            className="block overflow-hidden rounded-lg w-64 min-h-[260px]  h-full bg-white shadow-lg" style={{ background: background.secondary }}>
            <div className={`h-20  rounded-t-lg`} style={{ background: color }}></div>

            <div
              className="relative flex items-center justify-center mx-auto -mt-12 h-24 w-24 overflow-hidden rounded-full border-2 bg-gray-100 cursor-pointer">
              <Image src={item.imageUrl} fill className='object-cover' alt='' />
            </div>

            <div className="px-6 pb-4 pt-2 flex flex-col gap-2" style={{ background: background.secondary, color: background.textsecondary }}>

              <h4 className="mb-1 text-2xl text-center font-semibold">{item.name}</h4>
              <hr />
              <p className='mt-1'>

                {item.description}
              </p>
              {data && data.user.id === item.userId && <button onClick={deleteTestimonial} className='absolute bottom-0 right-0 p-2 bg-red-600 rounded-tl-lg rounded-br-lg'>

                <BsFillTrashFill className='text-xl text-white' />

              </button>}
            </div>
          </div>
        </motion.div>
      )
      }

    </>
  )
}

export default Testimonial