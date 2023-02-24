import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'
import { format } from "date-fns"
import Link from 'next/link'

const ProjectCard = ({project}) => {
    const theme = useSelector(state => state.theme)
    const date = new Date(project._createdAt).toDateString()
    
  
  return (
    <Link href={`/project/${project._id}`}><div className='relative h-[200px]  bg-white w-[320px] col-span-1 mx-auto mt-28 rounded-xl hover:scale-105 transition transform duration-100 ease-out active:scale-95' style={{background:theme.bglightsecondary}}>
        <div className='absolute -top-20 right-0 left-0 ml-auto mr-auto w-[260px]'>
        <div className='relative w-[260px] h-[140px] rounded-xl overflow-hidden '>
            <Image src={urlFor(project.images[0]).url()} alt="" fill className=''/>
        </div>
        </div>
        <div className='flex flex-col justify-between p-3 pt-[70px] h-full'>
            <h1 className='font-semibold text-lg text-center' style={{color:theme.textdarksecondary}}>{project.projectName}</h1>
            <div>
                <span className='text-base' style={{color:theme.textdarkprimary}}>{project.description.slice(0.,77)}...</span>
            </div>
            <div className='flex gap-1 items-center'>
                {project.skills && project.skills.split(',').map(item=>(
                    <button key={item} className='project-smallbtn smbutton' style={{background:theme.bgdarkprimary  , color: theme.textlightprimary }}>#{item}</button>
                ))}
                <span style={{background:theme.bgdarkprimary  , color: theme.textlightprimary }} className='project-smallbtn smbutton ml-auto'>{date.slice(4)}</span>
            </div>
            
        </div>
    </div></Link>
  )
}

export default ProjectCard
