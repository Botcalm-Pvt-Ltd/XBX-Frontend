import React from 'react'
import xbxbg from '../assets/XBX.png';
const XBXBG = ({className}) => {
  return (
    <div className={` ${className}`}>
        <img src={xbxbg} alt="xbx-bg" className='w-full h-full object-contain' />
    </div>
  )
}

export default XBXBG