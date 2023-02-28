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
  const dispatch = useDispatch()
  const color = useSelector(state => state.color)
  const background = useSelector(state => state.background)
  const mode = useSelector(state => state.mode)

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  let [percentage, setPercentage] = useState(isAboveMediumScreens ? 25 : 50)

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
          className="rounded-md px-4 py-2 shadow-md hover:scale-105 transition transform duration-200 ease-in-out"
          style={{ background: color, color: 'white' }}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all" style={{ background: background.secondary }}>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6"
                    style={{ color: background.textsecondary }}
                  >
                    Customize your view
                  </Dialog.Title>
                  <div className="mt-2">
                    <span className='text-sm' style={{ color: background.textprimary }} >Font size</span>



                    <div className='w-[100%] pt-2 mt-2 px-2 flex justify-between items-center gap-4 m-auto rounded-lg' style={{ background: background.primary }}>
                      <span className='text-xs mb-1' style={{ color: background.textsecondary }} >Aa</span>
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
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{ background: color }} onClick={() => {
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
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{ background: color }} onClick={() => {
                                  setPercentage(25)
                                  dispatch(setFontSize({
                                    xs: '10px',
                                    sm: '12px',
                                    base: '14px',
                                    lg: '16px',
                                    xl: '18px',
                                    xxl: '20px',
                                    xxxl: '26px',
                                    xxxxl: '32px',
                                    xxxxxl: '42px',
                                    xxxxxxl: '48px',
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
                                <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{ background: color }} onClick={() => {
                                  setPercentage(50)
                                  dispatch(setFontSize({
                                    xs: '12px' ,
                                    sm: '14px' ,
                                    base: '16px' ,
                                    lg: '18px' ,
                                    xl: '20px' ,
                                    xxl: '24px' ,
                                    xxxl: '30px' ,
                                    xxxxl: '36px' ,
                                    xxxxxl: '48px' ,
                                    xxxxxxl: '64px' ,
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
                              <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{ background: color }} onClick={() => {
                                setPercentage(75)
                                dispatch(setFontSize({
                                  xs: '14px',
                                  sm: '16px',
                                  base: '18px',
                                  lg: '20px',
                                  xl: '24px',
                                  xxl: '28px',
                                  xxxl: '36px',
                                  xxxxl: '42px',
                                  xxxxxl: '48px',
                                  xxxxxxl: '72px'
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
                              <div className='w-3.5 h-3.5 cursor-pointer rounded-full' style={{ background: color }} onClick={() => {
                                setPercentage(100)
                                dispatch(setFontSize({
                                  xs: '16px',
                                  sm: '18px',
                                  base: '20px',
                                  lg: '24px',
                                  xl: '28px',
                                  xxl: '36px',
                                  xxxl: '42px',
                                  xxxxl: '48px',
                                  xxxxxl: '56px',
                                  xxxxxxl: '84px',
                                }))
                              }} />
                            </div>
                          )}
                        </Step>
                        </ProgressBar>
                      </div>
                      <span className='text-lg mb-1' style={{ color: background.textsecondary }} >Aa</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className='text-sm' style={{ color: background.textprimary }} >Color</span>
                    <div className='w-[100%] py-4 mt-2 px-4 flex justify-between items-center gap-4 m-auto rounded-lg' style={{ background: background.primary }}>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#1d9bf0]' onClick={() => dispatch(setColor('#1d9bf0'))}>
                        {color === '#1d9bf0' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#ffd400]' onClick={() => dispatch(setColor('#ffd400'))}>
                        {color === '#ffd400' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#f91880]' onClick={() => dispatch(setColor('#f91880'))}>
                        {color === '#f91880' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#ff7a00]' onClick={() => dispatch(setColor('#ff7a00'))}>
                        {color === '#ff7a00' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                      <div className='w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-[#00ba7c]' onClick={() => dispatch(setColor('#00ba7c'))}>
                        {color === '#00ba7c' && <AiOutlineCheck className='text-base text-white' />}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className='text-sm text-gray-600' style={{ color: background.textprimary }} >Background</span>
                    <div className='flex justify-between items-center py-2 cursor-pointer px-2 rounded-lg mt-2' style={{ background: background.primary }}>
                      <div onClick={() => {
                        dispatch(setMode('default'))
                        dispatch(dispatch(setBackground({
                          secondary: '#ffffff',
                          primary: '#d0d0d0',
                          bgneutral: '#dcdcdc',
                          textprimary: '#4a4a4a',
                          textsecondary: '#000000',
                          neutral: '#e0e0e0'
                        })))
                      }} className='w-[30%] h-10 sm:h-14 bg-white text-gray-800 border flex items-center justify-around px-1 sm:px-2 rounded-md' style={{ borderColor: color }}>
                        <div className='w-[16px] h-[16px] flex items-center justify-center border border-gray-400 rounded-full' style={{ background: mode === 'default' ? color : 'white' }}>
                          {mode === 'default' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold'>Default</span>
                      </div>

                      <div onClick={() => {
                        dispatch(setMode('dim'))
                        dispatch(dispatch(setBackground({
                          secondary: '#2f2f2f',
                          primary: '#7b7b7b',
                          bgneutral: '#dcdcdc',
                          textprimary: '#b2b2b2',
                          textsecondary: '#e9e9e9',
                          neutral: '#a9a9a9'
                        })))
                      }} className='w-[30%] h-10 sm:h-14 bg-[#1e1e1e] flex items-center justify-around px-1 sm:px-2 cursor-pointer rounded-md'>
                        <div className='w-[16px] h-[16px] flex items-center justify-center rounded-full' style={{ background: mode === 'dim' ? color : 'white' }}>
                          {mode === 'dim' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold text-white'>Dim</span>
                      </div>

                      <div onClick={() => {
                        dispatch(setMode('dark'))
                        dispatch(dispatch(setBackground({
                          secondary: '#000000',
                          primary: '#636363',
                          bgneutral: '#ffffff',
                          textprimary: '#cecece',
                          textsecondary: '#ffffff',
                          neutral: '#a9a9a9'
                        })))
                      }} className='w-[30%] h-10 sm:h-14 bg-black flex items-center justify-around px-1 sm:px-2 cursor-pointer rounded-md'>
                        <div className='w-[16px] h-[16px] flex items-center justify-center rounded-full' style={{ background: mode === 'dark' ? color : 'white' }}>
                          {mode === 'dark' && <AiOutlineCheck className='text-xs text-white' />}
                        </div>
                        <span className='text-xs font-semibold text-white'>Lights out</span>
                      </div>

                    </div>
                  </div>

                  <div className='mt-3 flex justify-center'>
                    <button onClick={closeModal} className='text-xs font-semibold py-1.5 text-white px-3 rounded-full' style={{ background: color }}>Done</button>
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
