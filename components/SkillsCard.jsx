import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity.cli'
import Image from 'next/image'
import { useSelector } from 'react-redux'


const SkillsCard = ({skills, heading}) => {
 
    const boxVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
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


    const fontSize = useSelector(state => state.fontSize)
    const background = useSelector(state => state.background)

  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-3 p-3 pb-8 rounded-xl max-w-[460px]' style={{background:background.primary}}>
        <h1 className='text-center font-semibold py-3' style={{fontSize:fontSize.xxl , color:background.textsecondary}}>{heading}</h1>
         {skills.length > 0 &&  <motion.div
           className='gap-4 flex flex-wrap mx-auto pt-3 justify-center items-center'
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
       >
           {skills.map(item => {
               return <motion.div 
               key={item.iconName}
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

export default SkillsCard