import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import { urlFor } from '../sanity.cli'

const Slider = ({ images }) => {

    const theme = useSelector(state => state.theme)
    const [isborder , setIsBorder] = useState(0)

    console.log(isborder)

    return (
        <div className='flex w-[100vw]'>
            <div>
        <div className='w-full sm:w-[60%] xl:w-[50%] m-auto greyshadow pb-1 pt-6 md:px-8' style={{color:theme.bglightsecondary}}>
            <Carousel
            showArrows={true}
            useKeyboardArrows={true}
            emulateTouch={true}
            width="100%"
            labels={false}
            onClickThumb={(e)=>setIsBorder(e)}
            >
                {images.map((item , i) => (
                    <div className='shadow-xl h-[200px] md:h-[240px] xl:h-[350px]' style={{shadowColor:theme.bgdarkprimary}}>
                        <img src={urlFor(item).url()}  className={`h-full ${isborder===i && 'border-2'} object-contain`} style={{borderColor:theme.bgdarkprimary}}/>
                    </div>
                ))}
            </Carousel>
        </div>
        </div>
        </div>
    )
}

export default Slider
