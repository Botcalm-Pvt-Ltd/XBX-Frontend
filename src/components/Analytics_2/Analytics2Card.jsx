import React from "react";
import card from "../../assets/Analytics-2/card.png";

const Analytics2Card = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={card} alt="card" />
      </div>
      <div className="p-6 mx-5 flex flex-col gap-2">
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">MARKET CAP</h1>
          <h1>$508.27K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">LIQUIDITY</h1>
          <h1>$18.24K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">INITIAL LIQ</h1>
          <h1>$5.25K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">SIGNAL MC / ATH MC</h1>
          <h1>-</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">LIQ. VARIATION</h1>
          <h1>+247.62%</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl">
          <h1 className="text-gray-500 text-base">WETH IN POOL</h1>
          <h1>8.45</h1>
        </div>
      </div>
    </div>
  );
};

export default Analytics2Card;
