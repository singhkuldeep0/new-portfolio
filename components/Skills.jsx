import React from 'react'
import Heading from './Heading'
import { GlobeAltIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { Fade, Zoom } from 'react-awesome-reveal'

const Skills = () => {

    const theme = useSelector(state => state.theme)

    return (
        <div id="Skills" className='py-10 ' style={{ color: theme.textlight }}>
            <Heading Heading="My Skills" />
            <div className='w-[80%] flex flex-col md:flex-row m-auto justify-around mt-16 gap-10'>
              <Zoom>
                <div className='flex justify-center items-center flex-col gap-2 pt-4 p-8 rounded-xl greyshadow'>
                    <div className='rounded-full flex justify-center items-center h-28 w-28' style={{ background: theme.bglightprimary }}>
                        <GlobeAltIcon className='h-16' style={{ color: theme.texthead }} />
                    </div>
                    <span className='text-xl font-lato font-semibold'>Web development</span>
                    <div className='mt-6'>
                        <ul className='flex flex-col gap-6'>
                            <li className='flex justify-between text-xl md:text-2xl'>
                                <span>Html</span>
                                <AiFillHtml5 className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                            <li className='flex justify-between gap-44 text-xl md:text-2xl'>
                                <span>Css</span>
                               <DiCss3 className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                            <li className='flex justify-between gap-44 text-xl md:text-2xl'>
                                <span>Javascript</span>
                                <DiJavascript1 className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                        </ul>
                    </div>
                </div>
                </Zoom>
               <Zoom>
                <div className='flex justify-center items-center flex-col gap-2 pt-4 p-8 rounded-xl greyshadow'>
                    <div className='rounded-full h-28 w-28 flex justify-center items-center' style={{ background: theme.bglightsecondary }}>
                        <WrenchScrewdriverIcon className='h-16' style={{ color: theme.texthead }} />
                    </div>
                    <span className='text-xl font-lato font-semibold'>Frameworks</span>
                    <div className='mt-6'>
                        <ul className='flex flex-col gap-6'>
                            <li className='flex justify-between text-xl md:text-2xl'>
                                <span>Reactjs</span>
                                <FaReact className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                            <li className='flex justify-between gap-44 text-xl md:text-2xl'>
                                <span>Nextjs</span>
                               <SiNextdotjs className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                            <li className='flex justify-between gap-44 text-xl md:text-2xl'>
                                <span>Tailwindcss</span>
                                <SiTailwindcss className='text-2xl md:text-4xl' style={{color:theme.texthead}}/>
                            </li>
                        </ul>
                    </div>
                </div>
                </Zoom>
            </div>
            <div className=''>

            </div>
        </div>
    )
}

export default Skills
