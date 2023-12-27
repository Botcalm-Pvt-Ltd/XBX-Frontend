import React from 'react'
import stepsBorder from '../assets/steps-border.svg'
import stepsCount from '../assets/steps-count.svg'
import { FaGreaterThan } from 'react-icons/fa'
const ThreeSteps = () => {
  return (
    <section className='flex items-center lg:flex-row flex-col xl:px-20 gap-10 px-10 relative'>
      <div className='lg:w-1/3 w-full relative xl:hover:-translate-y-2 transition-all cursor-pointer z-10'>
        <img src={stepsBorder} alt="border" className='w-full glass-effect-box-landing steps-clip' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#01</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
      <div className='lg:w-1/3 w-full relative xl:-translate-y-10 xl:hover:-translate-y-12 transition-all cursor-pointer'>
        <img src={stepsBorder} alt="border" className='w-full glass-effect-box-landing steps-clip' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#02</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 mb-2 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
      <div className='lg:w-1/3 w-full relative xl:-translate-y-24 xl:hover:-translate-y-28 transition-all cursor-pointer'>
        <img src={stepsBorder} alt="border" className='w-full glass-effect-box-landing steps-clip' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#03</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-xl 4xl:mb-6'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
      <div className='blue-gradient-sm w-[500px] aspect-square absolute left-0 top-0 z-0'/>
    </section>
  )
}

export default ThreeSteps