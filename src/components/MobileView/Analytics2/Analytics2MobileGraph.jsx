import React from 'react'
import chartsquare from "../../../assets/Analytics-2/chartsquare.png";
import chartcircle1 from "../../../assets/Analytics-2/chartcircle1.png";
import resizesquare from "../../../assets/Analytics-2/resizesquare.png";
import grapgCard from "../../../assets/Analytics-2/graphCard.png";
import MobileAnalyticsBarChart from './MobileAnalyticsBarChart';

const Analytics2MobileGraph = () => {
  return (
    <div className="flex justify-center text-white">
      <div className="absolute -z-10">
        <img
          src={grapgCard}
          alt="grapgCard"
          className="w-80 h-80 sm:w-80 sm:h-80"
        />
      </div>
      <div>
        <div className="flex flex-col justify-between w-full pt-5 px-5 text-xs">
          <div className="flex justify-start items-center gap-5 pl-10">
            <img src={chartsquare} alt="chartsquare" className="" />
            <h1 className="text-[#00FFE0]">Candle</h1>
            <img src={chartcircle1} alt="chartcircle1" className="" />
            <div className="h-10 w-0.5 bg-gray-700/50" />

            <img src={resizesquare} alt="resizesquare" className="" />
          </div>
          <div className="flex gap-2 justify-start items-center pl-10">
            <h1 className="text-lg">$286.12 M</h1>
            <h1>Dec29,2021</h1>
          </div>
        </div>
        <div>
          <div>
            <MobileAnalyticsBarChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics2MobileGraph
