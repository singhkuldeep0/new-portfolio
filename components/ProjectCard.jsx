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
    const date = new Date(project._createdAt).toDateString()

    const isAboveMediumScreens = useMediaQuery("(min-width:800px)")

     const boxVariant = {
        rest:{
             scale:0.4,
             border:`${`2px solid ${color}`}`
         },
         view :{
             scale:1,
             boxShadow:`${`0px 3px 8px ${background.primary}`}`,
             border:`${`2px solid ${color}`}`
         },
         hover:{
             scale:1.1,
             boxShadow: `${` 4.0px 8.0px 8.0px ${background.primary}`}`,
             border:`${`6px solid ${color}`}`,
             transition: {
                type: "spring", stiffness: 400 ,  damping: 50
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
            type: "spring", stiffness:800 ,  damping:100
          }
         },
         hover:{
             y:0,
             opacity:1,
             transition: {
                type: "spring", stiffness: 800 ,  damping: 50
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
        <motion.div   className='w-full h-[100%]' style={{background:background.primary}}>
        <div className='w-full h-[20%] text-center pt-2' style={{background:color , fontSize:fontSize.xxl , color:'white'}}>
            <span className='font-lato'>{project.projectName}</span>
        </div>   
        <motion.div  initial="rest" whileHover="hover" animate="view" className='relative w-full h-[80%]' >
            <motion.div variants={innerboxVariant}  className='relative w-full flex flex-col gap-3 justify-end items-center h-full z-10' style={{background:background.primary}}>
                <div className='w-full h-[60%] flex justify-center gap-4 items-center' style={{fontSize:fontSize.base , color:color}}>
                    <button className='bg-white inline-flex gap-2 items-center px-3 py-2 rounded-full border-2 font-semibold' style={{borderColor:color}}>Visit Website
                        <FaChevronRight fontSize={fontSize.lg}/>
                    </button>
                    <button className='inline-flex gap-2 items-center px-4 py-2 rounded-full font-semibold text-white ' style={{background:color}}>
                        View More
                    </button>
                </div>
                <div className={`flex flex-col w-full ${isprojectlength ? '40%' : '20%'}`}>
                 
                 <div className='h-8 w-full mx-auto overflow-hidden flex flex-wrap-reverse gap-1 items-center justify-center' style={{fontSize:fontSize.xs}}>
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


// <Link href={`/project/${project._id}`}><div className='relative h-[200px]  bg-white w-[320px] col-span-1 mx-auto mt-28 rounded-xl hover:scale-105 transition transform duration-100 ease-out active:scale-95' style={{background:background.secondary}}>
// <div className='absolute -top-20 right-0 left-0 ml-auto mr-auto w-[260px]'>
// <div className='relative w-[260px] h-[140px] rounded-xl overflow-hidden '>
//     <Image src={urlFor(project.images[0]).url()} alt="" fill className=''/>
// </div>
// </div>
// <div className='flex flex-col justify-between p-3 pt-[70px] h-full'>
//     <h1 className='font-semibold text-lg text-center' style={{color:background.textsecondary}}>{project.projectName}</h1>
//     <div>
//         <span className='text-base' style={{color:background.textprimary}}>{project.description.slice(0.,77)}...</span>
//     </div>
//     <div className='flex gap-1 items-center'>
//         {project.skills && project.skills.split(',').map(item=>(
//             <button key={item} className='project-smallbtn smbutton' style={{background:background.neutral  , color: background.textsecondary }}>#{item}</button>
//         ))}
//         <span style={{background:background.neutral  , color: background.textsecondary}} className='project-smallbtn smbutton ml-auto'>{date.slice(4)}</span>
//     </div>
    
// </div>
// </div></Link>