import React from 'react'
import { useSelector } from 'react-redux'
import Heading from './Heading'
import { MapPinIcon , PhoneIcon , EnvelopeIcon } from '@heroicons/react/24/solid'


const Contact = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)

  return (
    <div id="Contact" className='pb-32 md:pb-10 pt-10'>
    <div>
        <Heading Heading="Contact" text="Get in touch"/>
        <div className='flex flex-col w-full md:flex-row mt-6 py-12' style={{color:background.textsecondary , background:background.primary}}>        
            <div className='w-3/12 hidden md:block' >
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
            <div className='w-[90%] md:w-8/12  pl-8 pb-10 md:px-8 shadow-lg m-auto rounded-2xl' style={{background:background.secondary ,color:background.textsecondary }}>
                <h1 className='text-center text-3xl font-lato my-3'>Get in touch</h1>
                <div className='grid grid-cols-2 gap-4 md:gap-8 mt-2'>
                    <input className='contactinput' type="text" placeholder='Name' style={{borderColor:background.neutral}}/>
                    <input className='contactinput' type="text" placeholder='Email' style={{borderColor:background.neutral}}/>
                    <input className='contactinput' type="text" placeholder='Phone' style={{borderColor:background.neutral}}/>
                </div>
                <textarea type="text" placeholder='Write your message' style={{borderColor:background.primary}} className="mt-12 h-32 w-[96%]"/>
                <button className='mt-10 font-semibold text-base px-6 py-2 tracking-wider border-2 cursor-pointer' style={{background:color , color:'white'}}>SEND MESSAGE</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
