import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux'
import { FaEnvelope, FaTwitter, FaMapMarkerAlt , FaLinkedin} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub , BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'
import toast from 'react-hot-toast';

const Footer = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const myPromise = new Promise((resolve, reject) =>
      emailjs.sendForm('service_1lscq2r', 'template_af4h5rr', form.current, '-WvK0Ht5INoFm9Tfo')
      .then((result) =>{
          if(result===undefined){
              setTimeout(() => reject(), 1000)
         
          }
          else if(result){
              setTimeout(() => resolve(), 1000)
              setEmail('')
              setMessage('')
          }
      }) 
      );
      toast.promise(myPromise, {
        loading: 'Please wait...',
        success: 'email has been sent',
        error: 'something went wrong!',
      });    
    };

    return (
        <div id="Contact" className='w-full flex flex-col items-center justify-end shadow-[0_3px_10px_rgb(0,0,0,0.2)] min-h-[90vh]' style={{ background: background.secondary }}>
            <div className='w-full p-4 md:p-6 flex flex-col gap-10 md:flex-row md:gap-0 items-center md:items-start justify-between ' style={{ background: color, color:'white', fontSize: fontSize.xl }}>
                <div className='md:w-1/3 flex gap-6 flex-col items-start justify-center font-openSans'>

                <span className='font-medium border-b-4 pb-0.5'>LINKS</span>
                <div className="flex flex-col md:flex-row gap-6">

                <div className='h-[22vh] hidden md:flex md:h-[33vh] w-[3px] bg-white'/>
                <div className='h-1 w-full flex md:hidden bg-white'/>
                    <div className='flex md:flex-col gap-12 md:gap-6 font-openSans' style={{ color:'white' }}>
                        <Link href='https://www.instagram.com/singh_kuldeep_0' target="_blank" ><AiFillInstagram className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://twitter.com/kuldeep42210099' target="_blank" ><FaTwitter className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://www.linkedin.com/in/kuldeep-singh-21a69024b' target="_blank" ><FaLinkedin className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://github.com/kuldeep345' target="_blank" ><BsGithub className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color }} /></Link>
                    </div>
                    <div className='h-[22vh] hidden md:flex md:h-[33vh] w-[2px] ml-20 bg-white'/>
                    <div className='h-1 w-full flex md:hidden bg-white'/>
                    <div className='flex md:flex-col gap-7 md:gap-[38px] font-openSans'>
                        <span className='text-white font-semibold'>Home</span>
                        <span className='text-white font-semibold'>Projects</span>
                        <span className='text-white font-semibold'>Skills</span>
                        <span className='text-white font-semibold'>About</span>
                    </div>
                </div>
                </div>
                <div className=' md:w-1/3 flex gap-6 flex-col items-start justify-center font-openSans' style={{color:'white'}}>
                    <span className='font-medium border-b-4 pb-0.5 text-white'>ADDRESS</span>
                    <div className='flex flex-col gap-3 md:gap-[56px]'>

                    <div className="flex justify-start items-center gap-4">
                        <FaMapMarkerAlt className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color}} />
                        <span className='text-white font-semibold'>Tapa,punjab</span>
                    </div>
                    <div className="flex justify-start items-center gap-4" >
                        <BsFillTelephoneFill className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color}} />
                        <span className='text-white font-semibold'>+919914759117</span>
                    </div>
                    <div className="flex justify-start items-center gap-4" >
                        <FaEnvelope className='h-10 w-10 border-[3px] cursor-pointer p-1.5 rounded-md' style={{ background: color}} />
                        <span className='text-white font-semibold'>singhkuldeep7850@gmail.com</span>
                    </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex gap-6 flex-col items-start justify-center font-openSans'>
                    <span className='font-medium border-b-4 pb-0.5'>CONTACT US</span>
                    <form ref={form} onSubmit={sendEmail} className='h-60 w-full md:w-96 flex flex-col py-2 gap-3 px-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl' style={{background:background.textsecondary, color:background.primary}}>
                        <div className='flex flex-col gap-1 text-base'>
                            <label>Email</label>
                            <input type="email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[100%] py-0.5 bg-transparent border-2 outline-none' style={{borderColor:background.textprimary}}/>
                        </div>
                        <div className='flex flex-col gap-1 text-base'>
                            <label>Message</label>
                            <textarea type="text" name='message' value={message} onChange={(e)=>setMessage(e.target.value)} className='w-[100%] py-0.5 bg-transparent border-2 outline-none' style={{borderColor:background.textprimary}}/>
                        </div>
                        <button type='submit' className='w-[100%] py-2 font-semibold mt-0.5 text-white text-sm' style={{background:color}}>Send</button>
                    </form>
                </div>
            </div>
            <div className='w-full h-10 flex bg-black text-white'>
                <span className='m-auto font-semibold'> ??SinghKuldeep. All rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer


// 