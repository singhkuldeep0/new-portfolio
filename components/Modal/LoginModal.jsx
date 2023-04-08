import React from 'react'
import Modal from './Modal'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModal, setRegisterModal } from '../../state';
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast';

const LoginModal = () => {

    const router = useRouter()
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const showModal = useSelector(state => state.LoginModal)
    const background = useSelector(state => state.background)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    
    const toggle = ()=>{
        dispatch(setLoginModal(false))
        dispatch(setRegisterModal(true))
    }

    const onClose = ()=>{
        dispatch(setLoginModal(false))
    }

    const onSubmit = (data)=>{
        setLoading(true)

        signIn('credentials' , {
            ...data,
            redirect:false
        }).then((callback) => {
            setLoading(false)

            if(callback?.ok){
                toast.success('Logged in')

                dispatch(setLoginModal(false))
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }


    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome back"
                subtitle="Login to your account"
                center
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

        </div>
    )


    const footerContent = (
        <div className='flex flex-col gap-4 mt-3' style={{color:background.textsecondary}}>
            <div className='flex items-center justify-center'>
                <span>OR</span>
            </div>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            />
             <div className="text-center mt-4 text-sm"> 
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>First time?</div>
                    <div
                    onClick={toggle}
                    className="cursor-pointer hover:underline"
                    >
                        create an account
                    </div>
                </div>
            </div>
        </div>
    )

    return (

        <Modal
            body={bodyContent}
            footer={footerContent}
            label="Signin"
            showModal={showModal}
            onClose={onClose}
            onSubmit={handleSubmit(onSubmit)}
        />

    )
}

export default LoginModal