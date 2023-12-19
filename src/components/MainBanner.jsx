import React from 'react'
import worldImage from '../assets/world.png'
import starImage from '../assets/star.png'
import xb from '../assets/xb.svg'
import ShapedTpButton from './ShapedTpButton'
import { BsTwitterX } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import chain1 from '../assets/chain-1.svg';
import chain2 from '../assets/chain-2.svg';
import chain3 from '../assets/chain-3.svg';
import chain4 from '../assets/chain-4.svg';
const MainBanner = () => {
    return (
        <section className='text-white text-center relative py-10 capitalize mx-auto'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h4 className='md:text-xl text-sm font-bold header-font md:tracking-[20px] tracking-widest'>RAPID ACCESS</h4>
            </motion.div>
            <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <h1 className='xl:text-8xl md:text-5xl text-3xl header-font transform lg:translate-y-14 xl:translate-y-20 translate-y-14 md:translate-y-14  md:tracking-widest'><span className='stroke-text'>ADVA</span>NCED</h1>
            </motion.div>
            <div className='md:w-[800px] 4xl:w-[1000px] w-full mx-auto relative z-[1] px-10 md:px-0 green-gradient'>
                <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 1 }} >
                    <h1 className='xl:text-8xl md:text-5xl text-3xl absolute md:top-24 top-14 left-1/2 transform -translate-x-1/2 header-font md:tracking-widest z-10'>ANAL<span className='stroke-text'>YTICS</span></h1>
                </motion.div>
                <div className='md:w-[700px] 4xl:w-[900px] w-full mx-auto p-10'>
                <motion.div 
                initial={{ scale: 1 }} 
                animate={{ scale: [1, 1.02, 1]}} 
                transition={{
                    repeat: Infinity,
                    duration: 2, // Total duration of one bounce (half up, half down)
                    ease: 'easeInOut',
                    repeatDelay: 0.5, // Delay between bounces
                }}>
                    <img src={worldImage} alt="world-image" className='w-full h-full object-contain' />
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h6 className='md:text-2xl text-md absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full tracking-wider'>ULTIMATE TOOL FOR ON-CHAIN TRADING</h6>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className='flex items-center justify-center md:gap-10 gap-5 w-full absolute top-1/2 left-0'>
                        <ShapedTpButton label={'Join Portal'} />
                        <ShapedTpButton label={'Dashboard'} />
                    </div>
                </motion.div>
            </div>
            {/* <motion.div
                initial={{ y: -390 }}
                animate={{ y: [-390, -410, -390] }} // Adjust the bounce height as needed
                transition={{
                    repeat: Infinity,
                    duration: 2, // Total duration of one bounce (half up, half down)
                    ease: 'easeInOut',
                    repeatDelay: 0.5, // Delay between bounces
                }}
            > */}
                <img src={starImage} alt="star" className='w-20 h-20 md:block hidden absolute bottom-1/2 right-52 ' />
            {/* </motion.div> */}
            <div className='absolute bottom-0 right-0 w-1/3 z-0'>
                <img src={xb} alt="xb" className='w-full h-full object-contain' />
            </div>
            <div className='flex items-end md:flex-row flex-col px-10 xl:-mt-52 lg:-mt-40 md:-mt-20 mt-20 w-fit md:w-full mx-auto'>
                <div className='w-72'>
                    <div className='flex items-start text-sm 4xl:text-2xl md:mb-20 text-left md:text-center'><img src={starImage} className='w-3 text-white' /><h6><span className='text-gray-400'>AI adapts to your risk tolerance and </span>autonomously executes trades.</h6></div>
                    <p className='text-white text-sm mb-5 4xl:text-lg'>Support Chains</p>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='w-16 h-16 cursor-pointer'>
                        <img src={chain1} alt="supported-chains" className='w-full h-full object-contain hover:brightness-150' />
                        </div>
                        <div className='w-16 h-16 cursor-pointer'>
                        <img src={chain2} alt="supported-chains" className='w-full h-full object-contain hover:brightness-150' />
                        </div>
                        <div className='w-16 h-16 cursor-pointer'>
                        <img src={chain3} alt="supported-chains" className='w-full h-full object-contain hover:brightness-150' />
                        </div>
                        <div className='w-16 h-16 cursor-pointer'>
                        <img src={chain4} alt="supported-chains" className='w-full h-full object-contain hover:brightness-150' />
                        </div>
                    </div>
                </div>
    
                <div className='text-2xl 4xl:text-4xl ml-auto w-fit flex md:flex-col gap-5 mr-20 z-10 mt-10'>
                <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <Link to={'https://www.twitter.com'} target='_blank' className='hover:brightness-50'><BsTwitterX /></Link>
                    </motion.div>
                    <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 1 }}>

                    <Link to={'https://wwww.github.com'} target='_blank' className='hover:brightness-50'><FaGithub /></Link>
                    </motion.div>
                    <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 1 }}>

                    <Link to={'https://www.telegram.com'} target='_blank' className='hover:brightness-50'><PiTelegramLogo /></Link>
                    </motion.div>
                   
                </div>
              
            </div>
            {/* <div className='flex items-center flex-col absolute bottom-0 right-0 md:left-1/2 z-10 transform -translate-x-1/2 cursor-pointer'>
                <p>Scroll Down</p>
                <img src={scrollImage} alt="scroll-icon" className='w-10 h-10' />
            </div> */}
        </section>
    )
}

export default MainBanner