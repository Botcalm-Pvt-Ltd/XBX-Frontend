import React from 'react'
import starImage from '../assets/star.png'
import ShapedTpButton from './ShapedTpButton'
import upChart from '../assets/up.svg'
import borderBOx from '../assets/tool-box.svg'
import mobileBorderBox from '../assets/mobile-tool-box.svg'
import moneyIcon from '../assets/money-icon.svg'
import { motion } from "framer-motion"
import zeroOne from '../assets/zero-one.svg';
import oneAA from '../assets/1A.svg';

const XBXTools = () => {
    return (
        <section className='text-white md:py-40 py-10 text-center xl:px-20 lg:px-10 green-gradient-sm overflow-hidden'>
            <img src={zeroOne} alt="00.1" className='w-8 md:w-10 4xl:w-12 ml-96 md:block hidden' />
            <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
                <h1 className='xl:text-8xl md:text-5xl text-3xl mb-10 md:mb-0 header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest'><span className='stroke-text'>XBX </span>TOOLS</h1>
            </motion.div>
            <img src={oneAA} alt="1.AA" className='w-8 md:w-10 4xl:w-12 mx-auto mt-12 md:block hidden' />
            <br />
            <div className='flex items-start lg:ml-auto mx-auto lg:mx-0 text-sm 4xl:text-2xl md:mb-20 text-left md:text-center w-52 4xl:w-72'><img src={starImage} className='w-3 text-white' /><h6><span className='text-gray-400'>AI adapts to your risk tolerance and </span>autonomously executes trades.</h6></div>
           {/* DESKTOP */}
            <div className='content-between flex-row lg:flex hidden xl:gap-5 xl:p-10 p-0 gap-1'>
                <div className='w-1/4 relative xl:-translate-y-32 xl:hover:-translate-y-36 transition-all cursor-pointer' >
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain glass-effect-box-landing tool-clip'/>
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16 4xl:w-20 4xl:h-20 4xl:mb-6'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5 4xl:text-6xl 4xl:mb-8'>ANALYTICS<br />TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left 4xl:text-xl'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative xl:-translate-y-20 xl:hover:-translate-y-24 transition-all cursor-pointer'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain glass-effect-box-landing tool-clip' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16 4xl:w-20 4xl:h-20 4xl:mb-6'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5 4xl:text-6xl 4xl:mb-8'>ANALYTICS<br />TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left 4xl:text-xl'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative xl:-translate-y-10 xl:hover:-translate-y-12 transition-all cursor-pointer'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain glass-effect-box-landing tool-clip' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16 4xl:w-20 4xl:h-20 4xl:mb-6'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5 4xl:text-6xl 4xl:mb-8'>ANALYTICS<br />TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left 4xl:text-xl'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-1/4 relative xl:hover:-translate-y-2 transition-all cursor-pointer'>
                    <img src={borderBOx} alt="tool-border" className='w-full h-full object-contain glass-effect-box-landing tool-clip' />
                    <div className='absolute top-0 left-0 p-10'>
                        <div className='w-16 h-16 4xl:w-20 4xl:h-20 4xl:mb-6'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-4xl text-left my-5 4xl:text-6xl 4xl:mb-8'>ANALYTICS<br />TOOLS</h4>
                        <p className='text-gray-500 text-lg text-left 4xl:text-xl'>ON-CHAIN<br />ALPHA</p>
                    </div>
                    <div className='absolute w-48 -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div className='content-between flex-col lg:hidden flex gap-10 mt-10 p-10'>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain glass-effect-box-landing tool-clip-mobile' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-fit -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain  glass-effect-box-landing tool-clip-mobile' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-fit -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain  glass-effect-box-landing tool-clip-mobile' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={upChart} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-fit -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
                <div className='w-full relative'>
                    <img src={mobileBorderBox} alt="tool-border" className='w-full h-full object-contain  glass-effect-box-landing tool-clip-mobile' />
                    <div className='absolute top-0 left-0 p-5'>
                        <div className='w-10 h-10'>
                            <img src={moneyIcon} alt="up-arrow" className='w-full h-full object-contain' />
                        </div>
                        <h4 className='text-white font-bold text-xl text-left my-2'>ANALYTICS TOOLS</h4>
                        <p className='text-gray-500 text-sm text-left'>ON-CHAIN ALPHA</p>
                    </div>
                    <div className='absolute w-fit -bottom-6 right-10'>
                        <ShapedTpButton label={'About'} className={''} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default XBXTools