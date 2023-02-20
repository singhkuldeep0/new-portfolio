import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavName from './NavName'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaPalette } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import Theme from './Theme'

const Navbar = ({isTopOfPage}) => {

      const theme = useSelector(state => state.theme)
    const [toggle, setToggle] = useState(false)
    const [selected , setSelected] = useState('Home')

    const navItems = [
        "Home", "Projects", "Skills", "About", "Contact"
    ]


    const handleImageClick = (id) => {
        console.log(id)
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };

    return (
        <div className="sticky top-0  px-4 h-16 flex items-center justify-between z-[100]" style={{ background: theme.background }}>
            <div className="left">
                <NavName isTopOfPage={isTopOfPage}/>
            </div>
            <div className="hidden sm:flex gap-8">
                    {navItems.map((item) => (
                        <span key={item} onClick={()=>{setSelected(item); handleImageClick(item); }} className={`w-full text-base font-normal font-poppins cursor-pointer  ${selected===item && 'border-b-2'}`} style={{ color: theme.textdarkprimary , borderColor:theme.texthead }}>
                            {item}
                        </span>
                    ))}
                </div>
            <div className="right">
               
                <div className='flex gap-4'>
                    <Theme isTopOfPage={isTopOfPage}/>
                    <GoThreeBars onClick={() => setToggle(!toggle)} className='text-2xl mt-4 sm:hidden cursor-pointer' style={{ color:theme.textwhite}}/>
                </div>
                <div className={`fixed top-0 right-0 h-screen w-80 p-4 ${toggle ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all ease-in-out z-50`} style={{ background: `${theme.bglightsecondary}` }}>
                    <div onClick={() => setToggle(!toggle)} className='h-8 w-8 rounded-full flex ml-auto items-center justify-center' style={{ background: `${theme.textdarkprimary}`}}>
                        <XMarkIcon className='h-6 cursor-pointer' style={{color:theme.textdarksecondary}}/>
                    </div>
                    <div className='w-full py-4 text-xl font-semibold flex flex-col justify-center items-center'>
                        {navItems.map((item) => (
                            <button key={item} onClick={()=>{setSelected(item); setToggle(!toggle); handleImageClick(item); }} className={`my-3 py-3 w-full rounded-xl hover:bg-slate-200`} style={{background:theme.bgdark , color:theme.texthead}}>
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
