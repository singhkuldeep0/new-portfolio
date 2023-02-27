import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationArrow, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)

    return (
        <div className='w-full md:min-h-screen flex items-end justify-center'>

            <div className='relative flex min-h-[50vh] items-center justify-center w-full h-[400px]' style={{ background: background.primary }}>

                <div className='w-[80%] md:w-[70%] h-[120px] md:h-[160px] absolute -top-16 md:-top-24 shadow-xl left-[10%] md:left-[15%] rounded-2xl' style={{ background: background.neutral }}>
                    <div className='flex h-full  items-center justify-center'>
                        <div className='w-4/6 h-full flex items-center justify-center'>
                            <span className='text-2xl md:text-4xl text-center text-bold font-openSans' style={{ color: background.textsecondary }}>Ready to get Started?</span>
                        </div>
                        <div className='w-2/6 flex h-full items-center justify-center'>
                            <button className='font-medium inline-flex gap-2 items-center text-base px-6 py-2 rounded-full shadow-md  font-poppins cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' style={{ background:color, color: 'white' }}>Sign up</button>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[80%] md:h-full flex flex-col md:flex-row items-center justify-center md:p-20'>
                    <div className='flex h-full flex-col gap-4 items-start justify-center w-1/2'>
                        <span className='text-3xl text-bold font-Merriweather' style={{ color:color }}>SINGHKULDEEP</span>
                        <button className='font-semibold font-lato text-xl px-16 py-1.5 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out shadow-md border-2' style={{ borderColor:background.textsecondary, color:background.textsecondary }}>Contact</button>
                    </div>
                    <div className='flex h-full items-center justify-around gap-10 w-1/2 pl-10 md:pl-0'>
                        <div className='flex h-full justify-center items-center'>
                            <div className='h-[100%] md:h-[80%] w-[2px]' style={{ background:background.textsecondary }}></div>
                            <div className='flex flex-col px-6 gap-6 font-openSans' style={{ color: background.textsecondary }}>
                                <span className='font-semibold cursor-pointer'>Home</span>
                                <span className='font-semibold cursor-pointer'>About</span>
                                <span className='font-semibold cursor-pointer'>Projects</span>
                                <span className='font-semibold cursor-pointer'>Contact</span>
                            </div>
                        </div>


                        <div className='flex h-full justify-center items-center'>
                            <div className='h-[100%] md:h-[80%]  w-[2px]' style={{ background:background.textsecondary  }}></div>
                            <div className='flex flex-col px-6 gap-6 font-openSans' style={{ color: color }}>
                                <AiFillInstagram className='text-3xl cursor-pointer' />
                                <FaTwitter className='text-2xl cursor-pointer' />
                                <FaFacebookF className='text-2xl cursor-pointer' />
                                <BsGithub className='text-2xl cursor-pointer' />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
