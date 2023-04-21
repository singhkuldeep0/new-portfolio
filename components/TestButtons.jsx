import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setModal, setType } from '../state'

const TestButtons = () => {

    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
    const dispatch = useDispatch()

    const openUploadModal = ()=>{
        dispatch(setType('upload'))
        dispatch(setModal(true))
    }

  return (
    <div className='pb-10 w-full flex justify-end px-4'>

        <button onClick={openUploadModal} className='flex justify-center gap-1 items-center ml-auto mr-4 border-2 py-1 px-3' style={{color , fontSize:fontSize.lg , borderColor:color}}>
            <AiFillPlusCircle fontSize={fontSize.xxl}/>
            <span>Upload</span>
        </button>

         <button onClick={()=>signOut()} style={{background:color}} className='font-semibold px-4 py-1.5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg text-white'>Logout</button>
    </div>
  )
}

export default TestButtons