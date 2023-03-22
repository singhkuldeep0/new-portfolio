import Image from 'next/image'
import React , { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { client } from '../sanity.cli'
import { motion } from 'framer-motion'

const Testimonial = ({item ,fetchAllTestimonials , setTestimonials , testimonials}) => {

 const colors = [ "#1d9bf0", "#ffd400", "#f91880", "#ff7a00", "#00ba7c", "#f91880"]
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
    const rndInt = Math.floor(Math.random() * 5) + 1

    const [name , setName] = useState('')
    const [description , setDescription ]= useState('')
    const [loading , setLoading] = useState(false)
    const [wrongFileType , setWrongFileType] = useState(false)
    const [imageAsset , setImageAsset] = useState(null)


    const uploadImage = (e)=>{
        const {type,name} = e.target.files[0]
    
        if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff'){
            setWrongFileType(false)
          setLoading(true)
    
          client.assets.upload('image' , e.target.files[0] , {contentType: type , filename:name}).then((document) => {
            setImageAsset(document)
            setLoading(false)
          }).catch((error)=>{
            console.log('Image upload error', error)
          })
        }
        else{
            setWrongFileType(true)
        }
      }

      const savePin = ()=>{
        if(name && description && imageAsset?.url){
            console.log('running')
          const doc = {
            _type:'testimonials',
            image:imageAsset?.url,
            name,
            description
          }
    
          client.create(doc).then(()=>{
            setTestimonials([doc , ...testimonials])          
            setName('')
            setDescription('')
            setImageAsset(null)
          })
    
        } 
        else{
         
        }
      }
    


  return (
    < >
   {item ? (
   <motion.div
   initial={{scale:0.4}}
   animate={{scale:1}}
   transition={{
       type:"spring",
       stiffness: 3000 ,
       damping: 500
     }}
     className="h-auto"
     style={{boxShadow:`${background.textprimary} 0px 5px 15px`}}
   >
      <div
        className="block overflow-hidden rounded-lg w-72 min-h-[260px]  h-full bg-white shadow-lg" style={{background:background.secondary}}>
        <div className={`h-20  rounded-t-lg bg-[${colors[rndInt]}]`}></div>
        
        <div 
          className="relative flex items-center justify-center mx-auto -mt-12 h-24 w-24 overflow-hidden rounded-full border-2 bg-gray-100 cursor-pointer">
      <Image src={item.image} fill className='object-contain' alt=''/>
            <input type="file" className='hidden' onChange={uploadImage}/>
          </div>
          
        <div className="px-6 py-4 flex flex-col gap-2" style={{background:background.secondary}}>
           
          <h4 className="mb-3 text-2xl text-center font-semibold">{item.name}</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            {item.description}
          </p>
   
        </div>
      </div>
      </motion.div>
      ) : (
    <div 
    style={{boxShadow:`${background.textprimary} 0px 5px 15px`}}
      >
      <div
        className="block overflow-hidden rounded-lg w-72 min-h-[340px]  h-full bg-white shadow-lg" style={{background:background.secondary}}>
        <div className={`h-20  rounded-t-lg bg-[${colors[rndInt]}]`}></div>
        <label>
        <div 
          className="relative flex items-center justify-center mx-auto -mt-12 h-24 w-24 overflow-hidden rounded-full border-2 bg-gray-100 cursor-pointer">
         {imageAsset?.url ? <Image src={imageAsset.url} fill className='object-contain' alt=''/>  : <AiFillCamera className='text-[42px] text-gray-400'/> }
            <input type="file" className='hidden' onChange={uploadImage}/>
          </div>
            </label>
        <div className="px-6 py-4 flex flex-col gap-2" style={{background:background.secondary}}>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' className='bg-transparent outline-none '/>
         
          <hr />

          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='h-28 w-full mt-3 outline-none bg-transparent' placeholder='your feedback'/>
          <button onClick={savePin} className={`btn bg-[${colors[rndInt]}] mt-2 py-1 text-white rounded-sm`}>Upload</button>
        </div>
      </div>
    </div>
    )}

    </>
  )
}

export default Testimonial