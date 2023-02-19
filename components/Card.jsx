import React, { useEffect, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity.cli'

const Card = ({ project , index }) => {

    const theme = useSelector(state => state.theme)
    const [flip , setFlip] = useState(false)
    useEffect(() => {
        if(index % 2 === 0){
            setFlip(true)
        }
        else{
            setFlip(false)
        }
    }, [])
    
console.log(flip)

    return (
        <>
        {flip ? (
            <Zoom>
            <div className='relative max-w-[600px] my-10 w-[90%]  h-[240px] md:h-[320px] mx-auto rounded-lg shadow-xl' style={{background:theme.bglight}}>
                <img src={urlFor(project.images[0]).url()} className='absolute -top-20 rounded-lg left-[11%] sm:left-[28%] md:top-[15%] md:-left-[25%] w-[260px] h-[150px] md:w-[400px] md:h-[220px] border-[0.1px]' style={{borderColor:theme.bgdark}}/>
                <div className='flex flex-col md:justify-center h-full pt-20 md:pt-0 px-3 sm:px-6 md:w-1/2 ml-auto'>
                    <h1 className='text-2xl font-semibold mb-1' style={{color:theme.textdark}}>{project.projectName}</h1>
                    <p className='text-base font-lato' style={{color:theme.textlight}}>{project.description.slice(0,90)}...</p>
                    <div className='flex items-center justify-between mt-6 md:mt-10 '>
                        
                <button className='font-semibold text-base px-4 rounded-full py-1.5 cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>Read more</button>
                {project.weblink && <a href={project.weblink} target="_blank"><button className='font-semibold text-base px-4 tracking-wider rounded-full py-1.5 cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>visit</button></a>}
                        
                    </div>
                </div>
            </div>
            </Zoom>
        ) : (
        <Zoom>
        <div className='relative max-w-[600px] my-10 w-[90%]  h-[240px] md:h-[320px] mx-auto rounded-lg shadow-xl' style={{background:theme.bglight}}>
            <img src={urlFor(project.images[0]).url()} className='absolute -top-20 rounded-lg right-[12%] sm:right-[28%] md:top-[15%] md:-right-[25%] w-[260px] h-[150px] md:w-[400px] md:h-[220px] border-[0.1px]' style={{borderColor:theme.bgdark}}/>
            <div className='flex flex-col md:justify-center h-full pt-20 md:pt-0 px-3 sm:px-6 md:w-1/2 mr-auto'>
                <h1 className='text-2xl font-semibold mb-1' style={{color:theme.textdark}}>{project.projectName}</h1>
                <p className='text-base font-lato' style={{color:theme.textlight}}>{project.description.slice(0,90)}...</p>
                <div className='flex items-center justify-between mt-6 md:mt-10 '>
                    
            <button className='font-semibold text-base px-4 rounded-full py-1.5 cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>Read more</button>
            {project.weblink && <a href={project.weblink} target="_blank"><button className='font-semibold text-base px-4 tracking-wider rounded-full py-1.5 cursor-pointer' style={{background:theme.buttonbg , color:theme.buttoncolor}}>visit</button></a>}
                    
                </div>
            </div>
        </div>
        </Zoom>
        )}
        </>
    )
}

export default Card
