import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity.cli'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const ArticlesCard = ({article}) => {
    
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
    console.log(article)
    
    const boxVariant = {
      rest:{
           scale:0.4,
            boxShadow: `${`${background.textprimary} 0px 5px 15px`}`
       },
       view :{
           scale:1,
          
           boxShadow: `${`${background.textprimary} 0px 5px 15px`}`,
       },
       hover:{
           scale:1.04,
           boxShadow: `${`${background.textprimary} 0px 10px 28px, ${background.textprimary} 0px 10px 16px`}`,
           transition: {
              type: "spring", stiffness: 3000 ,  damping: 500
            }
        }
      }

    return (
    <motion.div
    variants={boxVariant} initial="rest" whileHover="hover" animate="view"  transition={{
      type: "spring",
      delay:0.1,
      stiffness: 400,
      damping: 70
    }}
    className='flex flex-col md:flex-row md:gap-3 max-w-[1024px] mx-auto p-2 md:p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8 rounded-md' style={{background:background.primary , color:background.textsecondary}}>
        <div>
            <div className='w-full'>
            <Image src={urlFor(article.image).url()} className='!relative rounded-t-md md:rounded-t-none md:rounded-l-md' fill alt=""/>
            </div>
        </div>
        <div className="flex flex-col gap-3 py-2 w-full">
            <h2 className='font-semibold font-openSans'  style={{fontSize:fontSize.xl}}>{article.articleName}</h2>
            <p style={{fontSize:fontSize.base}}>{article.smallDescription}</p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}  className='mx-auto md:mr-auto md:ml-0 mt-3'>
           
            </motion.div>      
            <div className='flex justify-between w-full mt-auto'>
            <a href={article.blogLink} target='_blank'>
              <button className='text-white px-6 rounded-full py-1.5' style={{background:color, fontSize:fontSize.base}}>
                View Full Blog
              </button> 
            </a>
            <a href={article.webLink} target='_blank'>
              <button className='text-white px-6 rounded-full py-1.5' style={{background:color, fontSize:fontSize.base}}>
                View demo
              </button> 
            </a>
              </div>
        </div>
     
    </motion.div>
  )
}

export default ArticlesCard