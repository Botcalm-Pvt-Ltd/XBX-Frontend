import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaChevronUp, FaGithub } from 'react-icons/fa'
import { PiTelegramLogo } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date();
  return (
    <footer className='relative py-10 flex items-center md:flex-row flex-col justify-between md:gap-0 gap-5 text-white xl:px-20 px-10'>
      {/* <div className='flex items-center flex-col absolute -top-5 right-0 md:left-1/2 z-10 transform -translate-x-1/2 cursor-pointer'>
        <img src={scrollImage} alt="scroll-icon" className='w-10 h-10 rotate-180' />
        <p>Scroll Up</p>
      </div> */}
      <div className='text-2xl w-fit flex gap-5 4xl:text-4xl'>
        <Link to={'https://www.twitter.com'} target='_blank' className='hover:brightness-50'><BsTwitterX /></Link>
        <Link to={'https://wwww.github.com'} target='_blank' className='hover:brightness-50'><FaGithub /></Link>
        <Link to={'https://www.telegram.com'} target='_blank' className='hover:brightness-50'><PiTelegramLogo /></Link>
      </div>
      <div className='w-fit xl:absolute xl:left-1/2 xl:bottom-10 transform xl:-translate-x-1/2 text-center 4xl:text-xl'>
      {date.getFullYear()} © XBX
      </div>
      <nav className=' items-center justify-end xl:flex hidden w-fit md:leading-snug'>
        <div className='mr-10 4xl:text-lg'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 01</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Products</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div className='mr-10 4xl:text-lg'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 02</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Socials</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div className='mr-10 4xl:text-lg'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 03</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Dashboard</h6>
            <FaChevronUp className='text-xs' />
          </div>
        </div>
        <div className='4xl:text-lg'>
          <span className='text-gray-500 font-bold md:block hidden'>/ 04</span>
          <div className='flex items-center text-white cursor-pointer'>
            <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Docs</h6>
            <FaChevronUp className='text-xs' />

          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer