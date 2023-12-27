import React from "react";
import bodyCard from "../../../assets/Mobile/MobileLeadboard/bodyCard.png";
import circle from "../../../assets/Mobile/MobileLeadboard/circle.png";
import diamond from "../../../assets/Dashboard/diamond.png";
import box_2 from "../../../assets/Dashboard/box_2.png";
import globe from "../../../assets/Dashboard/globe.png";
import cube from "../../../assets/Dashboard/cube.png";
import LeaderBoardButton from "../../Leadboard/LeaderBoardButton";

const MobileLeadMainboard = () => {
  return (
    <div className="flex justify-center md:pt-10">
      <div className="absolute pt-6 -z-10">
        <img src={bodyCard} alt="bodyCard" />
      </div>
      <div className="text-white pt-5">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-500">/ Last updated:</h1>
          <h1>01-09-202316:51:51</h1>
        </div>
        <div className="pt-5">
          <div className="flex items-center justify-center gap-5">
            <div>
              <img src={circle} alt="circle" />
            </div>
            <div>
              <div className="text-white Grotesk text-3xl">
                <h1>Mystic</h1>
                <h1 className="text-base truncate">
                00.0 <span className="text-gray-500">/ Floppies</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-5 flex flex-col gap-5">
            <div className="flex items-center justify-start">
              <div className="flex justify-center items-center px-10 gap-2 w-32">
                <img src={diamond} alt="diamond" className="w-8" />
                <div>
                  <h1 className="text-xl text-white">00.0</h1>
                  <h1 className="text-xs text-gray-500">Legendary</h1>
                </div>
              </div>
              <div className="h-16 w-0.5 bg-gray-500/50 relative left-6" />

              <div className="flex justify-center items-center px-10 gap-2 w-32 relative left-6">
                <img src={box_2} alt="box_2" className="w-8" />
                <div>
                  <h1 className="text-xl text-white">00.0</h1>
                  <h1 className="text-xs text-gray-500">Common</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="flex justify-center items-center px-10 gap-2 w-32 relative right-3">
                <img src={globe} alt="globe" className="w-9" />
                <div>
                  <h1 className="text-xl text-white">00.0</h1>
                  <h1 className="text-xs text-gray-500">Rare</h1>
                </div>
              </div>
              <div className="h-16 w-0.5 bg-gray-500/50 relative left-6" />

              <div className="flex justify-center items-center px-10 gap-2 w-32 relative left-5">
                <img src={cube} alt="cube" className="w-8" />
                <div>
                  <h1 className="text-xl text-white">00.0</h1>
                  <h1 className="text-xs text-gray-500">Mystic</h1>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-5 bg-gray-500/60 border-0 mx-2" />

          <div className="flex justify-start items-center px-10">
            <div className="relative right-5">
              <h1 className="text-base text-gray-500">
                / REFERRALS
              </h1>
              <h1 className="text-2xl">00.0</h1>
            </div>
            <div className="h-16 w-0.5 bg-gray-500/50 relative left-5" ></div>
            <div className="relative left-12">
              <h1 className="text-xs text-gray-500">/ VOLUME</h1>
              <h1 className="text-xl">00.0 ETH</h1>
            </div>
          </div>
          <div className="flex justify-between items-center px-10">
          <div className="relative right-5">
            <h1 className="text-xs text-gray-700">/ REFERRALS VOLUME</h1>
            <h1 className="text-xl ">00.0 ETH</h1>
          </div>
          <div className="scale-50 relative left-6">
          <LeaderBoardButton />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLeadMainboard;
