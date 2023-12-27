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
    <div className="pt-5">
      <div>
        <img
          src={Subtract}
          alt="Subtract"
          className="absolute w-full pr-[450px] h-96 xl:h-[350px] 4xl:pr-[850px] 4xl:h-[730px] -z-10"
        />
      </div>
      <div>
        <div className="flex items-center justify-center text-white 4xl:text-3xl relative right-10 4xl:right-40">
          <h1>
            <span className="text-gray-500">/ Last updated:</span> 01-09-2023
            16:51:51
          </h1>
        </div>
        <div className="flex items-center justify-between pt-10 px-20 mr-10 4xl:mr-96 4xl:pt-40">
          <div className="flex items-center justify-center gap-10">
            <div>
              <img src={circleLogo} alt="circleLogo" className="w-28 4xl:w-60"/>
            </div>
            <div className="text-white Grotesk text-3xl 4xl:text-6xl">
              <h1>Mystic</h1>
              <h1 className="text-base truncate 4xl:text-2xl">
              00.0 <span className="text-gray-500">/ Floppies</span>
              </h1>
            </div>
            <div className="h-20 w-0.5 bg-gray-700" />
          </div>
          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={diamond} alt="diamond" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">00.0</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Legendary</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center  px-14 gap-2">
            <img src={box_2} alt="box_2" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">00.0</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Common</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={globe} alt="globe" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">00.0</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Rare</h1>
          </div>
          <div className="h-16 w-0.5 bg-gray-900" />

          <div className="flex flex-col justify-center items-center px-14 gap-2">
            <img src={cube} alt="cube" className="4xl:w-24"/>
            <h1 className="text-xl 4xl:text-4xl text-white">00.0</h1>
            <h1 className="text-xs 4xl:text-2xl text-gray-500">Mystic</h1>
          </div>
        </div>
        <div className="flex justify-between items-center text-white Grotesk px-20 4xl:px-24 mr-20 4xl:mr-[450px] text-lg pt-20 4xl:pt-20">
          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-500">/ REFERRALS</h1>
            <h1 className="text-2xl 4xl:text-5xl">00.0</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />
          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-500">/ VOLUME</h1>
            <h1 className="text-2xl 4xl:text-5xl">00.0 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div>
            <h1 className="text-base 4xl:text-2xl text-gray-500">/ REFERRALS VOLUME</h1>
            <h1 className="text-2xl 4xl:text-5xl">00.0 ETH</h1>
          </div>
          <div className="h-20 w-0.5 bg-gray-800" />

          <div className="4xl:scale-150 4xl:pt-5">
          <LeaderBoardButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardBody;
