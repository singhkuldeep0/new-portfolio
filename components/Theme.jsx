import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaPalette } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../state'

export default function Theme({isTopOfPage}) {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const yellowTheme = {
        navhead:"#040404",
        navText:"#040404",
        nav:"#F4C61D",
        webbg:'#040404',
        lighttext:'#ffffff',
        darktext:'#FCBB04',
    }

    const lavenderTheme = {
        navhead:"#63aa00",
        navText:"#93ED13",
        nav:"#DC2D70",
        webbg:"#93ED13",
        lighttext:"#C9159B",
        darktext:"#C9159B"
    }

    const bluetheme = {
        navhead:"#142CAC",
        navText:"#ffffff",
        nav:'#F40463',
        webbg:'#142CAC',
        lighttext:'#ffffff',
        darktext:'#fc246c',
    }

    const goldtheme = {
        navhead:"#0414D8",
        navText:"#0414D8",
        nav:'#F4C61D',
        webbg:'#0414D8',
        lighttext:'#ffffff',
        darktext:'#F4C61D',
    }

  return (
    <div>
      <Menu >
        <div>
        <Menu.Button>
          <FaPalette className='text-xl mt-0.5 cursor-pointer' style={{ color: isTopOfPage ? theme.lighttext : theme.navText}}/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-14 sm:right-8 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className='flex flex-wrap p-3 gap-4 items-center justify-center'>

            <div onClick={()=>dispatch(setTheme(bluetheme))}  className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg] bg-[#F40463]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-[#142CAC]'>
                </div> 
            </div>

            <div onClick={()=>dispatch(setTheme(goldtheme))} className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg]  bg-[#142CAC]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-[#F4C61D]'>
                </div> 
            </div>

            <div onClick={()=>dispatch(setTheme(yellowTheme))} className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg] bg-[#F4C61D]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-black'>
                </div> 
            </div>

            <div onClick={()=>dispatch(setTheme(lavenderTheme))}  className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg] bg-[#7F23CC]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-[#048484]'>
                </div> 
            </div>

            <div className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg] bg-[#F40463]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-[#142CAC]'>
                </div> 
            </div>

            <div className='relative h-10 max-h-10 w-10 flex justify-between rounded-xl shadow-lg overflow-hidden'>
                <div className='aspect-square absolute left-4 -top-3 h-14 w-10 -rotate-[30deg] bg-[#F40463]'>
                </div>
                 <div className='aspect-square absolute right-4 -bottom-5 h-14 w-10 -rotate-[40deg] bg-[#142CAC]'>
                </div> 
            </div>
           
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


