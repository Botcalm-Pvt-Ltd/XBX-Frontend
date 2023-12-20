import React from "react";
import AnalyticsMobileCard from "../../../assets/Mobile/MobileAnalytics/AnalyticsMobileCard.png";
import tablecol1 from "../../../assets/Analytics/tablecol1.png";
import tablelist1 from "../../../assets/Analytics/tablelist1.png";
import tablelist2 from "../../../assets/Analytics/tablelist2.png";
import tablelist3 from "../../../assets/Analytics/tablelist3.png";
import tablelist4 from "../../../assets/Analytics/tablelist4.png";
import tablelist5 from "../../../assets/Analytics/tablelist5.png";

const AnalyticsCard = () => {
  return (
    <div className="flex justify-center items-center text-xs">
      <div className="absolute pt-6 -z-10">
        <img src={AnalyticsMobileCard} alt="bodyCard" />
      </div>
      <div className="flex flex-col gap-3 w-80 mx-10 p-3 text-white">
        <div className="flex justify-start items-start gap-20">
          <div className="flex gap-3">
            <img src={tablecol1} alt="Arrow" className="w-6 h-7" />
            <div>
              <h1 className="text-gray-500">Name</h1>
              <h1>Bridge Me</h1>
            </div>
          </div>
          <div>
              <h1 className="text-gray-500">XS (ATH)</h1>
              <h1>1.5X ($38T)</h1>
          </div>
        </div>
        <div className="flex justify-start items-start gap-32">
          <div>
              <h1 className="text-gray-500">TIME</h1>
              <h1>00:08:23</h1>
          </div>
          <div>
              <h1 className="text-gray-500">LIQ. VARIATION</h1>
              <h1>+35.73%</h1>
          </div>
        </div>
        <div className="flex justify-start items-start gap-20">
          <div className="flex gap-3">
            <div>
              <h1 className="text-gray-500">CURRENT MC ($)</h1>
              <h1>5.79T</h1>
            </div>
          </div>
          <div className="flex">
            <div>
              <h1 className="text-gray-500">CURRENT MC ($)</h1>
              <h1>5.6.39K</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-3">
            <div>
              <h1 className="text-gray-500">LAUNCH STATS</h1>
              <div className="text-xs">
                <h1 className="text-orange-700">MAYBE RUG</h1>
                <h1>WALLETS: </h1>
                <h1>SELECTIVE : 0 / 50</h1>
                <div className="flex gap-2">
                  <h1>SNIPERS : 0 / 50</h1>
                  <div className="h-5 w-0.5 bg-gray-500/50" />
                  <h1>FRESH : 0 / 50</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={tablelist1} alt="tablelist1" className="w-3" />
            <div className="grid grid-cols-2 gap-1">
              <img src={tablelist2} alt="tablelist2" className="w-3" />
              <img src={tablelist3} alt="tablelist3" className="w-3" />
              <img src={tablelist4} alt="tablelist4" className="w-3" />
              <img src={tablelist5} alt="tablelist5" className="w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
