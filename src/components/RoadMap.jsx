import { motion } from 'framer-motion'
import React from 'react'

const RoadMap = () => {
    return (
        <section className='text-white xl:px-20 px-10 pb-20 relative'>
            <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}  viewport={{ once: true }}>
                <h1 className='text-center xl:text-8xl md:text-5xl text-3xl header-font transform lg:translate-y-10 translate-y-5 md:tracking-widest mb-10 md:mb-3'><span className='stroke-text'>XBX </span>ROADMAP</h1>
            </motion.div>
            <div className='my-20 flex items-center justify-between md:flex-row flex-col gap-5 md:gap-0 z-10'>
                <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10'>
                    <p className='text-xs 4xl:text-lg'>IN PROGRESS</p>
                    <div className='w-1/2 bg-gray-500 rounded-full'>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1 }} className='bg-white p-1 rounded-full' />
                    </div>
                    <p className='text-xs 4xl:text-lg'>100%</p>
                </div>
                <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10'>
                    <p className='text-xs 4xl:text-lg'>BETA TESTING</p>
                    <div className='w-1/2 bg-gray-500 rounded-full'>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '86%' }} transition={{ duration: 1 }} className='bg-white p-1 rounded-full' />
                    </div>
                    <p className='text-xs 4xl:text-lg'>86%</p>
                </div>
                <div className='flex items-center justify-between w-full md:w-1/3 text-white md:px-10 z-10'>
                    <p className='text-xs 4xl:text-lg'>READY</p>
                    <div className='w-1/2 bg-gray-500 rounded-full'>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '50%' }} transition={{ duration: 1 }} className='bg-white p-1 rounded-full' />
                    </div>
                    <p className='text-xs 4xl:text-lg'>50%</p>
                </div>
            </div>
            <div className='green-gradient-sm w-[500px] aspect-square absolute right-0 top-0 z-0'>

            </div>
        </section>
    )
}

export default RoadMap