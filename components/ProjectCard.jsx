import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'
import { format } from "date-fns"
import Link from 'next/link'
import {motion} from 'framer-motion'
import useMediaQuery from '../hooks/MediaQuery'
import { FaChevronRight } from 'react-icons/fa'

const ProjectCard = ({project}) => {
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)

    const isAboveMediumScreens = useMediaQuery("(min-width:800px)")

     const boxVariant = {
        rest:{
             scale:0.4,
              boxShadow: `${`${background.textprimary} 0px 5px 15px`}`
         },
         view :{
             scale:1,
            
             boxShadow: `${`${background.textprimary} 0px 5px 15px`}`,
         },
         hover:{
             scale:1.1,
             boxShadow: `${`${background.textprimary} 0px 19px 38px, ${background.textprimary} 0px 15px 12px`}`,
             transition: {
                type: "spring", stiffness: 3000 ,  damping: 500
              }
          }
        }

     const innerboxVariant = {
        rest :{
             y:-260,
             opacity:0,
         },
         view:{
             y:-260,
          opacity:0.9,
          transition: {
            delay:!isAboveMediumScreens ? 3 : 0 ,
            type: "spring", stiffness:3000 ,  damping:500
          }
         },
         hover:{
             y:0,
             opacity:1,
             transition: {
                type: "spring", stiffness: 10000 ,  damping: 400
              }
          }
     }


    const isprojectlength = project.skills.split(',').length
      

  return (
    <motion.div variants={boxVariant} initial="rest" whileHover="hover" animate="view"  transition={{
        type: "spring",
        delay:0.1,
        stiffness: 400,
        damping: 70
      }} className='relative bg-gray-200 h-56 md:h-64 w-80 md:w-96 rounded-xl overflow-hidden m-auto'>
        <motion.div   className='w-full h-[100%] border-2 hover:border-4 rounded-xl overflow-hidden' style={{background:background.primary,borderColor:color}}>
        <div className='w-full h-[20%] text-center pt-2' style={{background:color , fontSize:fontSize.xxl , color:'white'}}>
            <span className='font-lato'>{project.projectName}</span>
        </div>   
        <motion.div  initial="rest" whileHover="hover" animate="view" className='relative w-full h-[80%]' >
            <motion.div variants={innerboxVariant}  className='relative w-full flex flex-col gap-3 justify-end items-center h-full z-10' style={{background:background.primary}}>
                <div className='w-full h-[60%] flex justify-center gap-4 items-center' style={{fontSize:fontSize.base , color:color}}>
                  {project?.weblink && <Link href={`${project?.weblink}`} target="_blank"><button className='bg-white inline-flex gap-2 items-center px-3 py-2 rounded-full font-semibold' style={{borderColor:color}}>Visit Website
                        <FaChevronRight fontSize={fontSize.lg}/>
                    </button></Link>}
                    <Link href={`/project/${project?._id}`}><button className='inline-flex gap-2 items-center px-4 py-2 rounded-full font-semibold text-white ' style={{background:color}}>
                        View More
                    </button></Link>
                </div>
                <div className={`flex flex-col w-full ${isprojectlength ? '40%' : '20%'}`}>
                 
                 <div className='h-12 w-full mx-auto overflow-hidden flex flex-wrap-reverse gap-1 items-center justify-center' style={{fontSize:fontSize.xs}}>
                     {project.skills.split(",").map(item=>(
                        <button key={item} className='py-0.5 px-1.5 font-semibold rounded-full' style={{background:background.secondary, color:background.textsecondary }}>{item}</button>
                     ))}   
                 </div>
                    
                </div>
            </motion.div>
                 <Image  src={urlFor(project.images[0]).url()} alt="" fill />
        </motion.div>


        
        </motion.div>
  </motion.div>
  )
}

export default ProjectCard

