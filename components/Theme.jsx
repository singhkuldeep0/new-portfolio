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
      textwhite:'#040C0C',
      textlightsecondary:'#84CCFC',
      textdarksecondary:'#049CCC',
      textlightprimary:'#9C9C9C',
      textdarkprimary:'#545454',
      bglightprimary:'#cbeaff',
      bgdarkprimary:'#049CCC',
      bglightsecondary:'#d7d7d7',
      bgdarksecondary:'#545454',
      buttonbgprimary:'#545454',
      buttonbgseconadary:'#049CCC',
      background:'#ffffff'
  }
  const darktheme = {
    texthead:'#F7BC09',
    textwhite:'#ffffff',
    textlightprimary:'#F6E085',
    textdarkprimary:'#F6E085',
    textlightsecondary:'#545454',
    textdarksecondary:'#040C0C',
    bglightsecondary:'#F6E085',
    bgdarksecondary:'#F6E085',
    bglightprimary:'#545454',
    bgdarkprimary:'#040C0C',
    buttonbgseconadary:'#F6E085',
    buttonbgprimary:'#040C0C',
    background:'#040C0C'
  }

  const oceantheme = {
    texthead:'#049CCC',
    textwhite:'#ffffff',
    textlightsecondary:'#BCDCF4',
    textdarksecondary:'#049CCC',
    textlightprimary:'#FCA0B6',
    textdarkprimary:'#D37C9C',
    bglightprimary:'#BCDCF4',
    bgdarkprimary:'#047CB4',
    bglightsecondary:'#5#FCA0B6',
    bgdarksecondary:'#D37C9C',
    buttonbgprimary:'#049CCC',
    buttonbgseconadry:'#D37C9C',
    background:'#D37C9C'
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