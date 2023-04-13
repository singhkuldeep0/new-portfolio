import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginModal } from '../../state'
import Button from './Button'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const Modal = ({ body, footer, label, showModal, onClose, onSubmit }) => {

    const dispatch = useDispatch()
    const background = useSelector(state => state.background)

    return (
        <Transition appear show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                            <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all" style={{ background: background.secondary }}>
                                
                                    <button onClick={onClose} className="p-1 cursor-pointer border-0 hover:opacity-70 transition absolute top-4 right-6 z-50" style={{ color: background.textsecondary }}>
                                        <IoMdClose size={28} />
                                    </button>

                                    <div className="relative p-6 pt-3 flex-auto w-full">
                                        {body}
                                    </div>
                                    <div className="flex flex-col gap-2 p-5">
                                        <div className="flex flex-row items-center gap-4 w-full">
                                            <Button
                                                onClick={onSubmit}
                                                label={label}
                                            />
                                        </div>
                                        {footer}
                                    </div>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal





//     < div className = {`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${showModal ? 'bg-neutral-800/70' : 'bg-none'}`}>
//         <div className="relative w-full md:w-4/6 lg:w-3/6 xl:2/5 mt-20 my-6 mx-auto h-fit lg:h-auto md:h-auto">
//             <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>

//             </div>
//         </div>
// </ >