import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { client } from '../sanity.cli'
import Heading from './Heading'
import Testimonial from './Testimonial'

const Testimonials = () => {

  const [testimonials , setTestimonials] = useState([])

  const fetchAllTestimonials = async()=>{
      const query = `*[_type == "testimonials"] | order(_createdAt desc)`
      const testimonials = await client.fetch(query)
      setTestimonials(testimonials)
   
  }


  useEffect(() => {
    fetchAllTestimonials()
  }, [])
  



  return (
    <div className='min-h-screen'>
        <Heading Heading="Testimonials" />
        <div className='flex gap-6 mx-auto max-w-4xl overflow-x-scroll py-10 px-6'>
          <Testimonial fetchAllTestimonials={fetchAllTestimonials} testimonials={testimonials} setTestimonials={setTestimonials}/>
          {testimonials.map(item=>(
            <Testimonial key={item.image} item={item} />
          ))}
        </div>
    </div>
  )
}

export default Testimonials