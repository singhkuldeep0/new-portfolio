import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useSignInWithEmailAndPassword, useSignInWithGoogle  } from 'react-firebase-hooks/auth';
import { auth } from '../firebasee/firebase';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';

const Login = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

    const userErrors = {
        "Firebase: Error (auth/email-already-in-use).":"A user with that email already exists",
        "Firebase: Error (auth/user-not-found).":"Invalid email or password",
        "Firebase: Error (auth/wrong-password).":"Invalid email or password",
    }
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
      });

      const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = async (data) => {
        const myPromise = new Promise((resolve, reject) =>
        signInWithEmailAndPassword(data.email , data.password)
        .then(() =>{
            if(error){
                setTimeout(() => reject(), 1400)
            }
            else if(user){
                setTimeout(() => resolve(), 1400)
            }
        }) 
        );
       
  
       toast.promise(myPromise, {
        loading: 'Please wait...',
        success: 'Login successfull',
        error: error && userErrors[error?.message],
      });
       
        reset();
  };


    return (
        <div className='flex min-h-[80vh] justify-center py-10' style={{ background: background.primary, color: background.textsecondary }}>
            <div className='w-[92%] h-fit md:h-[80vh] md:w-[80%] rounded-md overflow-hidden flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='w-1/2 h-full hidden md:flex' style={{ background: color }}>
                    <h1 className='font-bold font-lato m-auto text-white tracking-wider' style={{ fontSize: fontSize.xxxxxl }}>WELCOME</h1>
                </div>
                <div className='w-full md:w-1/2  h-full p-6 pt-4 pb-8 flex flex-col gap-4' style={{ background: background.secondary }}>
                    <span className='font-semibold text-center' style={{ fontSize: fontSize.xxl }}>Sign In</span>
                    <div  className='w-[94%] h-[80%] md:w-[80%] mx-auto mt-4 flex flex-col '>

                    
                    <button onClick={()=>signInWithGoogle()} className='w-full inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2 mt-8' style={{ borderColor: background.textprimary }}>
                            <FcGoogle />
                            Sign in with google
                        </button>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full mx-auto  flex flex-col mt-4 gap-4 justify-center'>
                       
                        <h2 className='text-center font-bold'>OR</h2>
                        <div className="flex flex-col gap-1">
                            <input   {...register("email")} className='formInput' type="email" style={{ background: background.primary, fontSize: fontSize.base }} placeholder="Enter your email" />
                            <p className='text-red-500' style={{fontSize:fontSize.sm}}>{errors.email?.message}</p>
                            <input  {...register("password")} className='formInput mt-3' type="password" style={{ background: background.primary, fontSize: fontSize.base }} placeholder="Enter your password" />
                            <p className='text-red-500' style={{fontSize:fontSize.sm}}>{errors.password?.message}</p>
                            <button className='w-full mt-4 inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2' style={{ background: color, color: 'white' }}>
                                Sign In
                            </button>

                            <div className='flex gap-1 justify-center font-semibold font-openSans' style={{ fontSize: fontSize.sm }}>
                                <span>New Here?</span>
                                <Link href="/signup"><span className='underline cursor-pointer font-bold' style={{ color: color }}>Sign Up</span></Link>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
