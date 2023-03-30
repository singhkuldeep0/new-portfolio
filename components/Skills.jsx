import { useSelector } from 'react-redux'
import Heading from './Heading'
import SkillsCard from './SkillsCard'

const Skills = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const skillsArray = useSelector(state => state.technologies)
    const fontSize = useSelector(state => state.fontSize)

    const frontend = ['Reactjs', 'Nextjs', 'React Native', 'Typescript', 'Javascript', 'Redux']

    const backend = ['Express js', 'Nodejs', 'GraphQL', 'Mongodb', 'Prisma', 'Sanity']

    const cssLib = ['Tailwind css','Chakra UI', 'Sass' ,'Framer Motion']

    const frontendSkills = skillsArray.filter(item => frontend.includes(item.iconName))
    const backendSkills = skillsArray.filter(item => backend.includes(item.iconName))
    const cssLibraries = skillsArray.filter(item => cssLib.includes(item.iconName))



    return (
        <div
            id="Skills" className="w-[100%] py-10 flex flex-col gap-10 justify-center items-center ">
            <Heading Heading="Skills" text={"Tech Stack and Skills"} />
            <div className='flex gap-10 flex-wrap items-start justify-center'>
            { frontendSkills && <SkillsCard skills={frontendSkills} heading="FrontEnd" />}
              {backendSkills && <SkillsCard skills={backendSkills} heading="Backend" />}
              {cssLibraries && <SkillsCard skills={cssLibraries} heading="Css Frameworks" />}
            </div>
        </div>

    )
}

export default Skills
