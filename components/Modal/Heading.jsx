import { useSelector } from "react-redux"

const Heading = ({
    title,
    subtitle,
    center
}) => {

  const background = useSelector(state => state.background)

  return (
    <div className={`mb-3 ${center ? 'text-center' : 'text-start'}`} style={{color:background.textsecondary}}>
        <div className="text-2xl font-semibold font-Merriweather">
            {title}
        </div>
        <div style={{color:background.textprimary}}>
            {subtitle}
        </div>  
    </div>
  )
}

export default Heading