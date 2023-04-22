import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Testimonial from '../components/Testimonial'
import { setTestimonials } from '../state'
import Modal from '../components/Modal/Modal'
import TestButtons from '../components/TestButtons'
import axios from 'axios'



const testimonials = ({testimonials}) => {
  
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)
  const testimon = useSelector(state => state.testimonials)

  const dispatch = useDispatch()

  useEffect(() => {
    if(testimonials){
      dispatch(setTestimonials(testimonials))
    }
  }, [testimonials])
  


  return (
    <div className='min-h-screen p-4 md:p-10' style={{ background: background.secondary, color: background.textsecondary }}>
      <Modal/>
     <TestButtons /> 
      <div className='w-[90%] mx-auto flex justify-center flex-wrap gap-x-12 gap-y-14'>
     {testimon.length === 0 ? (<div>
        <h1 className='font-semibold' style={{fontSize:fontSize.xl}}>No Testimonial added yet! Be the first one to upload it</h1>
     </div>) : (testimon.map((item)=>(
       <Testimonial key={item.id} item={item}/>
       )) )
    }
 
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const {data} = await axios.get(`${process.env.NEXTAUTH_URL}/api/testimonials`)

  return {
    props: {
      testimonials:data
    },
  }
}

export default testimonials