import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavName from './NavName'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { GoThreeBars } from 'react-icons/go'
import Theme from './Theme'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Navbar = ({ }) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)

    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState('Home')

    const navItems = [
        "Projects", "Skills", "About", "Contact",
    ]
    const router = useRouter()

    const handleImageClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const navigateHome = () => {
        setSelected("Home")
    }

    return (
        <div className="sticky top-0  px-2 md:px-4 h-16 flex items-center justify-between z-[100] shadow-md" style={{ background: background.secondary }}>
            <Link href="/"><div onClick={() => navigateHome()} className="left">
                <NavName />
            </div></Link>
            <div className="hidden sm:flex">
                {router.pathname === '/' && <span key={"Home"} onClick={() => { setSelected("Home"); handleImageClick("Home"); }} className={`nav w-full font-normal font-poppins cursor-pointer  ${selected === "Home" && 'border-b-[3px]'}`} style={{ color: background.textsecondary, borderColor: color, fontSize: fontSize.base }}>
                    Home
                </span>}
                {router.pathname !== '/' && <span key={"Home"} onClick={() => router.push('/')} className={`w-full font-normal font-poppins my-auto cursor-pointer`} style={{ color: background.textsecondary, borderColor: color, fontSize: fontSize.base }}>
                    Home
                </span>}

                {navItems.map((item) => (
                    <span key={item} onClick={() => { setSelected(item); handleImageClick(item); }} className={`nav w-full font-normal font-poppins cursor-pointer  ${selected === item && 'border-b-[3px]'}`} style={{ color: background.textsecondary, borderColor: color, display: router.pathname === '/' ? 'block' : 'none', fontSize: fontSize.base }}>
                        {item}
                    </span>
                ))}
{/* 
                <Link href="/testimonials" className={`nav w-full font-normal font-poppins my-auto cursor-pointer ml-6`} style={{ color: background.textsecondary, borderColor: color, fontSize: fontSize.base }}>
                    Testimonials
                </Link> */}

            </div>
            <div className="right">

                <div className='flex gap-4'>
                    {/* <SignInBtn size={fontSize.lg} hide /> */}
                    <Theme />
                    <GoThreeBars onClick={() => setToggle(!toggle)} className='text-2xl mt-1 sm:hidden cursor-pointer' style={{ color: background.textsecondary }} />
                </div>
                <div className={`fixed top-0 right-0 h-screen w-80 p-4 ${toggle ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all ease-in-out z-50`} style={{ background: color, color: color }}>
                    <div onClick={() => setToggle(!toggle)} className='h-8 w-8 rounded-full flex ml-auto items-center justify-center'>
                        <XMarkIcon className='h-8 cursor-pointer text-white ' />
                    </div>
                    <div className='w-full py-4 font-semibold flex flex-col justify-center items-center' style={{ fontSize: fontSize.xl }}>

                        {router.pathname === '/' && <button onClick={() => {
                            setSelected('Home');
                            setToggle(!toggle); handleImageClick('Home');

                        }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200 text-white hover:text-inherit`} >
                            Home
                        </button>}
                        {router.pathname !== '/' && <button onClick={() => {
                            router.push('/')
                            setToggle(!toggle);
                        }} className={`my-3 py-3 w-full rounded-xl text-white hover:bg-white hover:text-inherit`} >
                            Home
                        </button>}
                        {navItems.map((item) => (
                            <button key={item} onClick={() => { setSelected(item); setToggle(!toggle); handleImageClick(item); }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200 text-white hover:text-inherit`} style={{ display: router.pathname === '/' ? 'block' : 'none' }}>
                                {item}
                            </button>
                        ))}

                        {/* <SignInBtn size={fontSize.base} /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
