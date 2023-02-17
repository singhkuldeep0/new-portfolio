import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavName from './NavName'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaPalette } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import Theme from './Theme'

const Navbar = ({isTopOfPage}) => {

    console.log(isTopOfPage)

    const theme = useSelector(state => state.theme)
    const [toggle, setToggle] = useState(false)
    const [selected , setSelected] = useState('Home')

    const navItems = [
        "Home", "Projects", "Skills", "About", "Contact"
    ]

    return (
        <div className="sticky top-0  px-4 h-16 flex items-center justify-between shadow-md" style={{ background: isTopOfPage ? `${theme.webbg}` : `${theme.nav}` }}>
            <div className="left">
                <NavName isTopOfPage={isTopOfPage}/>
            </div>
            <div className="hidden sm:flex gap-4">
                    {navItems.map((item) => (
                        <span onClick={()=>setSelected(item)} className={`w-full font-semibold rounded-md cursor-pointer px-4 py-1.5`} style={{ color: isTopOfPage ? `${ selected===item ?  theme.webbg : theme.lighttext}` :  `${selected===item ? theme.lighttext : theme.navText}` , background:isTopOfPage ? `${selected===item ? theme.nav : 'none'}` : `${selected===item ? theme.webbg : 'none'}` }}>
                            {item}
                        </span>
                    ))}
                </div>
            <div className="right">
               
                <div className='flex gap-4'>
                    <Theme isTopOfPage={isTopOfPage}/>
                    <GoThreeBars onClick={() => setToggle(!toggle)} className='text-2xl text-white sm:hidden cursor-pointer' />
                </div>
                <div className={`fixed top-0 right-0 h-screen w-72 p-4 ${toggle ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all ease-in-out`} style={{ background: `${theme.nav}` }}>
                    <div onClick={() => setToggle(!toggle)} className='h-8 w-8 rounded-full flex ml-auto items-center justify-center' style={{ background: `${theme.webbg}` }}>
                        <XMarkIcon className='h-6 text-white cursor-pointer' />
                    </div>
                    <div className='w-full py-4 text-xl font-semibold flex flex-col justify-center items-center'>
                        {navItems.map((item) => (
                            <button className={`my-3 py-3 w-full rounded-xl`} style={{ background: `${theme.webbg}` }}>
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
