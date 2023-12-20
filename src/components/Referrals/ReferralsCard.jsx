import React from "react";
import blueCard from '../../assets/Referrals/blueCard.png'

const ReferralsCard = () => {
  return (
    <div>
        <img src={blueCard} alt="blueCard" className="absolute -z-10 4xl:w-[800px]"/>
      <div className="flex flex-col gap-10 4xl:gap-20 text-white text-lg 4xl:text-2xl w-96 4xl:w-[600px] pt-8 pl-12">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-xl">/ REFERRALS</h1>
            <h1>15</h1>
          </div>
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-xl">/ VOLUME</h1>
            <h1>23.04 ETH</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-xl">/ REFERRALS VOLUME</h1>
            <h1>54.41 ETH</h1>
          </div>
          <div>
            <h1 className="text-gray-500 text-base 4xl:text-xl">/ Rank</h1>
            <h1>24</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsCard;
