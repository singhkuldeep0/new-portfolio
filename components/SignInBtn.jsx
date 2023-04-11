import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useSession, signOut, signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { setLoginModal, setUser } from '../state'


const SignInBtn = ({ size, hide }) => {

    const user = useSelector(state => state.user)
    console.log(user)
    const {status} = useSession()

    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const dispatch = useDispatch()

    const iconSize = `${Number(size.split('px')[0]) + 6}px`

    const signout = async () => {
        await signOut()
        setTimeout(() => {
            localStorage.removeItem('user')
            dispatch(setUser(null))
        }, 1000);
    }

    return (
        <div>
            {status === 'loading' ? (<button onClick={() => signOut()} className='w-full inline-flex gap-3 justify-center items-center bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-3 py-2' style={{ background: color, color: 'white' }}>
                <BeatLoader color='white' />
            </button>) : (

                user ? (
                    <button onClick={signout} className='w-full inline-flex gap-3 justify-center items-center bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-3 py-1.5' style={{ background: color, color: 'white' }}>
                        Logout
                    </button>
                ) : (<button onClick={() => dispatch(setLoginModal(true))} className='w-full inline-flex gap-1 md:gap-2 justify-center items-center bg-white py-1.5 rounded-lg px-3 font-medium racking-wide text-gray-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)]' style={{ fontSize: size }}>
                    <FcGoogle size={iconSize} />
                    SignIn
                </button>)

            )}
        </div>
    )
}

export default SignInBtn