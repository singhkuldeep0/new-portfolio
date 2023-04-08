import React from 'react'
import { useSelector } from 'react-redux'

const Input = ({
    id,
    label,
    type="text",
    disabled,
    register,
    errors,
    required,
}) => {

  const background = useSelector(state => state.background)

  return (
    <div className='w-full relative'>
        <input type={type} id={id} disabled={disabled} {...register(id , { required })} placeholder='' className='peer w-full p-3 pt-4 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed' style={{background:background.primary , color:background.textsecondary , borderColor:errors[id] ? 'red' : background.textsecondary}}/>
        <label 
        className={`absolute text-md duration-150 transform -translate-y-3 top-4 -10 left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        `}
        style={{color:background.textprimary}}
        >{label}</label>
    </div>
  )
}

export default Input