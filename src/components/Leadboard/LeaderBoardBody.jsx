import React from "react";
import Subtract from "../../assets/Dashboard/Subtract.png";
import circleLogo from "../../assets/Dashboard/circleLogo.png";
import diamond from "../../assets/Dashboard/diamond.png";
import box_2 from "../../assets/Dashboard/box_2.png";
import globe from "../../assets/Dashboard/globe.png";
import cube from "../../assets/Dashboard/cube.png";
import LeaderBoardButton from "./LeaderBoardButton";

const LeaderBoardBody = () => {
  return (
    <div className="pt-5 px-14">
      <div>
        <img
          src={Subtract}
          alt="Subtract"
          className="absolute w-[72%] 4xl:w-[78%] h-1/2 -z-10"
        />
      </div>
      <div>
        <div className="flex items-center justify-center text-white 4xl:text-3xl relative 4xl:right-40">
          <h1>
            <span className="text-gray-700">/ Last updated:</span> 01-09-2023
            16:51:51
          </h1>
        </div>
        <div className="flex items-center justify-between pt-10 px-20 mr-10 4xl:mr-96 4xl:pt-40">
          <div className="flex items-center justify-center gap-10">
            <div>
              <img src={circleLogo} alt="circleLogo" className="4xl:w-60"/>
            </div>
            <div className="text-white Grotesk text-3xl 4xl:text-6xl">
              <h1>Mystic</h1>
              <h1 className="text-base truncate 4xl:text-2xl">
                500 <span className="text-gray-500">/ Floppies</span>
              </h1>
            </div>
            <div className="h-20 w-0.5 bg-gray-700" />
          </div>
          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={diamond} alt="diamond" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">5000</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Legendary</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center  px-14 gap-2">
            <img src={box_2} alt="box_2" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">1000</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Common</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={globe} alt="globe" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">2500</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Rare</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={cube} alt="cube" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">1000</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Mystic</h1>
          </div>
        </div>
        <div className="flex justify-between items-center text-white Grotesk px-20 mr-20 4xl:mr-[450px] text-lg pt-20 4xl:pt-20">
          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-700">/ REFERRALS</h1>
            <h1 className="text-2xl 4xl:text-5xl">1000</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />
          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-700">/ VOLUME</h1>
            <h1 className="text-2xl 4xl:text-5xl">1000 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-700">/ REFERRALS VOLUME</h1>
            <h1 className="text-2xl 4xl:text-5xl">5000 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div>
          <LeaderBoardButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardBody;
