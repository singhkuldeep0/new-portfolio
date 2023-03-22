import { client, urlFor } from '../../sanity.cli'
import Heading from '../../components/Heading'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Slider from '../../components/Slider'
import { BsGithub , BsGlobe } from 'react-icons/bs'
import Image from 'next/image'

const Project = ({project,allImages}) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
          
  return project.length > 0 ? (
    <div className='min-h-screen overflow-hidden py-4' style={{background: background.secondary}}>
      <h1 className='text-center font-bold font-openSans  sm:py-2' style={{color:background.textsecondary , fontSize:fontSize.xl }}>{project[0].projectName}</h1>
       <Slider images={project[0].images}/>

       <div className='flex flex-col gap-1 py-6 px-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left pb-2 font-bold font-openSans' style={{color:color , fontSize:fontSize.lg }}>Links :</h1>
     {project[0]?.weblink && <div className='inline-flex items-center justify-center gap-2'>
            <BsGlobe className='cursor-pointer' style={{color:color , fontSize:fontSize.xl}}/>
            <a href={project[0].weblink} target='_blank'><p className='font-medium underline font-lato' style={{color:background.textprimary , fontSize:fontSize.base}}>{project[0].weblink}</p></a>
       </div>}
       <div className='inline-flex items-center justify-center gap-2'>
            <BsGithub className='cursor-pointer' style={{color:color, fontSize:fontSize.xl}}/>
            <a href={project[0].github} target='_blank'><p className='font-medium underline font-lato' style={{color:background.textprimary , fontSize:fontSize.base}}>{project[0].github}</p></a>
       </div>
        </div>

       <div className='flex flex-col gap-3 p-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left font-bold font-openSans' style={{color:color , fontSize:fontSize.lg}}>Web Technologies used :</h1>
        <div className='flex justify-start gap-4 items-center'>
           {allImages.map(item=>(
            <div key={urlFor(item[0].icon).url()} className='relative h-20 w-20 hover:scale-110 duration-300 transition-all ease-in-out bg-white rounded-xl'>
            <Image src={urlFor(item[0].icon).url()} fill className='object-contain p-2 rounded-2xl'/>
              </div>
          ))} 
        </div>
       </div>

       <div className='flex flex-col gap-1 p-3 md:pt-10 md:px-28 items-start'>
       <h1 className='text-left font-bold font-openSans' style={{color:color , fontSize:fontSize.lg}}>Description :</h1>
            <p className='font-semibold font-lato' style={{color:background.textprimary , fontSize:fontSize.sm}}>{project[0].description}</p>
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
  