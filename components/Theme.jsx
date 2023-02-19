import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setTheme } from '../state'



export default function Example() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)
  
  
  const people = [
    { name: 'light', icon:<SunIcon className='h-7 text-black'/> },
    { name: 'dark' , icon:<MoonIcon className='h-5 text-white'/> },
    { name: 'ocean' , icon:<div className='h-4 w-4 rounded-md bg-blue-500'/>},
  ]
  
  const [selected, setSelected] = useState(people[0])
  const lightTheme = {
    texthead:'#049CCC',
    textwhite:'#0C74BC',
    textlight:'#818081',
    textdark:'#040404',
    bgdark:'#bababa',
    bglight:'#DEE4E6',
    buttoncolor:'#DEE4E6',
    buttonbg:'#444444',
    background:'#ffffff'
  }
  const darktheme = {
    texthead:'#EFAD13',
    textlight:'#FCFC04',
    textwhite:'#fffff',
    textdark:'#FCBB04',
    bgdark:'#040404',
    bglight:'#2C2C2C',
    buttoncolor:'#040404',
    buttonbg:'#F7EB0C',
    background:'#040404'
  }
  const oceantheme = {
    texthead:'#FC246C',
    textlight:'#FC6CB4',
    textwhite:'#fffff',
    textdark:'#FC246C',
    bgdark:'#0890C9',
    bglight:'#bbdaff',
    buttoncolor:'#0890C9',
    buttonbg:'#FC246C',
    background:'#ffffff'
  }

  const changetheme = (name)=>{
    if(name==='light'){
      dispatch(setTheme(lightTheme))
    }
    else if(name==='dark'){
      dispatch(setTheme(darktheme))
    }
    else{
      dispatch(setTheme(oceantheme))
    }
  }

  return (
    <div className="w-24">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-12  text-center">
            <span className="block truncate ml-auto">{selected.icon}</span>
           
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-8 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  onClick={()=>changetheme(person.name)}
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none pl-6 py-2 pr-1 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <div
                        className={`flex gap-1 text-md justify-center items-center text-left truncate ${
                          selected ? '' : 'font-normal'
                        }`}
                      >
                        {person.icon}
                        {person.name}
                      </div>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}







// <Listbox.Option onClick={()=>setSelected('light')} className='my-1 cursor-pointer py-1 hover:bg-slate-300'>
// <div className='flex gap-1 items-center justify-between pl-3 pr-4'>
//    <SunIcon className='h-6'/>
//    <span>Light</span>
// </div> 
// </Listbox.Option>

// <Listbox.Option onClick={()=>setSelected('dark')} className='my-1 cursor-pointer py-1 hover:bg-slate-300'>
// <div className='flex gap-1 items-center justify-between pl-3 pr-4'>
//    <MoonIcon className='h-5'/>
//    <span>dark</span>
// </div> 
// </Listbox.Option>

// <Listbox.Option onClick={()=>setSelected('ocean')} className='my-1 cursor-pointer py-1 hover:bg-slate-300'>
// <div className='flex gap-1 items-center justify-between pl-3 pr-3'>
//    <div className='h-4 w-4 ml-1 rounded-md bg-blue-500'/>

//    </div>
//    <span>ocean</span>
// </div> 
// </Listbox.Option>