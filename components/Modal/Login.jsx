import { signIn } from 'next-auth/react';
import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
    const dispatch = useDispatch()
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)
    const color = useSelector(state => state.color)


    const btn = `border-2 py-2 rounded-md inline-flex gap-4 items-center justify-center`
 
    return (
        <div className='p-8 w-96' style={{ background: background.secondary, color: background.textsecondary }}>
        
            <div className='flex flex-col gap-2'>
                <button onClick={()=>signIn("google")} className={`${btn}`}>
                    <BsGoogle style={{fontSize:fontSize.xxl}}/>
                    SignIn with Google
                </button>
            <p className='text-center'>OR</p>
                <button onClick={()=>signIn("github")} className={`${btn}`}>
                    <BsGithub style={{fontSize:fontSize.xxl}}/>
                    SignIn with Google
                </button>

            </div>
        </div>
    )
}

export default Login