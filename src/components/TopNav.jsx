import React, { useState } from 'react'
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import { FaChevronDown } from "react-icons/fa";
import BlueRadialGradient from './BlueRadialGradient';
import XBXBG from './XBXBG';

const TopNav = () => {
    const [menuShow, setMenuShow] = useState(false);

    const menuToggle= ()=> {
        setMenuShow((prev)=> !prev);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='flex items-center justify-between relative px-10 xl:px-20 lg:px-10'>
            <div className='w-1/2 z-10'>
                <div className='md:w-32 md:h-32 w-24 h-24 xl:ml-auto xl:mr-0 mr-auto transform xl:translate-x-1/2 cursor-pointer'>
                    <img src={logo} alt="logo" className='w-full h-full object-contain' />
                </div>
            </div>
            {/* Mobile */}
            {menuShow && <nav className='block absolute top-32 bg-black w-full left-0 px-10 leading-[60px] z-10'>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 01</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Products</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 02</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Socials</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 03</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Dashboard</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 04</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1'>Docs</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
            </nav>}
            {/* Desktop */}
            <nav className='md:w-1/2 items-center justify-end md:flex hidden absolute md:relative top-32 md:top-0 w-full left-0 px-10 md:px-0 leading-[60px] md:leading-snug z-10'>
                <div className='mr-10 4xl:text-lg cursor-pointer'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 01</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Products</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10 4xl:text-lg cursor-pointer'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 02</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Socials</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='mr-10 4xl:text-lg cursor-pointer'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 03</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Dashboard</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
                <div className='4xl:text-lg cursor-pointer'>
                    <span className='text-gray-500 font-bold md:block hidden'>/ 04</span>
                    <div className='flex items-center text-white'>
                        <h6 className='mr-1 hover:mr-2 transition-all transition-300'>Docs</h6>
                        <FaChevronDown className='text-xs'/>
                    </div>
                </div>
            </nav>
            
            <div className='w-10 h-10 md:hidden block cursor-pointer z-10' onClick={menuToggle}>
                <img src={menu} alt="menu" className='w-full h-full object-contain' />
            </div>
            <BlueRadialGradient className={'w-[700px] absolute -top-3/4 left-0 xl:left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:-translate-y-1/3'}/>
            <XBXBG className={'w-1/3 top-0 left-0 absolute'}/>
        </div>
    )
}

export default TopNav