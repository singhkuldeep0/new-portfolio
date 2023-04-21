import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../state'
import Login from './Login'
import { AiFillCloseCircle } from 'react-icons/ai'
import TestimonialModal from './TestimonialModal'

const Modal = () => {

    const dispatch = useDispatch()
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)
    const modal = useSelector(state => state.modal)
    const type = useSelector(state => state.type)
    

    return (

        <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={()=>dispatch(setModal(false))}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 top-16 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all" style={{ background: background.secondary }}>
                               < AiFillCloseCircle onClick={()=>dispatch(setModal(false))} className='absolute right-3 top-3 cursor-pointer z-50' style={{fontSize:fontSize.xxxl , color:background.textsecondary}}/>
                               {type==='login' && <Login />}
                                {type==='upload' && <TestimonialModal/> }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal

