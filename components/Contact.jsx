import React from 'react'
import { useSelector } from 'react-redux'
import Heading from './Heading'
import { MapPinIcon , PhoneIcon , EnvelopeIcon } from '@heroicons/react/24/solid'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {

    const theme = useSelector(state => state.theme)

  return (
    <div id="Contact" className='mb-20'>
    <Fade style={{color:theme.textlight}}>
        <Heading Heading="Contact" text="Get in touch"/>
        <div className='flex flex-col w-full md:flex-row'>        
            <div className='w-3/12 h-[90vh] text-white' style={{background:theme.texthead}}>
            <h1 className='text-center text-xl font-lato font-semibold my-6'>Contact Information</h1>
            <img src="logo.jpg" className='h-20 rounded-full mx-auto my-8'/>
            <div className="flex flex-col gap-4">
                <div className='gap-3 flex items-center justify-center'>
                    <MapPinIcon className='h-6'/>
                    <span className='text-lg font-semibold'>Tapa , Punjab</span>
                </div>
                <div className='gap-3 flex items-center justify-center'>
                    <PhoneIcon className='h-6'/>
                    <span className='text-lg font-semibold'>+91 9914759117</span>
                </div>
                <div className='gap-3 flex items-center justify-center'>
                    <EnvelopeIcon className='h-6'/>
                    <span className='text-lg font-semibold'>singhkuldeep7850@gmail.com</span>
                </div>
            </div>  
            </div>
            <div className='w-9/12 h-[90vh] px-8' style={{background:'white'}}>
                <h1 className='text-center text-3xl font-lato my-6'>Get in touch</h1>
                <div className='grid grid-cols-2 gap-8 md:gap-12 mt-4'>
                    <input type="text" placeholder='Name' style={{borderColor:theme.bgdark}}/>
                    <input type="text" placeholder='Email' style={{borderColor:theme.bgdark}}/>
                    <input type="text" placeholder='Phone' style={{borderColor:theme.bgdark}}/>
                </div>
                <textarea type="text" placeholder='Write your message' style={{borderColor:theme.bgdark}} className="mt-12 h-32 w-[96%]"/>
                <button className='mt-10 font-semibold text-base px-6 py-2 tracking-wider border-2 cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>SEND MESSAGE</button>
            </div>
        </div>
    </Fade>
    </div>
  )
}

export default Contact
