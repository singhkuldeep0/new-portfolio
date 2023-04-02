import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '../sanity.cli'
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";



const Slider = ({ images, videos }) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)

    return (
        <>
            <div className='text-white text-[20px] md:rounded-lg max-w-[1000px] mx-auto p-2 md:p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' style={{ background:background.textprimary }}>
                <Carousel
                    // autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className='absolute right-[31px] md:right-[51px] top-0 w-[25px] md:w-[40px] h-[25px] md:h-[40px] z-10 flex items-center justify-center cursor-pointer hover:opacity-90' style={{ background: background.primary }}>
                            <AiFillCaretLeft className='text-base md:text-xl' style={{ color }} />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className='absolute right-0 top-0 w-[25px] md:w-[40px] h-[25px] md:h-[40px] z-10 flex items-center justify-center cursor-pointer hover:opacity-90' style={{ background: background.primary }}>
                            <AiFillCaretRight className='text-base md:text-xl' style={{ color }} />
                        </div>
                    )}
                    className="h-min"
                >
                    {videos.map((item) => (
                     
                        <video 
                        src={item.asset.url} 
                        controls
                        loop
                        className='rounded-2xl cursor-pointer bg-gray-100'
                        />

                    ))
                    }
                    {images.map((item) => (
                        <div key={item._key} className="h-[180px] sm:h-[300px] md:h-[540px] w-full">
                            <Image src={urlFor(item).url()} alt="" fill className='!relative w-full' style={{ objectFit: 'contain' }} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Slider







