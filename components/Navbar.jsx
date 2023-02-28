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
    const fontSize  = useSelector(state => state.fontSize)

    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState('Home')

    const navItems = [
        "Projects" , "Skills", "About", "Contact"
    ]
    const router = useRouter()

    const handleImageClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const navigateHome = () => {
        setSelected("Home")
    }

    return (
        <div className="sticky top-0  px-4 h-16 flex items-center justify-between z-[100] shadow-md" style={{ background: background.secondary }}>
            <Link href="/"><div onClick={() => navigateHome()} className="left">
                <NavName />
            </div></Link>
            <div className="hidden sm:flex gap-8">
                {/* <span onClick={() => { setSelected("Home"); handleImageClick("Home"); }} className={`w-full font-normal font-poppins cursor-pointer  ${selected === 'Home' && 'border-b-2'}`} style={{ color: background.textsecondary, borderColor:color , display: router.pathname === '/' ? 'block' : 'none' , fontSize:fontSize.base }}>
                    Home
                </span>

                <span onClick={() => setSelected("Projects")} className={`w-full font-normal font-poppins cursor-pointer  ${selected === 'Projects' && 'border-b-2'}`} style={{ color: background.textsecondary, borderColor:color, fontSize:fontSize.base}}>
                    Projects
                </span> */}

                {navItems.map((item) => (
                    <span key={item} onClick={() => { setSelected(item); handleImageClick(item); }} className={`w-full font-normal font-poppins cursor-pointer  ${selected === item && 'border-b-2'}`} style={{ color: background.textsecondary, borderColor:color, display: router.pathname === '/' ? 'block' : 'none' , fontSize:fontSize.base }}>
                        {item}
                    </span>
                ))}
            </div>
            <div className="right">

                <div className='flex gap-4'>
                    <Link href={`/projects`}><button className='font-semibold px-2 py-1 text-white shadow-md rounded-md hover:scale-105 transition transform duration-200 ease-in-out' style={{background:color}}>AllProjects</button></Link>
                    <Theme />
                    <GoThreeBars onClick={() => setToggle(!toggle)} className='text-2xl mt-4 sm:hidden cursor-pointer' style={{ color: background.textsecondary }} />
                </div>
                <div className={`fixed top-0 right-0 h-screen w-80 p-4 ${toggle ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all ease-in-out z-50`} style={{ background: background.primary}}>
                    <div onClick={() => setToggle(!toggle)} className='h-8 w-8 rounded-full flex ml-auto items-center justify-center' style={{ background: background.primary}}>
                        <XMarkIcon className='h-6 cursor-pointer' style={{ color: background.textprimary }} />
                    </div>
                    <div className='w-full py-4 font-semibold flex flex-col justify-center items-center' style={{fontSize:fontSize.xl}}>
                        {/* <button onClick={() => { setSelected("Home"); setToggle(!toggle); handleImageClick("Home"); }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{ background: background.primary, color: background.textsecondary , display: router.pathname === '/' ? 'block' : 'none' }}>
                            Home
                        </button>
                        <button onClick={() => { setSelected("Projects"); setToggle(!toggle); handleImageClick("Projects"); }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{ background: background.primary, color: background.textsecondary, display: router.pathname === '/' ? 'block' : 'none' }}>
                            Projects
                        </button> */}
                       {router.pathname === '/' &&  <button onClick={() => { 
                            setSelected('Home'); 
                            setToggle(!toggle); handleImageClick('Home'); 
                            
                            }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{ background: background.primary, color:color}}>
                                Home
                            </button>}
                      { router.pathname !== '/' && <button onClick={() => { 
                                router.push('/')  
                                setToggle(!toggle);                          
                            }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{ background: background.primary, color:color}}>
                                Home
                            </button>}
                        {navItems.map((item) => (
                            <button key={item} onClick={() => { setSelected(item); setToggle(!toggle); handleImageClick(item); }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{ background: background.primary, color:color , display: router.pathname === '/' ? 'block' : 'none' }}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
