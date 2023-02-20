import React from 'react'
import { useSelector } from 'react-redux'
import { FaLocationArrow, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

    const theme = useSelector(state => state.theme)

    return (
        <div className='w-full h-screen flex items-end justify-center'>

            <div className='relative flex items-center justify-center w-full h-[400px]' style={{ background: theme.bgdarkprimary }}>

                <div className='w-[70%] h-[160px] absolute -top-24 shadow-xl left-[15%] rounded-2xl' style={{ background: theme.bglightsecondary }}>
                    <div className='flex h-full  items-center justify-center'>
                        <div className='w-1/2 h-full flex items-center justify-center'>
                            <span className='text-4xl text-bold font-openSans' style={{ color: theme.bgdarkprimary }}>Ready to get Started?</span>
                        </div>
                        <div className='w-1/2 flex h-full items-center justify-center'>
                            <button className='font-medium inline-flex gap-2 items-center text-base px-6 py-2 rounded-full shadow-md  font-poppins cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' style={{ background: theme.bgdarkprimary, color: theme.bglightsecondary }}>Sign up</button>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full flex items-center justify-between md:p-20'>
                    <div className='flex h-full flex-col gap-4 items-start justify-center w-1/2'>
                        <span className='text-2xl text-bold font-Merriweather' style={{ color: theme.bgdarksecondary }}>SINGHKULDEEP</span>
                        <button className='font-semibold font-lato text-xl px-16 py-1.5 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out shadow-md' style={{ background: theme.bglightsecondary, color: theme.bgdarkprimary }}>Contact</button>
                    </div>
                    <div className='flex h-full items-center justify-around gap-10 w-1/2'>
                        <div className='flex h-full justify-center items-center'>
                            <div className='h-[80%] w-[2px]' style={{ background: theme.bgdarksecondary }}></div>
                            <div className='flex flex-col px-6 gap-6 font-openSans' style={{ color: theme.bgdarksecondary }}>
                                <span className='font-semibold cursor-pointer'>Home</span>
                                <span className='font-semibold cursor-pointer'>About</span>
                                <span className='font-semibold cursor-pointer'>Projects</span>
                                <span className='font-semibold cursor-pointer'>Contact</span>
                            </div>
                        </div>


                        <div className='flex h-full justify-center items-center'>
                            <div className='h-[80%] w-[2px]' style={{ background: theme.bgdarksecondary }}></div>
                            <div className='flex flex-col px-6 gap-6 font-openSans' style={{ color: theme.bgdarksecondary }}>
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
