import React from 'react'
import topCard from '../../../assets/Mobile/MobileAnalytics_2/topCard.png'

const Analytics2MobileTopCard = () => {
  return (
<div className="flex justify-center">
      <div className="absolute -z-10">
        <img src={topCard} alt="topCard" className="w-80 sm:w-80 sm:h-80"/>
      </div>
      <div className="flex flex-col gap-7 text-white text-lg pt-6 sm:pt-20 w-full">
        <div className="flex justify-between items-center gap-12">
          <div>
            <h1 className="text-gray-500 text-xs">MARKET CAP</h1>
            <h1>$0.00K</h1>
          </div>
          <div className="h-10 w-0.5 bg-gray-700/50" />
          <div className="relative right-8">
            <h1 className="text-gray-500 text-xs">LIQUIDITY</h1>
            <h1>0.00 ETH</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-xs">INITIAL LIQ</h1>
            <h1>$0.00K</h1>
          </div>
          <div className="h-10 w-[1.6px] bg-gray-700/50" />
          <div className="relative right-10">
            <h1 className="text-gray-500 text-xs">SIGNAL MC</h1>
            <h1>-</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-xs">LIQ. VARIATION</h1>
            <h1>+0.00%</h1>
          </div>
          <div className="h-10 w-[1.6px] bg-gray-700/50" />
          <div className="relative right-6">
            <h1 className="text-gray-500 text-xs">WETH IN POOL</h1>
            <h1>0.00</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics2MobileTopCard
