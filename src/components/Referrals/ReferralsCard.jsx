import React from "react";
import blueCard from '../../assets/Referrals/blueCard.png'

const ReferralsCard = () => {
  return (
    <div>
        <img src={blueCard} alt="blueCard" className="absolute -z-10 max-2xl:w-[450px] max-2xl:h-52 4xl:w-[800px]"/>
      <div className="flex flex-col gap-10 4xl:gap-20 text-white text-lg 4xl:text-4xl w-96 4xl:w-[600px] pt-8 pl-12">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-2xl">/ REFERRALS</h1>
            <h1>0.00</h1>
          </div>
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-2xl">/ VOLUME</h1>
            <h1>0.00 ETH</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-2xl">/ REFERRALS VOLUME</h1>
            <h1>0.00 ETH</h1>
          </div>
          <div className="relative right-6">
            <h1 className="text-gray-500 text-base 4xl:text-2xl">/ Rank</h1>
            <h1>0.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsCard;
