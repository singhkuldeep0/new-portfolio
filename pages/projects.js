import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { client } from '../sanity.cli'
import ProjectCard from '../components/ProjectCard'

const Projects = ({projects}) => {

    const theme = useSelector(state => state.theme)
    const [selectedbtn , setSelectedbtn] = useState("All")

    const filterProjects = projects.filter(item => {
      if(selectedbtn==='All'){
        return item
      }
      return item.skills.split(',').includes(selectedbtn)
    })


    const names = [ "All" , "Reactjs" , "Nextjs" , "MERN" , "Nodejs" , "Typescript"]

  return (
    <div className='min-h-screen' style={{background:theme.background}}>
      <div className="grid grid-cols-3 md:grid-cols-6 w-fit gap-4 px-4 mx-auto py-6">
            {names.map(name=>(
                <button key={name} className='project-btn button' onClick={()=>setSelectedbtn(name)} style={{background: name===selectedbtn ? theme.bgdarkprimary : theme.bglightsecondary , color: name===selectedbtn ? theme.textlightprimary : theme.textdarkprimary}}>{name}</button>
            ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[90%] mx-auto'>
                {projects && filterProjects.map((project => (
                  <ProjectCard key={project._id} project={project}/>
                )))}
      </div>
    </div>
  )
}


export async function getStaticProps() {

  const projectquery = `*[_type == 'projects']`
  const projects = await client.fetch(projectquery)

  return {
    props: {
      projects
    }, 
  }
}


export default Projects
