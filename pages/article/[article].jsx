import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { urlFor } from '../../sanity.cli'
import Image from 'next/image'

const Article = ({article}) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)

    if(!article){
        return
    }

  return (
    <div style={{background:background.secondary, color:background.textsecondary}} className='min-h-screen pb-36'>
        <div className='flex justify-center py-4' style={{fontSize:fontSize.xxxl}}>
        <h1 className='mx-auto'>{article.articleName}</h1>
        </div>
        <div className='max-w-[1024px] mx-auto'>
            <Image src={urlFor(article.image).url()} className='!relative mx-auto' fill alt=""/>
        </div>
        <div className='flex flex-col gap-2 md:gap-3 px-2 md:px-36 py-4 md:py-8'>
            <h1 style={{fontSize:fontSize.xxl}}>BlogLink :</h1>
            <span>Get full Information, code on Blog, checkout the link down below</span>
            <a href={article.blogLink} target='_blank' className='underline cursor-pointer' style={{fontSize:fontSize.base}}>{article.blogLink}</a>
        </div>
        <div className='flex flex-col gap-2 md:gap-3 px-2 md:px-36 py-4 md:py-8'>
            <h1 style={{fontSize:fontSize.xxl}}>Description:</h1>
            <span style={{fontSize:fontSize.base}}>{article.description}</span>
        </div>
    </div>
  )
}


export async function getServerSideProps(context) {
    const id = context.query.article
    const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/articles/${id}`)
  
    return {
      props: {
        article: response.data
      },
    }
  }
  

export default Article