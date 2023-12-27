import React from "react";
import blueCard from "../../../assets/Mobile/MobileReferrals/MobileBlueCard.png";

const MobileReferralsCard = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute -z-10">
        <img src={blueCard} alt="blueCard" className="w-80 sm:w-80 sm:h-48"/>
      </div>
      <div className="flex flex-col gap-7 text-white text-base pt-8 w-full">
        <div className="flex justify-between items-center gap-14">
          <div>
            <h1 className="text-gray-500 text-sm">/ REFERRALS</h1>
            <h1>0.00</h1>
          </div>
          <div className="relative left-[31px] h-10 w-0.5 bg-gray-700/50" />
          <div>
            <h1 className="text-gray-500 text-sm">/ VOLUME</h1>
            <h1>0.00 ETH</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-sm">/ REFERRALS VOLUME</h1>
            <h1>0.00 ETH</h1>
          </div>
          <div className="relative right-[12px] h-10 w-[1.6px] bg-gray-700/50" />
          <div className="relative right-6">
            <h1 className="text-gray-500 text-sm">/ Rank</h1>
            <h1>0.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileReferralsCard;
