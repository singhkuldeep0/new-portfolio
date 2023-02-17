import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Home() {

  const theme = useSelector(state => state.theme)

  const [isTopOfPage , setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll" , handleScroll)
    return () => window.removeEventListener("scroll" , handleScroll)
    }, [])
  
 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className={`min-h-[140vh]`} style={{background:`${theme.webbg}`}}> 
      <Navbar isTopOfPage={isTopOfPage}/>
     </main>
    
    </div>
  )
}
