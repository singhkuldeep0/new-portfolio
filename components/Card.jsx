import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ButtonModal from './ButtonModal'
import Link from 'next/link'

const Card = ({ project , index }) => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

    const [flip , setFlip] = useState(false)
    useEffect(() => {
        if(index % 2 === 0){
            setFlip(true)
        }
        else{
            setFlip(false)
        }
    }, [])

    const rootbox = {
        hidden :{
            opacity:0
        },
        visible :{
            opacity:1,
            transition:{ duration: 0.5, delay:0.2 , type: "tween" }
        }
    }


    return  (    
        <motion.div
        variants={rootbox}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[100%] min-h-[60vh] flex items-center justify-center py-6 md:py-12"
        >
            <div className={`flex ${flip ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-center md:items-start justify-center w-[86%] md:w-[80%] mx-auto`}>
                <div className={`relative w-[90%] md:w-1/2 h-[200px] md:h-[260px] before:absolute before:w-[100%] before:h-[200px] md:before:h-[260px] before:border-[8px] beforeborder before:top-6 before:right-6 rounded-xl before:rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`} style={{borderColor:color}}>
                    <Image src={urlFor(project.images[0]).url()} fill alt='' style={{borderRadius:'12px'}}/> 
                </div>
                <div className={`w-full md:w-1/2 pt-10 md:pt-0 flex flex-col gap-0.5 ${flip ? 'md:pl-20' : 'md:pr-20'}`}>
                    <h1 className='font-semibold' style={{color:color, fontSize:fontSize.xxl}}>PROJECT {index+1}</h1>
                    <span className='font-bold font-lato' style={{fontSize:fontSize.xl , color:background.textsecondary }}>{project.projectName}</span>
                    <p className='mt-2 font-medium' style={{color:background.textprimary , fontSize:fontSize.sm}}>{project.description.slice(0,440)}</p>

                    <div className='flex justify-between mt-4 items-center font-semibold'>
                        <Link href={`/project/${project?._id}`}><button  className='flex px-4 py-1 rounded-full gap-2 items-center justify-center tracking-tighter bg-white border-2' style={{fontSize:fontSize.base , borderColor:color}}>
                             View more
                        </button></Link>
                        <div>
                             <ButtonModal github={project?.github} weblink={project?.weblink}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// <img src={urlFor(project.images[0]).url()} /> 

export default Card
