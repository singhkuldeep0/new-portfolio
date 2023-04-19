import { client, urlFor } from '../../sanity.cli'
import { useSelector } from 'react-redux'
import Slider from '../../components/Slider'
import { BsGithub, BsGlobe } from 'react-icons/bs'
import Image from 'next/image'
import Description from '../../hooks/GetDescription'


const Project = ({ project, allImages }) => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)


  return project.length > 0 ? (
    <div className='min-h-screen overflow-hidden py-4 md:pb-80' style={{ background: background.secondary }}>
      <h1 className='text-center font-bold font-openSans  sm:py-2' style={{ color: background.textsecondary, fontSize: fontSize.xl }}>{project[0].projectName}</h1>
      <Slider images={project[0].images} videos={project[0].videos || []} />

      <div className='flex flex-col gap-1 py-6 px-3 md:pt-10 md:px-28 items-start'>
        <h1 className='text-left pb-2 font-bold font-openSans' style={{ color: color, fontSize: fontSize.lg }}>Links :</h1>
        {project[0]?.weblink && <div className='inline-flex items-center justify-center gap-2'>
          <BsGlobe className='cursor-pointer' style={{ color: color, fontSize: fontSize.xl }} />
          <a href={project[0].weblink} target='_blank' rel="noreferrer"><p className='font-medium underline font-lato' style={{ color: background.textprimary, fontSize: fontSize.base }}>{project[0].weblink}</p></a>
        </div>}
        <div className='inline-flex items-center justify-center gap-2'>
          <BsGithub className='cursor-pointer' style={{ color: color, fontSize: fontSize.xl }} />
          <a href={project[0].github} target='_blank' rel="noreferrer"><p className='font-medium underline font-lato' style={{ color: background.textprimary, fontSize: fontSize.base }}>{project[0].github}</p></a>
        </div>
      </div>

      <div className='flex flex-col gap-3 p-3 md:pt-10 md:px-28 items-start'>
        <h1 className='text-left font-bold font-openSans' style={{ color: color, fontSize: fontSize.lg }}>Web Technologies used :</h1>
        <div className='flex justify-start gap-4 items-center flex-wrap'>
          {allImages.map(item => (
            <div key={urlFor(item[0].icon).url()} className='relative h-24 w-24 hover:scale-110 duration-300 transition-all ease-in-out bg-white rounded-xl'>
              <Image src={urlFor(item[0].icon).url()} fill className='object-contain p-2 pb-6 rounded-2xl' />
              <div className='text-black absolute bottom-1 left-0 right-0 mx-auto w-max'>
                <span className='tracking-tighter'>{item[0].iconName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-1 p-3 md:pt-10 md:px-28 items-start'>
        <h1 className='text-left font-bold font-openSans' style={{ color: color, fontSize: fontSize.xl }}>Description :</h1>
        <div id="desc" >
            <Description projectName={project[0].projectName}/>
        </div>
       </div>



    </div>
  ) : null
}

export const getStaticPaths = async () => {
  const query = `*[_type == "projects"]{ _id }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      id: product._id
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}


export async function getStaticProps(context) {

  const projectquery = `*[_type == 'projects' && _id == '${context.params.id}']{
    ...,
    videos[]{
      asset->{
        _id,
        url
      }
    }
  }`
  const project = await client.fetch(projectquery)

  const allImages = await Promise.all(project[0].technologies.map(async (item) => {
    return client.fetch(`*[_type == 'technologies' && _id == '${item._ref}']`)
  }))

  return {
    props: {
      project,
      allImages
    },
  }
}


export default Project


















