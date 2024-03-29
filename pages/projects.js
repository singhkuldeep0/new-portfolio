import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'
import { useRouter } from 'next/router'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import Tabs from '../components/Tabs'

const Projects = ({ projects }) => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)
  const router = useRouter()

  const [allprojects, setProjects] = useState(projects)
  const [selected, setSelected] = useState("All")

  const filteredProjects = allprojects.filter(item => {
    if (selected === 'All') {
      return item
    }
    else if (item.skills.split(',').includes(selected)) {
      return item
    }
  })

  return (

    <div className='min-h-screen pb-44' style={{ background: background.secondary }}>
      <div className="flex justify-center items-center w-full">
        {/* {names.map(name => (
          <button key={name} onClick={() => setSelected(name)} className={`project-btn button px-3 ${name==="All" ? 'w-20' : 'w-fit'}`} style={{ background: selected === name ? color : background.primary, color: selected===name ? 'white' : background.textsecondary, fontSize: fontSize.base }}>{name}</button>
        ))} */}
        <Tabs setSelected={setSelected}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 w-[90%] mx-auto mt-10'>
        <AnimatePresence>
          {projects && filteredProjects.map((project => (
            <motion.div key={project._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard key={project._id} project={project} />
            </motion.div>
          )))}
        </AnimatePresence>
      </div>
    </div>
  )
}


export async function getStaticProps(context) {

  const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/project`)

  return {
    props: {
      projects: response.data
    },
  }
}


export default Projects
