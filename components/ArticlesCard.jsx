import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity.cli'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ArticlesCard = ({article}) => {
    
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)

    
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
           scale:1.1,
           boxShadow: `${`${background.textprimary} 0px 19px 38px, ${background.textprimary} 0px 15px 12px`}`,
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
    className='flex flex-col md:flex-row md:gap-3 max-w-[1024px] mx-auto p-2 md:p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8 rounded-md' style={{background:background.primary , color:background.textsecondary}}>
        <div>
            <div className='w-full'>
            <Image src={urlFor(article.image).url()} className='!relative' fill alt=""/>
            </div>
        </div>
        <div className="flex flex-col gap-3 py-2">
            <h2 className='font-semibold font-openSans'  style={{fontSize:fontSize.xl}}>{article.articleName}</h2>
            <p style={{fontSize:fontSize.base}}>{article.smallDescription}</p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}  className='mx-auto md:mr-auto md:ml-0 mt-3'>
            <Link href={`/article/${article._id}`}>
              <button className='text-white px-6 rounded-full py-1.5' style={{background:color, fontSize:fontSize.base}}>
                Continue
              </button> 
            </Link>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default ArticlesCard