import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AiFillGithub } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import Link from 'next/link'

export default function ButtonModal({github , weblink}) {
    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)
  return (
    <div className="w-40 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
        <Menu.Button className='inline-flex px-6 py-1.5 rounded-full items-center justify-center tracking-tighter text-white' style={{fontSize:fontSize.base , background:color}}>
            Visit
           
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
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white overflow-hidden focus:outline-none shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <Menu.Item>
                {({ active }) => (
                  <Link href={weblink} target="_blank"><button
                  style={{background:active ? color : 'white', color:active ? 'white' : 'black', fontSize:fontSize.base  }}
                    className={`group inline-flex w-full items-center justify-evenly px-2 py-2 text-sm`}
                  >
                    <BsGlobe style={{fontSize:fontSize.lg}}/>
                    Visit website
                  </button></Link>
                )}
              </Menu.Item>
          <Menu.Item>
                {({ active }) => (
                  <Link href={github} target="_blank"><button
                  style={{background:active ? color : 'white' , color:active ? 'white' : 'black', fontSize:fontSize.base }}
                    className={`group inline-flex w-full items-center justify-evenly px-2 py-2 text-sm `}
                  >
                    <AiFillGithub style={{fontSize:fontSize.xl}}/>
                    Github Code
                  </button></Link>
                )}
              </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

