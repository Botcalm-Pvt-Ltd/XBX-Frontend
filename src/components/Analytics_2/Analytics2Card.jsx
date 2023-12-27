import React from "react";
import card from "../../assets/Analytics-2/card.png";

const Analytics2Card = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={card} alt="card" className="4xl:w-[500px] 4xl:h-[950px]"/>
      </div>
      <div className="p-6 mx-5 flex flex-col gap-2">
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">MARKET CAP</h1>
          <h1>$0.00K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">LIQUIDITY</h1>
          <h1>$0.00K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">INITIAL LIQ</h1>
          <h1>$0.00K</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">SIGNAL MC / ATH MC</h1>
          <h1>-</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">LIQ. VARIATION</h1>
          <h1>+0.00%</h1>
        </div>
        <hr className="h-px my-5 bg-gray-500/60 border-0 w-52" />
        <div className="text-white text-2xl 4xl:text-6xl">
          <h1 className="text-gray-500 text-base 4xl:text-2xl">WETH IN POOL</h1>
          <h1>0.00</h1>
        </div>
      </div>
    </div>
  );
};

export default Analytics2Card;
