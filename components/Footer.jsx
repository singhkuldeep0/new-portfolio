import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationArrow, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)

    return (
        <div className='w-full flex items-end justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>


                <div className='w-full md:h-full flex flex-col md:flex-row items-center justify-center md:p-20'  style={{ background: background.primary }}>
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
    )
}

export default Footer
