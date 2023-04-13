import axios from 'axios'
import React from 'react'
import ArticlesCard from '../components/ArticlesCard'
import { useSelector } from 'react-redux'
import LoginModal from '../components/Modal/LoginModal'
import RegisterModal from '../components/Modal/RegisterModal'

const articles = ({articles}) => {

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)

    if(articles.length===0){
        return 'No articles added yet'
    }
  return (
    <div className='min-h-screen pt-4 md:p-10' style={{background:background.secondary}}>
      <LoginModal/>
      <RegisterModal/>
        {articles.map(article=>(
            <ArticlesCard key={article._id} article={article}/>
        ))}
    </div>
  )
}


export async function getServerSideProps(context) {

    const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/articles`)
  
    return {
      props: {
        articles: response.data
      },
    }
  }
  

export default articles