import emailjs from '@emailjs/browser';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const NewFooter = () => {

  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const fontSize = useSelector(state => state.fontSize)
  const projects = useSelector(state => state.myprojects)

  const [selected, setSelected] = useState('Home')

    const handleImageClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const navigateHome = () => {
        setSelected("Home")
    }

  const contactData = [
    {
      Icon:FaMapMarkerAlt,
      text:"Punjab,India"
    },
    {
      Icon:FaEnvelope,
      text:"singhkuldeep7850@gmail.com"
    },
    {
      Icon:BsFillTelephoneFill,
      text:"+919914759117"
    },
]

 
const navItems = [
  "Home" , "Projects", "Skills", "About", "Contact"
]


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
    <div id="Contact" className='flex flex-col bg-black text-white p-4 md:p-10'>
      <div className='flex justify-center flex-wrap gap-10'>
          <div className='w-full max-w-xs px-4'>
              <a className='footeranim' stylef={{fontSize:fontSize.xxl}}>About Me</a>
              <p className='text-left mt-5' style={{fontSize:fontSize.sm}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam maiores consectetur veritatis magnam laudantium obcaecati at</p>

              <div className='flex gap-4 md:gap-6 font-openSans mt-5' style={{ color:'white' }}>
                        <Link href='https://www.instagram.com/singh_kuldeep_0' target="_blank" ><AiFillInstagram className='h-10 w-10 border-[3px] cursor-pointer p-1 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://twitter.com/kuldeep42210099' target="_blank" ><FaTwitter className='h-10 w-10 border-[3px] cursor-pointer p-1 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://www.linkedin.com/in/kuldeep-singh-21a69024b' target="_blank" ><FaLinkedin className='h-10 w-10 border-[3px] cursor-pointer p-1 rounded-md' style={{ background: color }} /></Link>
                        <Link href='https://github.com/kuldeep345' target="_blank" ><BsGithub className='h-10 w-10 border-[3px] cursor-pointer p-1 rounded-md' style={{ background: color }} /></Link>
                    </div>
          </div>
          <div className='w-full max-w-xs px-4'>
              <a className='footeranim' style={{fontSize:fontSize.xxl}}>Get In Touch</a>  
              <div className='flex flex-col gap-3 mt-5'>
               {contactData.map(item => (
                <p key={item.text} className='inline-flex gap-3 items-center' style={{fontSize:fontSize.lg}}>
                  <item.Icon />
                  {item.text}
                </p>
               ))}             
              </div>       
          </div>
          <div className='w-full max-w-xs px-4'>
              <a className='footeranim' style={{fontSize:fontSize.xxl}}>Useful Links</a>  
              <div className='flex flex-col gap-3 mt-5'>
               {navItems.map(item => (
                <p key={item} onClick={()=>handleImageClick(item)} className='inline-flex gap-1 items-center cursor-pointer' style={{fontSize:fontSize.lg}}>
                  <FiChevronRight className='mt-1'/>
                    {item}
                </p>
               ))}             
              </div>       
          </div>
          {/* <div className='w-full max-w-xs px-4'>
              <a className='footeranim' style={{fontSize:fontSize.xxl}}>Latest Projects</a>  
              <div className='flex flex-wrap gap-3 mt-8'>
                 {/* <div className='relative h-20 w-32 '>
                  <Image src={urlFor(first[0]).url()} fill alt=""/>
                 </div>
                 <div className='relative h-20 w-32 '>
                  <Image src={urlFor(first[1]).url()} fill alt=""/>
                 </div>                
                 <div className='relative h-20 w-32 '>
                  <Image src={urlFor(second[0]).url()} fill alt=""/>
                 </div>
                 <div className='relative h-20 w-32 '>
                  <Image src={urlFor(second[1]).url()} fill alt=""/>
                 </div>                 
              </div>        
          </div> */}
       
          <div className='flex flex-col gap-3 w-[320px]'>
            <div>
          <a className='footeranim' style={{fontSize:fontSize.xxl}}>Contact Me</a>  
            </div>               
            <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col gap-3">
                <div className='flex flex-col gap-1 text-base w-[320px]'>
                            <label>Email</label>
                            <input type="email" name="user_email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='w-[100%] py-0.5 bg-transparent border-2 outline-none' style={{borderColor:background.textprimary}}/>
                        </div>
                <div className='flex flex-col gap-1 text-base w-[320px]'>
                            <label>Message</label>
                            <textarea type="text" name='message'  value={message} onChange={(e)=>setMessage(e.target.value)} className='w-[100%] py-0.5 bg-transparent border-2 outline-none' style={{borderColor:background.textprimary}}/>
                        </div>
                <button type='submit' className='w-[100%] py-2 font-semibold mt-0.5 text-white text-sm' style={{background:color}}>Send</button>
                        </form>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default NewFooter