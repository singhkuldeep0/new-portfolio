import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { client } from '../sanity.cli'
import ProjectCard from '../components/ProjectCard'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const Projects = ({projects}) => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const router = useRouter()
  const {search} = router.query

    const names = [ "Reactjs" , "Nextjs" , "MERN" , "Nodejs" , "Typescript"]

  return (
    <div className='min-h-screen' style={{background:background.secondary}}>
      <div className="grid grid-cols-3 md:grid-cols-6 w-fit gap-4 px-4 mx-auto py-6">
              <Link href={`/projects`}><button className='project-btn button w-full' style={{background: (search === undefined || null) ? color : background.secondary , color:'white'}}>All</button></Link>
            {names.map(name=>(
                <Link href={`/projects/?search=${name}`}><button key={name} className='project-btn button w-full' style={{background: name===search ? color : background.secondary , color:'white'}}>{name}</button></Link>
            ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 w-[90%] mx-auto mt-10'>
                {projects && projects.map((project => (
                  <ProjectCard key={project._id} project={project}/>
                )))}
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {

  let response;

  if(!context.query.search || context.query.search==='All'){
    response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`)
  }
  else{
    response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/searchproject/${context.query.search}`)
  }
  console.log(response.data)
  return {
    props: {
      projects:response.data
    }, 
  }
}


export default Projects
