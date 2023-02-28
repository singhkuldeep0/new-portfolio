import { client, urlFor } from '../../sanity.cli'
import Heading from '../../components/Heading'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Slider from '../../components/Slider'
import { BsGithub , BsGlobe } from 'react-icons/bs'

const Project = ({project,allImages}) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
          
  return project.length > 0 ? (
    <div className='min-h-screen mb-36 md:mb-4 overflow-hidden py-4' style={{background: background.secondary}}>
      <h1 className='text-center text-xl font-bold font-openSans  sm:py-2' style={{color:background.textsecondary}}>{project[0].projectName}</h1>
       <Slider images={project[0].images}/>

       <div className='flex flex-col gap-1 py-6 px-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left text-md pb-2 font-bold font-openSans' style={{color:color}}>Links :</h1>
     {project[0]?.weblink && <div className='inline-flex items-center justify-center gap-2'>
            <BsGlobe className='text-xl cursor-pointer' style={{color:color}}/>
            <a href={project[0].weblink} target='_blank'><p className='font-medium underline text-base font-lato' style={{color:background.textprimary}}>{project[0].weblink}</p></a>
       </div>}
       <div className='inline-flex items-center justify-center gap-2'>
            <BsGithub className='text-xl cursor-pointer' style={{color:color}}/>
            <a href={project[0].github} target='_blank'><p className='font-medium underline text-base font-lato' style={{color:background.textprimary}}>{project[0].github}</p></a>
       </div>
        </div>

       <div className='flex flex-col gap-3 p-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left text-md font-bold font-openSans' style={{color:color}}>Web Technologies used :</h1>
        <div className='flex justify-start gap-4 items-center'>
           {allImages.map(item=>(
            <img src={urlFor(item[0].icon).url()} className={`${item[0].iconName === 'Reactjs' ? 'h-14' : 'h-10'} hover:scale-110 duration-300 transition-all ease-in-out`}/>
          ))} 
        </div>
       </div>

       <div className='flex flex-col gap-1 p-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left text-md font-bold font-openSans' style={{color:color}}>Description :</h1>
            <p className='font-semibold text-base font-lato' style={{color:background.textprimary}}>{project[0].description}</p>
        </div>

           

    </div>
  ) : null
}

export default Project

export async function getServerSideProps(context) {

    const projectquery = `*[_type == 'projects' && _id == '${context.query.id}']`
    const project = await client.fetch(projectquery)

      const allImages = await Promise.all(project[0].technologies.map(async(item)=>{
      return client.fetch(`*[_type == 'technologies' && _id == '${item._ref}']`)
    }))

    return {
      props: {
        project,
        allImages
      }, 
    }
  }
  