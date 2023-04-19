import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Testimonial from '../components/Testimonial'
import { setModal, setType } from '../state'
import Modal from '../components/Modal/Modal'
import { signOut, useSession } from 'next-auth/react'

const testimonials = () => {

  const background = useSelector(state => state.background)
  const color = useSelector(state => state.color)
  const fontSize = useSelector(state => state.fontSize)

  const session = useSession()
  console.log(session)

  const dispatch = useDispatch()

  const openModal = ()=>{
    dispatch(setType('login'))
    dispatch(setModal(true))
  }

  return (
    <div className='min-h-screen p-4 md:p-10' style={{ background: background.secondary, color: background.textsecondary }}>
      <Modal/>
      {session.data && session.data.user ? <button onClick={()=>signOut()} style={{background:color}} className='ml-auto font-semibold px-4 py-1.5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg text-white'>Logout</button> : <div className='pb-10 w-full flex justify-end px-4'>
        <button onClick={openModal} style={{background:color}} className='ml-auto font-semibold px-4 py-1.5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg text-white'>SignIn to upload Testimonial</button>
      </div> }
      <div className='w-[90%] mx-auto flex justify-center flex-wrap gap-x-12 gap-y-14'>
      <Testimonial />
      <Testimonial />
 
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {},
  }
}

export default testimonials