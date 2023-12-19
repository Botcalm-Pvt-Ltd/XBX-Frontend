import React from 'react'
import ShapedTpButton from './ShapedTpButton'
import starImage from '../assets/star.png'
import { motion } from 'framer-motion'

const Excellence = () => {
    return (
        <section className='text-white xl:px-20 px-10 pb-20 relative'>
            <motion.div initial={{ x: 80 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}  viewport={{ once: true }}>
                <h1 className=' text-center xl:text-8xl md:text-5xl text-3xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest mb-10 md:mb-3'><span className='stroke-text'>ALPHA </span>WITH<br /> ON-CHAIN ANALYTICS<br /><span className='stroke-text'>EXCELLENCE</span></h1>
            </motion.div>
            <div className='z-20 flex items-center justify-center md:gap-10 gap-5 w-full my-20'>
                <ShapedTpButton label={'Join Portal'} className={'z-10'}/>
                <ShapedTpButton label={'Dashboard'} className={'z-10'}/>
            </div>
            <div className='blue-gradient-lg w-full md:w-96 aspect-square absolute left-0 top-0 z-0'>

            </div>
            <div>
                <img src={starImage} className='w-3 text-white' />
                <div className='lg:w-52 4xl:w-72 flex items-start text-sm 4xl:text-2xl md:mb-20 text-left md:text-left my-10 md:my-5'><h6>From a multitude of tokens,<span className='text-gray-400'>Yagami Analytics</span><br />identifies and highlights<span className='text-gray-400'>those with</span>potential interest</h6></div>
            </div>
        </section>
    )
}

export default Excellence