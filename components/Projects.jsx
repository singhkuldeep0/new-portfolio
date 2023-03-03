import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Heading from './Heading'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Link from 'next/link'

const Projects = () => {

    const projects = useSelector(state => state.myprojects)

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

  return (
    <div id="Projects" className='flex flex-col gap-10 py-10 md:gap-4 min-h-screen'>
      <Heading Heading='Projects' text="some of my recent projects"/>
     
      {projects.length > 0 && (
        projects?.map((project , i)=>(
            <Card key={project._id} project={project} index={i}/>
        ))
      )}

        <Link href="/projects" className=' mx-auto'><button className='w-fit inline-flex items-center justify-center gap-3 rounded-md px-6 mt-4 py-1 border-2 bg-white hover:bg-transparent font-semibold' style={{fontSize:fontSize.xl , borderColor:color , color:color}}>
          View All Projects
          <MdOutlineArrowRightAlt style={{fontSize:fontSize.xxxxxl}}/>
        </button></Link>
      
    </div>
  )
}

export default Projects
