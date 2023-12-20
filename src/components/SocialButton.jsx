import React from 'react'
import { useNavigate } from 'react-router-dom';


const SocialButton = ({ to, className, bgColor, icon: Icon }) => {
    const navigate = useNavigate();

  return (
    <div className={`relative ${className}`} onClick={()=> navigate(to)}>
    <div className={`overflow-hidden border bg-gray-600/30 text-white backdrop-blur-md w-16 h-14 absolute bottom-1 right-1 font-bold flex items-center justify-center ${bgColor} hover:bg-gray-600/50 hover:text-black cursor-pointer transition-300 transition-all`} style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 33%)' }}>
    <div className='w-12 h-20 bg-white absolute -top-1/2 -left-[50px] transform rotate-[42deg]'></div>
    <div className='border absolute inset-0' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}></div>
    {Icon && <Icon style={{ width: '40%', height: '80%' }}/>}
    </div>
    <div className='w-[50px] h-[48px]'>
    </div>
</div>
  )
}

export default SocialButton
