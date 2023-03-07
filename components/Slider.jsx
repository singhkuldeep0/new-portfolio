import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { urlFor } from '../sanity.cli'
import useMediaQuery from "../hooks/MediaQuery";
import { useSelector } from "react-redux";
import React from "react";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";

const CustomDot = ({onClick, ...rest }) => {
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const {
      active,
    } = rest;
  
    return (
      <button
        className={`h-3 w-3 rounded-xl border mx-1 mb-0.5`}
        onClick={() => onClick()}
        style={{background:active ? color : 'transparent', borderColor:background.textsecondary}}
      >
        
      </button>
    );
  };


  const CustomRightArrow = ({ onClick, ...rest }) => {
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
  
    return  <button onClick={()=>onClick()}
    className='rounded-full absolute right-6 p-1 sm:p-1.5 mx-1 mb-0.5 opacity-70'
    style={{background:color, color:'white'}}
  >
    <FaChevronRight className="text-xs sm:text-sm"/>
  </button>
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
      
    return  <button onClick={()=>onClick()}
    className='rounded-full absolute left-6 p-1 sm:p-1.5 mx-1 mb-0.5 opacity-70'
    style={{background:color, color:'white'}}
  >
    <FaChevronLeft className="text-xs sm:text-sm"/>
  </button>
  };


const Slider = ({ images }) => {

    const background = useSelector(state => state.background)
  

      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const superLargeDesktop = useMediaQuery("(max-width:1600px)")
      const desktop = useMediaQuery("(max-width:1060px)")
      const tablet = useMediaQuery("(max-width:768px)")
      const mobile = useMediaQuery("(max-width:380px)")

      const result = ()=>{
        let device;
        if(superLargeDesktop) device='superLargeDesktop'
        if(desktop) device='desktop'
        if(tablet) device='tablet'
        if(mobile) device='mobile'

        return device
      }


     
    return (
        <div className="relative flex items-center justify-center w-[96%] md:w-[700px] lg:w-[1000px] my-6 mx-auto py-4 sm:px-8 sm:py-2 h-[230px] sm:h-[440px] lg:h-[520px] rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{background:background.primary}}>
        <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true} 
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        deviceType={result()}
        containerClass="carousel-container"
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        renderDotsOutside={true}
        customDot={<CustomDot/>}
        customRightArrow={<CustomRightArrow />} 
        customLeftArrow={<CustomLeftArrow />} 
        >
          {images.map((item)=>(
            <div key={item._key} className="relative w-[360px] sm:w-[600px] md:w-[700px] lg:w-[930px] h-[200px] sm:h-[400px] lg:h-[500px] m-auto">
                    <Image src={urlFor(item).url()} alt="" fill style={{objectFit:'contain'}} className='rounded-xl md:pb-3'/>
            </div>
          ))}
      </Carousel>
      </div>
    )
}

export default Slider







