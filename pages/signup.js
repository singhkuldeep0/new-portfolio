import React from 'react'
import { useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { auth } from '../firebasee/firebase';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {

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
        confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
      });

      const [signInWithGoogle] = useSignInWithGoogle(auth);

      const [
        createUserWithEmailAndPassword,
          user,
          loading,
          error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const { register, handleSubmit, watch, formState: { errors } , reset } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = async (data) => {
        const myPromise = new Promise((resolve, reject) =>
        createUserWithEmailAndPassword(data.email , data.password)
        .then(() =>{
            if(error){
                setTimeout(() => reject(), 2000)
            }
            else if(user){
                setTimeout(() => resolve(), 2000)
            }
        }) 
        );
       
  
       toast.promise(myPromise, {
        loading: 'Please wait',
        success: 'Account created successfully',
        error: error && userErrors[error.message],
      });
       
        reset();
  };


  return (
    <div className='flex min-h-[80vh] justify-center py-10' style={{background:background.primary , color:background.textsecondary}}>
        <div className='w-[92%] h-fit md:h-[80vh] md:w-[80%] rounded-md overflow-hidden flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div className='w-1/2 h-full hidden md:flex' style={{background:color}}>
                <h1 className='font-bold font-lato m-auto text-white tracking-wider' style={{fontSize:fontSize.xxxxxl}}>WELCOME</h1>
            </div>
            <div className='w-full md:w-1/2  h-full p-6 pt-4 pb-8 flex flex-col gap-4' style={{background:background.secondary}}>
                <span className='font-semibold text-center' style={{fontSize:fontSize.xxl}}>Sign Up</span>
                <button onClick={()=>signInWithGoogle()} className='w-full inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2' style={{borderColor:background.textprimary}}> 
                        <FcGoogle />
                        Sign up with google
                    </button>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[94%] md:w-[80%] h-full mx-auto mt-4 flex flex-col gap-4 justify-center'>
                  
                    <h2 className='text-center font-bold'>OR</h2>
                    <div className="flex flex-col gap-1">
                        <input  {...register("email")} className='formInput mt-3' style={{background:background.primary, fontSize:fontSize.base}} placeholder="Email"/>
                        <p className='text-red-500' style={{fontSize:fontSize.sm}}>{errors.email?.message}</p>
                        <input  {...register("password")} className='formInput mt-3' style={{background:background.primary, fontSize:fontSize.base}} placeholder="Password"/>
                        <p className='text-red-500' style={{fontSize:fontSize.sm}}>{errors.password?.message}</p>
                        <input  {...register("confirmpassword")} className='formInput mt-3' style={{background:background.primary, fontSize:fontSize.base}}  placeholder="Confirm Password"/>
                        <p className='text-red-500' style={{fontSize:fontSize.sm}}>{errors.confirmpassword?.message}</p>
                        <button className='w-full inline-flex gap-2 justify-center items-center py-2 px-4 rounded-full border-2' style={{background:color , color:'white'}}> 
                            Sign Up
                    </button>
                    
                    <div className='flex gap-1 justify-center font-semibold font-openSans -mt-1' style={{fontSize:fontSize.sm}}>
                    <span>Already have an account?</span>
                    <Link href="/login"><span className='underline cursor-pointer font-bold' style={{color:color}}>Sign In</span></Link>
                </div>
                    </div>
                </form>
              
            </div>

        </div>
    </div>
  )
}

export default SignUp
