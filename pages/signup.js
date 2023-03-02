import React from 'react'
import { useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const SignUp = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

  return (
    <div className='flex min-h-[80vh] justify-center py-10' style={{background:background.primary , color:background.textsecondary}}>
        <div className='w-[92%] h-fit md:h-[80vh] md:w-[80%] rounded-md overflow-hidden flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div className='w-1/2 h-full hidden md:flex' style={{background:color}}>
                <h1 className='font-bold font-lato m-auto text-white tracking-wider' style={{fontSize:fontSize.xxxxxl}}>WELCOME</h1>
            </div>
            <div className='w-full md:w-1/2  h-full p-6 pt-4 pb-8 flex flex-col gap-4' style={{background:background.secondary}}>
                <span className='font-semibold text-center' style={{fontSize:fontSize.xxl}}>Sign Up</span>
                <form className='w-[94%] md:w-[80%] h-full mx-auto mt-4 flex flex-col gap-4 justify-center'>
                    <button className='w-full inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2' style={{borderColor:background.textprimary}}> 
                        <FcGoogle />
                        Sign up with google
                    </button>
                    <h2 className='text-center font-bold'>OR</h2>
                    <div className="flex flex-col gap-4">
                        <input className='formInput' type="email" name="" id="" style={{background:background.primary, fontSize:fontSize.base}} placeholder="Email"/>
                        <input className='formInput' type="password" name="" id="" style={{background:background.primary, fontSize:fontSize.base}} placeholder="Password"/>
                        <input className='formInput' type="password" name="" id="" style={{background:background.primary, fontSize:fontSize.base}} placeholder="Confirm Password"/>
                        <button className='w-full inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2' style={{background:color , color:'white'}}> 
                            Sign Up
                    </button>
                    
                    <div className='flex gap-1 justify-center font-semibold font-openSans -mt-3' style={{fontSize:fontSize.sm}}>
                    <span>Already have an account?</span>
                    <Link href="/signup"><span className='underline cursor-pointer font-bold' style={{color:color}}>Sign In</span></Link>
                </div>
                    </div>
                </form>
              
            </div>

        </div>
    </div>
  )
}

export default SignUp
