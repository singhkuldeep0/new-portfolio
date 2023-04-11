import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useSelector } from 'react-redux'
import state from '../state'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({setSelected}) {
  let categories1 = ["All", "Reactjs", "Nextjs", "MERN"] 
  let categories2 = ["Nodejs", "Typescript","React Native"] 

  const color = useSelector(state => state.color)

  return (
    <div className="px-2 pt-4 md:pt-8 sm:px-0">
      <Tab.Group className="mb-4">
        <div className='flex flex-col lg:flex-row gap-3'>
        <Tab.List className="flex space-x-1 rounded-xl p-1" style={{background:color , color:color}}>
          {categories1.map((category) => (
            <Tab
            onClick={()=>setSelected(category)}
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg px-6 py-2 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow text-inherit'
                    : 'hover:bg-white/[0.12] text-[#ffffff]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.List className="flex space-x-1 rounded-xl p-1" style={{background:color}}>
          {categories2.map((category) => (
            <Tab
            onClick={()=>setSelected(category)}
              key={category}
              className={({ selected }) =>
              classNames(
                'w-full rounded-lg px-6 py-2 whitespace-nowrap text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow text-inherit'
                  : 'hover:bg-white/[0.12] text-[#ffffff]'
              )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        </div>
      </Tab.Group>
      <Tab.Group>

      </Tab.Group>
    </div>
  )
}
