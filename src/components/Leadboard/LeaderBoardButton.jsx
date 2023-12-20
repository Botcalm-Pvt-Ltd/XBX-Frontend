import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const LeaderBoardButton = ({ to, className, bgColor }) => {
    const navigate = useNavigate();

    return (
        <div className={`relative ${className}`} onClick={()=> navigate(to)}>
            <div className={`overflow-hidden bg-gray-600/30 border text-white backdrop-blur-md w-20 h-16 absolute bottom-1 right-1 font-bold flex items-center justify-center ${bgColor} hover:bg-gray-600/50 hover:text-black cursor-pointer transition-300 transition-all`} style={{ clipPath: 'polygon(27% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}>
            <div className='w-12 h-20 bg-white absolute -top-1/2 -left-[42px] transform rotate-[42deg]'></div>
            <div className='border absolute inset-0' style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 38%)' }}></div>
             <MdArrowOutward style={{ width: '40%', height: '80%' }}/>
            </div>
            <div className='border w-[70px] h-[58px]'>
            </div>
        </div>
    )
}

export default LeaderBoardButton