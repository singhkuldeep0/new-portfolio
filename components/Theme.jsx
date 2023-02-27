import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaPalette } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useDispatch, useSelector } from 'react-redux';
import { setBackground, setColor, setFontSize, setMode } from '../state/index'
import useMediaQuery from '../hooks/MediaQuery';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)
  let [percentage, setPercentage] = useState(75)
  const dispatch = useDispatch()
  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const mode = useSelector(state => state.mode)

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium focus:outline-none"
          style={{background:color , color:'white'}}
        >
          <FaPalette className='text-xl' />
        </button>
      </div>

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all" style={{background:background.secondary}}>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6"
                    style={{color:background.textsecondary}}
                  >
                    Customize your view
                  </Dialog.Title>
                  <div className="mt-2">
                    <span className='text-sm' style={{color:background.textprimary}} >Font size</span>



                    <div className='w-[100%] pt-2 mt-2 px-2 flex justify-between items-center gap-4 m-auto rounded-lg' style={{background:background.primary}}>
                      <span className='text-xs mb-1' style={{color:background.textsecondary}} >Aa</span>
                      <div className='w-[80%]'>
                        <ProgressBar
                          filledBackground={color}
                          percent={percentage}
                        >
                          <Step transition="scale">
                            {({ accomplished, index }) => (
                              <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                              >
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{background:color}} onClick={() => {
                                  setPercentage(0)
                                  dispatch(setFontSize({
                                    xs: isAboveMediumScreens ? '8px' : '7px',
                                    sm: isAboveMediumScreens ? '10px' : '8px',
                                    base: isAboveMediumScreens ? '12px' : '10px',
                                    lg: isAboveMediumScreens ? '14px' : '12px',
                                    xl: isAboveMediumScreens ? '16px' : '14px',
                                    xxl: isAboveMediumScreens ? '18px' : '16px',
                                    xxxl: isAboveMediumScreens ? '22px' : '18px',
                                    xxxxl: isAboveMediumScreens ? '28px' : '22px',
                                    xxxxxl: isAboveMediumScreens ? '36px' : '28px',
                                    xxxxxxl: isAboveMediumScreens ? '48px' : '36px',
                                  }))
                                  }} />
                              </div>
                            )}
                          </Step>
                          <Step transition="scale">
                            {({ accomplished, index }) => (
                              <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                              >
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{background:color}} onClick={() => {
                                  setPercentage(25)
                                  dispatch(setFontSize({
                                    xs:isAboveMediumScreens ? '10px' : '8px',
                                    sm:isAboveMediumScreens ? '12px' : '10px',
                                    base:isAboveMediumScreens ? '14px' : '11px',
                                    lg:isAboveMediumScreens ? '16px' : '14px',
                                    xl:isAboveMediumScreens ? '18px' : '16px',
                                    xxl:isAboveMediumScreens ? '20px' : '18px',
                                    xxxl:isAboveMediumScreens ? '26px' : '22px',
                                    xxxxl:isAboveMediumScreens ? '32px' : '28px',
                                    xxxxxl:isAboveMediumScreens ? '42px' : '36px',
                                    xxxxxxl:isAboveMediumScreens ? '56px' : '40px',
                                  }))
                                  }} />
                              </div>
                            )}
                          </Step>
                          <Step transition="scale">
                            {({ accomplished, index }) => (
                              <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                              >
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{background:color}} onClick={() => {
                                  setPercentage(50)
                                  dispatch(setFontSize({
                                    xs:isAboveMediumScreens ? '12px' : '9px',
                                    sm:isAboveMediumScreens ? '14px' : '11px',
                                    base:isAboveMediumScreens ? '16px' : '12px',
                                    lg:isAboveMediumScreens ? '18px' : '16px',
                                    xl:isAboveMediumScreens ? '20px' : '18px',
                                    xxl:isAboveMediumScreens ? '24px' : '22px',
                                    xxxl:isAboveMediumScreens ? '30px' : '26px',
                                    xxxxl:isAboveMediumScreens ? '36px' : '34px',
                                    xxxxxl:isAboveMediumScreens ? '48px' : '38px',
                                    xxxxxxl:isAboveMediumScreens ? '64px' : '42px',
                                  }))
                                  }} />
                              </div>
                            )}
                          </Step>
                          <Step transition="scale">
                            {({ accomplished, index }) => (
                              <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                              >
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{background:color}} onClick={() => {
                                  setPercentage(75)
                                  dispatch(setFontSize({
                                    xs:isAboveMediumScreens ? '14px': '12px',
                                    sm:isAboveMediumScreens ? '16px': '14px',
                                    base:isAboveMediumScreens ? '18px': '16px',
                                    lg:isAboveMediumScreens ? '20px': '18px',
                                    xl:isAboveMediumScreens ? '24px' : '22px',
                                    xxl:isAboveMediumScreens ? '28px' : '34px',
                                    xxxl:isAboveMediumScreens ? '36px' : '30px',
                                    xxxxl:isAboveMediumScreens ? '42px' : '36px',
                                    xxxxxl:isAboveMediumScreens ? '48px' : '44px',
                                    xxxxxxl:isAboveMediumScreens ? '72px' : '48px'
                                  }))
                                  }} />
                              </div>
                            )}
                          </Step>
                          <Step transition="scale">
                            {({ accomplished, index }) => (
                              <div
                                className={`transitionStep ${accomplished ? "accomplished" : null}`}
                              >
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{background:color}} onClick={() => {
                                  setPercentage(100)
                                  dispatch(setFontSize({
                                    xs: isAboveMediumScreens ?  '16px' : '12px' ,
                                    sm: isAboveMediumScreens ?  '18px' : '16px' ,
                                    base: isAboveMediumScreens ?  '20px' : '18px' ,
                                    lg: isAboveMediumScreens ?  '24px' : '20px' ,
                                    xl: isAboveMediumScreens ?  '28px' : '24px' ,
                                    xxl: isAboveMediumScreens ?  '36px' : '32px' ,
                                    xxxl: isAboveMediumScreens ?  '42px' : '36px' ,
                                    xxxxl: isAboveMediumScreens ?  '48px' : '42px' ,
                                    xxxxxl: isAboveMediumScreens ?  '56px' : '48px' ,
                                    xxxxxxl: isAboveMediumScreens ?  '84px' : '52px' ,
                                  }))
                                  }} />
                              </div>
                            )}
                          </Step>
                        </ProgressBar>
                      </div>
                      <span className='text-lg mb-1' style={{color:background.textsecondary}} >Aa</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className='text-sm' style={{color:background.textprimary}} >Color</span>
                    <div className='w-[100%] py-4 mt-2 px-4 flex justify-between items-center gap-4 m-auto rounded-lg'  style={{background:background.primary}}>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#1d9bf0]' onClick={()=>dispatch(setColor('#1d9bf0'))}>
                        { color === '#1d9bf0' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#ffd400]' onClick={()=>dispatch(setColor('#ffd400'))}>
                        { color === '#ffd400' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#f91880]' onClick={()=>dispatch(setColor('#f91880'))}>
                       { color === '#f91880' &&  <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#ff7a00]' onClick={()=>dispatch(setColor('#ff7a00'))}>
                        { color === '#ff7a00' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#00ba7c]' onClick={()=>dispatch(setColor('#00ba7c'))}>
                        { color === '#00ba7c' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className='text-sm text-gray-600' style={{color:background.textprimary}} >Background</span>
                    <div className='flex justify-between items-center py-2 cursor-pointer px-2 rounded-lg mt-2'  style={{background:background.primary}}>
                      <div onClick={()=>{
                        dispatch(setMode('default'))
                        dispatch(dispatch(setBackground({
                          secondary:'#ffffff',
                          primary:'#d0d0d0',
                          bgneutral:'#dcdcdc',
                          textprimary:'#4a4a4a',
                          textsecondary:'#000000',
                          neutral:'#e0e0e0'
                      })))
                    }} className='w-[30%] h-10 sm:h-14 bg-white text-gray-800 border flex items-center justify-around px-1 sm:px-2 rounded-md' style={{borderColor:color}}>
                        <div className='w-[16px] h-[16px] flex items-center justify-center border border-gray-400 rounded-full' style={{background:mode==='default' ? color : 'white'}}>
                        {mode === 'default' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold'>Default</span>
                      </div>

                      <div onClick={()=>{
                        dispatch(setMode('dim'))
                        dispatch(dispatch(setBackground({
                          secondary:'#2f2f2f',
                          primary:'#7b7b7b',
                          bgneutral:'#dcdcdc',
                          textprimary:'#b2b2b2',
                          textsecondary:'#e9e9e9',
                          neutral:'#a9a9a9'
                      })))
                       }} className='w-[30%] h-10 sm:h-14 bg-[#1e1e1e] flex items-center justify-around px-1 sm:px-2 cursor-pointer rounded-md'>
                        <div className='w-[16px] h-[16px] flex items-center justify-center rounded-full' style={{background:mode==='dim' ? color : 'white'}}>
                         {mode==='dim' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold text-white'>Dim</span>
                      </div>

                      <div onClick={()=>{
                        dispatch(setMode('dark'))
                        dispatch(dispatch(setBackground({
                            secondary:'#000000',
                            primary:'#636363',
                            bgneutral:'#ffffff',
                            textprimary:'#cecece',
                            textsecondary:'#ffffff',
                            neutral:'#a9a9a9'
                        })))
                        }} className='w-[30%] h-10 sm:h-14 bg-black flex items-center justify-around px-1 sm:px-2 cursor-pointer rounded-md'>
                        <div className='w-[16px] h-[16px] flex items-center justify-center rounded-full' style={{background:mode==='dark' ? color : 'white'}}>
                        {mode === 'dark' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold text-white'>Lights out</span>
                      </div>

                    </div>
                  </div>

                  <div className='mt-3 flex justify-center'>
                      <button onClick={closeModal} className='text-xs font-semibold py-1.5 text-white px-3 rounded-full' style={{background:color}}>Done</button>
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
