import React from "react";
import piechart from "../../../assets/Mobile/MobileLeadboard/piechart.png";

const MobileLeadboardCard = () => {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <div className="w-0 h-[64px] border-[1px] relative bottom-[91px] left-[300px] rotate-[-46deg]"></div>
        <div
          className="flex flex-col items-start justify-center gap-5 bg-gray-500/30 p-5 px-14 rounded-xl text-white border-2"
          style={{
            clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0% 100%, 0% 0%)",
          }}
        >
          <div className="flex gap-16">
            <div className="flex justify-center items-center gap-5">
              <img src={piechart} alt="piechart" className="w-8 h-8" />
              <div>
                <h1>RANK</h1>
                <h1>00</h1>
              </div>
            </div>
            <div>
              <h1>Wallet</h1>
              <h1>You</h1>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h1>FLOPPIES</h1>
              <h1>00.0</h1>
            </div>
            <div className="relative left-7">
              <h1>REFERRALS</h1>
              <h1>1000</h1>
            </div>
          </div>
          <div>
            <h1>VOLUME</h1>
            <h1>53.37 ETH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLeadboardCard;
