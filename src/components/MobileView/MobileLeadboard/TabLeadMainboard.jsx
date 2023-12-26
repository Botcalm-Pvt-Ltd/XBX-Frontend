import React from 'react'
import Subtract from "../../../assets/Dashboard/Subtract.png";
import circle from "../../../assets/Mobile/MobileLeadboard/circle.png";
import diamond from "../../../assets/Dashboard/diamond.png";
import box_2 from "../../../assets/Dashboard/box_2.png";
import globe from "../../../assets/Dashboard/globe.png";
import cube from "../../../assets/Dashboard/cube.png";
import LeaderBoardButton from "../../Leadboard/LeaderBoardButton";

const TabLeadMainboard = () => {
  return (
    <div className='pt-10 lg:pt-16'>
      <div>
        <img
          src={Subtract}
          alt="Subtract"
          className="absolute w-full h-[28%] -z-10 px-10 lg:px-24 lg:h-1/4"
        />
      </div>
      <div>
        <div className="flex items-center justify-center text-white relative ">
          <h1 className='text-sm'>
            <span className="text-gray-700">/ Last updated:</span> 01-09-2023
            16:51:51
          </h1>
        </div>
        <div className="flex items-center justify-between pt-10 px-20 lg:px-32 max-lg:px-16">
          <div className="flex items-center justify-center gap-2">
          <div>
              <img src={circle} alt="circle"/>
            </div>
            <div className="text-white Grotesk text-3xl">
              <h1>Mystic</h1>
              <h1 className="text-base truncate">
                500 <span className="text-gray-500">/ Floppies</span>
              </h1>
            </div>
            <div className="h-20 w-0.5 bg-gray-700" />
          </div>
          <div className="flex flex-col justify-center items-center px-8 gap-2">
            <img src={diamond} alt="diamond"/>
            <h1 className="text-xl text-white">5000</h1>
            <h1 className="text-xs text-gray-500">Legendary</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-8 gap-2">
            <img src={box_2} alt="box_2"/>
            <h1 className="text-xl text-white">1000</h1>
            <h1 className="text-xs text-gray-500">Common</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-8 gap-2">
            <img src={globe} alt="globe"/>
            <h1 className="text-xl text-white">2500</h1>
            <h1 className="text-xs text-gray-500">Rare</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-8 gap-2">
            <img src={cube} alt="cube"/>
            <h1 className="text-xl text-white">1000</h1>
            <h1 className="text-xs text-gray-500">Mystic</h1>
          </div>
        </div>
        <div className="flex justify-between items-center text-white Grotesk px-20 lg:px-32 text-sm pt-10">
          <div>
            <h1 className="text-base text-gray-700">/ REFERRALS</h1>
            <h1 className="text-xl">1000</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />
          <div>
            <h1 className="text-base text-gray-700">/ VOLUME</h1>
            <h1 className="text-xl">1000 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div>
            <h1 className="text-base text-gray-700">/ REFERRALS VOLUME</h1>
            <h1 className="text-xl">5000 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div className="scale-50">
          <LeaderBoardButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabLeadMainboard
