import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LuCheckCircle } from "react-icons/lu";


const AnalyticsButton = ({ label, to, className, bgColor }) => {
    const navigate = useNavigate();

  return (
    <div className={`relative left-10 ${className}`} onClick={()=> navigate(to)}>
    <div className={`overflow-hidden border text-white backdrop-blur-md w-32 h-12 absolute bottom-1 right-1 font-bold flex items-center justify-center ${bgColor} hover:bg-white hover:text-black cursor-pointer transition-300 transition-all`} style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 42%)' }}>
    <div className='w-10 h-20 bg-white absolute md:-top-1/2 -top-[30px] md:-left-[42px] -left-[51px] transform rotate-[42deg]'></div>
    <div className='border absolute inset-0' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}></div>
        {label} <LuCheckCircle />
    </div>
    <div className='border w-28 h-12'>
    </div>
</div>
  )
}

export default AnalyticsButton
