import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { client } from '../sanity.cli'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import axios from 'axios'

const TestimonialModal = ({ isOpen, setIsOpen , testimonials, setTestimonials}) => {
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const {data:session}  = useSession()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploadloading, setUploadLoading] = useState(false)
    const [wrongFileType, setWrongFileType] = useState(false)
    const [imageAsset, setImageAsset] = useState(null)


    const colors = ["#1d9bf0", "#ffd400", "#f91880", "#ff7a00", "#00ba7c", "#f91880"]
    const background = useSelector(state => state.background)
    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)


    const uploadImage = (e) => {
        const { type, name } = e.target.files[0]

        if (type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff') {
            setWrongFileType(false)
            setLoading(true)

            client.assets.upload('image', e.target.files[0], { contentType: type, filename: name }).then((document) => {
                setImageAsset(document)
                setLoading(false)
            }).catch((error) => {
                console.log('Image upload error', error)
            })
        }
        else {
            setWrongFileType(true)
        }
    }

    const savePin = async() => {

        if(!session){
            return;
        }

        if(!name || !description || !imageAsset){
            toast.error('Please add your image including name and description')
            return
        }

        if (name && description && imageAsset?.url) {
           await axios.post('/api/testimonial',{
            email:session?.user.email,
             name,
             description,
             imageUrl: imageAsset?.url
        }).then((result)=>{
            setTestimonials([result.data.testimonial , ...testimonials])
            setName('')
            setDescription('')
            setImageAsset(null)
            toast.success('Testimonial successfully added')
            closeModal()
        })
  
        }
        else {
            return
        }
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel>
                                    <div className="w-[350px] transform overflow-hidden rounded-2xl p-6 bg-white text-left align-middle shadow-xl transition-all">
                                        <h1
                                            className="text-center font-playfair font-bold tracking-wider  leading-6 text-gray-900"
                                            style={{ fontSize: fontSize.xxxl, color: color }}
                                        >
                                            Testimonial Form
                                        </h1>
                                        <div className='flex flex-col gap-4  mt-8' style={{ fontSize: fontSize.lg, color: 'gray' }}>
                                            <div className='flex  items-center justify-start gap-4 mb-4'>

                                                <label>
                                                    <div className='relative rounded-full p-1 border-4' style={{ borderColor: color }}>
                                                        <div
                                                            className="relative flex items-center justify-center mx-auto h-24 w-24  rounded-full overflow-hidden cursor-pointer">
                                                            {imageAsset?.url ? <Image src={imageAsset.url} fill className='object-cover' alt='' /> : (loading ? <BeatLoader color={color} /> : <AiFillCamera className='text-[42px]' color={color} />)}
                                                            <input type="file" className='hidden' onChange={uploadImage} />
                                                        </div>
                                                        <div onClick={()=> setImageAsset(null)} className='text-base absolute bottom-0 -right-1 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-1.5 rounded-full'>
                                                        <BsTrashFill />
                                                        </div>
                                                    </div>
                                                </label>
                                                <p>: Select Your Image</p>
                                            </div>

                                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='bg-transparent outline-none ' />

                                            <hr />

                                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='h-20 w-full mt-3 outline-none bg-transparent' placeholder='your feedback' />
                                            <button onClick={savePin} style={{ background: color }} className={`btn mt-2 py-1.5 text-white rounded-md hover:scale-105 ease-in-out duration-300`}>{uploadloading ? <BeatLoader color='white' /> : 'Upload'}</button>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default TestimonialModal



