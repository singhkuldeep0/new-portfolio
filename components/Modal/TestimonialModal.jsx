import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { client } from '../../sanity.cli'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setModal, setTestimonials } from '../../state'


const TestimonialModal = ({ }) => {

    const session = useSession()
    const dispatch = useDispatch()
    const [name, setName] = useState(session.data ? session.data.user.name : '')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [uploadloading, setUploadLoading] = useState(false)
    const [imageAsset, setImageAsset] = useState(null)
    const [wrongFileType , setWrongFileType] = useState()

    const color = useSelector(state => state.color)
    const fontSize = useSelector(state => state.fontSize)
    const test = useSelector(state => state.testimonials)

    const allTests = test.slice()
    console.log(session.data.user.id)
    
    const uploadImage = (file) => {

        const { type, name } = file

        if (type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff') {
            setWrongFileType(false)
            setLoading(true)

            client.assets.upload('image', file, { contentType: type, filename: name }).then((document) => {
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

    const savePin = async () => {

        if (!session.data) {
            return;
        }

        if (!name || !description || !imageAsset) {
            toast.error('Please add your image including name and description')
            return
        }

        if (name && description && imageAsset?.url) {
            setUploadLoading(true)
            await axios.post('/api/testimonial', {
                email:session.data.user.email,
                name,
                userId:session.data.user.id,
                description,
                imageUrl: imageAsset?.url
            }).then((result) => {
                setUploadLoading(false)
                dispatch(setTestimonials([...allTests , result.data]))
                setName('')
                setDescription('')
                setImageAsset(null)
                toast.success('Testimonial successfully added')
                dispatch(setModal(false))
            })

        }
        else {
            return
        }
    }

    return (
        <>

            <div className="w-[350px] mx-auto transform overflow-hidden rounded-2xl p-6  text-left align-middle transition-all">
                <h1
                    className="text-center font-playfair font-bold tracking-wider  leading-6 text-gray-900"
                    style={{ fontSize: fontSize.xxxl, color: color }}
                >
                    Testimonial Form
                </h1>
                <div className='flex flex-col gap-4  mt-8' style={{ fontSize: fontSize.lg, color: 'gray' }}>
                    <div className='flex  items-center justify-start gap-4 mb-4'>


                        <div className='relative rounded-full p-1 border-4' style={{ borderColor: color }}>
                            <label>
                                <div
                                    className="relative flex items-center justify-center mx-auto h-24 w-24  rounded-full overflow-hidden cursor-pointer">
                                    {imageAsset?.url ? <Image src={imageAsset.url} fill className='object-cover' alt='' /> : (loading ? <BeatLoader color={color} /> : <AiFillCamera className='text-[42px]' color={color} />)}
                                    <input type="file" className='hidden' onChange={(e) => uploadImage(e.target.files[0])} />
                                </div>
                            </label>
                            <div onClick={(e) => {
                                setImageAsset(null)
                            }} className='text-base cursor-pointer absolute bottom-0 -right-1 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-1.5 rounded-full'>
                                <BsTrashFill />
                            </div>
                        </div>

                        <p>: Select Your Image</p>
                    </div>

                    <input value={session.data ? session.data.user.name : ''} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='bg-transparent outline-none ' />

                    <hr />

                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='h-20 w-full mt-3 outline-none bg-transparent' placeholder='your feedback' />
                    <button onClick={savePin} style={{ background: color }} className={`btn mt-2 py-1.5 text-white rounded-md hover:scale-105 ease-in-out duration-300`}>{uploadloading ? <BeatLoader color='white' /> : 'Upload'}</button>

                </div>
            </div>

        </>
    )
}

export default TestimonialModal



