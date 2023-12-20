import React from "react";
import piechart from "../../../assets/Mobile/MobileLeadboard/piechart.png";

const MobileLeadboardCard = () => {
  return (
    <div className="px-10 pt-20">
    <div className="flex justify-center items-center">
    <div
      className="flex flex-col items-start justify-center gap-5 bg-gray-500/30 p-5 px-20 rounded-xl text-white"
      style={{ clipPath: "polygon(80% 0, 100% 33%, 100% 100%, 0% 100%, 0% 0%)" }}
    >
      <div className="flex gap-10">
        <div className="flex justify-center items-center gap-5">
          <img src={piechart} alt="piechart" className="w-8 h-8"/>
          <div>
            <h1>RANK</h1>
            <h1>00</h1>
          </div>
        </div>
        <div><h1>Wallet</h1><h1>You</h1></div>
      </div>
      <div className="flex gap-10">
        <div>
            <h1>FLOPPIES</h1>
            <h1>00.0</h1>
        </div>
        <div><h1>REFERRALS</h1><h1>1000</h1></div>
      </div>
      <div><h1>VOLUME</h1><h1>53.37 ETH</h1></div>
    </div>
    </div>
    </div>
  );
};

export default MobileLeadboardCard;
