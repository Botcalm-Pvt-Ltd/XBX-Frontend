import React from "react";
import chartsquare from "../../assets/Analytics-2/chartsquare.png";
import chartcircle1 from "../../assets/Analytics-2/chartcircle1.png";
import resizesquare from "../../assets/Analytics-2/resizesquare.png";
import grapgCard from "../../assets/Analytics-2/graphCard.png";
import AnalyticsBarChart from "./AnalyticsBarChart";
import AnalyticsBarChart4xl from "./AnalyticsBarChart4xl";

const Analytics2Graph = () => {
  return (
    <div className="flex text-white 4xl:ml-40">
      <div className="absolute -z-10">
        <img
          src={grapgCard}
          alt="grapgCard"
          className="h-[340px] w-[780px] 4xl:h-[600px] 4xl:w-[2100px]"
        />
      </div>
      <div>
        <div className="flex justify-between w-full pt-5 px-5 4xl:text-4xl 4xl:pl-40">
          <div className="flex flex-col gap-2">
            <h1>Dec29,2021</h1>
            <h1 className="text-2xl 4xl:text-6xl">$286.12 M</h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={chartsquare} alt="chartsquare" className="4xl:w-10" />
            <h1 className="text-[#00FFE0]">Candle</h1>
            <img src={chartcircle1} alt="chartcircle1" className="4xl:w-10" />
            <div className="h-10 w-0.5 bg-gray-700/50" />

            <img src={resizesquare} alt="resizesquare" className="4xl:w-10" />
          </div>
        </div>
        <div>
          <div className="4xl:hidden">
            <AnalyticsBarChart />
          </div>
          <div className="max-4xl:hidden">
            <AnalyticsBarChart4xl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics2Graph;
