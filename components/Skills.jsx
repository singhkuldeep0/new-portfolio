import React from 'react'
import Heading from './Heading'
import { GlobeAltIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity.cli'
import Image from 'next/image'

const Skills = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const skills = useSelector(state => state.technologies)
    const fontSize = useSelector(state => state.fontSize)


    const boxVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            }
        },
    }

    const listVariant = {
        hidden: { 
            scale:0,
            opacity:0
         },
         visible: {
            scale: 1,
            opacity:1,
            transition:{
                type:'spring',
                stiffness:200,
                damping:20
            }
        },
      }

    const isArray = ['Nodejs' , 'Sanity' , 'Tailwind css']

    return (
        <div
         id="Skills" className="min-h-[90vh] w-[100%] py-10">
                <Heading Heading="Skills" text={"Tech Stack and Skills"}/>

              {skills.length > 0 &&  <motion.div
                className='w-[100%] flex gap-3 md:gap-8 md:px-10 flex-wrap mx-auto pt-6 justify-center items-center'
                 variants={boxVariant}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true}}
            >
                {skills.map(item => {
                    return <motion.div 
                    variants={listVariant}
                    className='md:w-40 md:h-40 w-32 h-32 flex gap-2 flex-col items-center justify-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl' style={{background:'white'}}>
                        <div className={`relative ${item.iconName === 'Sanity' ? 'h-7 md:h-10' : 'h-16 md:h-20'} ${isArray.includes(item.iconName) ? 'w-[110px] md:w-[140px]' : 'w-16 md:w-20'}`}>
                         <Image src={urlFor(item.icon).url()} fill alt='' style={{borderRadius:'12px'}}/> 
                        </div>
                        <span className='font-semibold' style={{fontSize:fontSize.xl}}>{item.iconName}</span>
                     </motion.div>
                })}
            </motion.div>}

        </div>
    )
}

export default Skills
