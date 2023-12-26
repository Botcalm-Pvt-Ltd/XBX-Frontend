import React from "react";
import piechart from "../../../assets/Mobile/MobileLeadboard/piechart.png";
import Subtract from '../../../assets/Mobile/MobileLeadboard/Subtract.png'

const MobileLeadboardCard = () => {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center"><img src={Subtract} alt="Subtract" className="absolute -z-10"/>
        <div className="p-5 flex flex-col gap-3 text-white">
          <div className="flex gap-16 relative right-8">
            <div className="flex justify-start items-center gap-5">
              <img src={piechart} alt="piechart" className="w-8 h-8" />
              <div>
                <h1 className="text-gray-500 text-sm">RANK</h1>
                <h1>00</h1>
              </div>
            </div>
            <div>
              <h1 className="text-gray-500 text-sm">Wallet</h1>
              <h1>You</h1>
            </div>
          </div>
          <div className="flex gap-16 relative right-8">
            <div>
              <h1 className="text-gray-500 text-sm">FLOPPIES</h1>
              <h1>00.0</h1>
            </div>
            <div className="relative left-7 ">
              <h1 className="text-gray-500 text-sm">REFERRALS</h1>
              <h1>1000</h1>
            </div>
          </div>
          <div className="relative right-8">
            <h1 className="text-gray-500 text-sm">VOLUME</h1>
            <h1>53.37 ETH</h1>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default MobileLeadboardCard;
