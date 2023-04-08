import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({
    label,
    onClick,
    icon:Icon,
    outline,
    small
}) => {

  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)

  return (
    <button
    onClick={onClick}
    // disabled={disabled}
    className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full  
 
    ${small ? 'py-1' : 'py-3'}    
    ${small ? 'text-sm' : 'text-md'}    
    ${small ? 'font-light' : 'font-semibold'}    
    ${small ? 'border-[1px]' : 'border-2'}  `}
    style={{background: outline ? 'none' : color , borderColor: outline ? background.textsecondary : 'none' , color:outline ? background.textsecondary : 'white'}}
    >
        {Icon && (
            <Icon 
                size={24}
                className="absolute left-4 top-3"
            />
        )}
        {label}
    </button>
  )
}

export default Button