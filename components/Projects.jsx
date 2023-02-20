import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Heading from './Heading'


const Projects = () => {

    const projects = useSelector(state => state.myprojects)

  return (
    <div id="Projects" className='flex flex-col gap-10 mb-10 md:gap-4 min-h-screen'>
      <Heading Heading='Projects' text="some of my recent projects"/>
     
      {projects.length > 0 && (
        projects?.map((project , i)=>(
            <Card key={project._id} project={project} index={i}/>
        ))
      )}
  
      
    </div>
  )
}

export default Projects
