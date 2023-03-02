import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'
import { format } from "date-fns"
import Link from 'next/link'
import {motion} from 'framer-motion'

const ProjectCard = ({project}) => {
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
    const date = new Date(project._createdAt).toDateString()

     const boxVariant = {
        rest:{
             scale:0.6,
             opacity:0.5,
      
         },
         view :{
             scale:1,
             opacity:1,
             boxShadow:`${`0px 3px 8px ${background.primary}`}`
   
         },
         hover:{
             scale:1.1,
             boxShadow: `${` 4.0px 8.0px 8.0px ${background.primary}`}`,
             border:`${`4px solid ${color}`}`
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
            duration: 1,
            type: "spring", stiffness: 800 ,  damping: 50
          }
         },
         hover:{
             y:0,
             opacity:0.9,
             transition: {
                duration: 2,
                type: "spring", stiffness: 800 ,  damping: 50
              }
          }
     }

    
      

  return (
    <motion.div variants={boxVariant} initial="rest" whileHover="hover" animate="view" className='relative bg-gray-200 h-56 md:h-64 w-80 md:w-96 rounded-b-xl overflow-hidden'>
        <motion.div   className='w-full h-[100%]' style={{background:background.primary}}>
        <div className='w-full h-[20%] text-center py-2' style={{background:background.primary , fontSize:fontSize.xxl , color:background.textsecondary}}>
            <span className='font-lato'>{project.projectName}</span>
        </div>   
        <motion.div  initial="rest" whileHover="hover" animate="view" className='relative w-full h-[80%]' >
            <motion.div variants={innerboxVariant}  className='relative w-full h-full z-50' style={{background:background.primary}}>
                 {/* <Image  src={urlFor(project.images[0]).url()} alt="" fill /> */}
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