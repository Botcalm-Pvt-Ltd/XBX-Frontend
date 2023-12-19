import React from 'react'
import stepsBorder from '../assets/steps-border.svg'
import stepsCount from '../assets/steps-count.svg'
import { FaGreaterThan } from 'react-icons/fa'
const ThreeSteps = () => {
  return (
    <section className='flex items-center lg:flex-row flex-col xl:px-20 gap-10 px-10'>
      <div className='lg:w-1/3 w-full relative xl:hover:-translate-y-2 transition-all cursor-pointer'>
        <img src={stepsBorder} alt="border" className='w-full' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#01</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
      <div className='lg:w-1/3 w-full relative xl:-translate-y-10 xl:hover:-translate-y-12 transition-all cursor-pointer'>
        <img src={stepsBorder} alt="border" className='w-full' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#02</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
      <div className='lg:w-1/3 w-full relative xl:-translate-y-24 xl:hover:-translate-y-28 transition-all cursor-pointer'>
        <img src={stepsBorder} alt="border" className='w-full' />
        <div className='absolute -top-10 xl:-left-10'>
          <div className='w-20 relative'>
            <img src={stepsCount} alt="count" className='w-full h-full object-contain' />
            <p className='absolute top-5 left-5 text-2xl text-black font-extrabold'>#03</p>
          </div>
        </div>
        <ul className='absolute top-1/4 left-10 xl:mt-0 mt-10 text-white uppercase'>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Early smart buyers realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Smart wallets realtime monitoring</li>
          <li className='flex items-center gap-2 hover:gap-4 transition-all transition-300 xl:mb-4 text-sm md:text-md 4xl:text-lg'><FaGreaterThan />Realtime token analytics</li>
        </ul>
      </div>
    </section>
  )
}

export default ThreeSteps