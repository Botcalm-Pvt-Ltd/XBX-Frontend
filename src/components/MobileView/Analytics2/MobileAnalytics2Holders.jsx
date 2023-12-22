import React from "react";
import bottomCard from "../../../assets/Mobile/MobileAnalytics_2/bottomCard.png";
import MobileAnalyticsCardTable from "./MobileAnalyticsCardTable";

const MobileAnalytics2Holders = () => {
    const AnalyticsTable_ROWS = [
        {
          date: "15s ago",
          mc: "0",
          social: "ETH",
        },
        {
          date: "15s ago",
          mc: "0",
          social: "ETH",
        },
        {
          date: "15s ago",
          mc: "0",
          social: "ETH",
        },
      ];
  return (
    <div className="flex justify-center items-center py-8">
      <div className="absolute -z-10">
        <img
          src={bottomCard}
          alt="bottomCard"
          className="w-80 sm:w-80 sm:h-64"
        />
      </div>
      <div>
        <div className="p-5 ml-5">
          <h1 className="text-white Grotesk pb-5 text-xl">Signals</h1>
          <div>
            <MobileAnalyticsCardTable TABLE_ROWS={AnalyticsTable_ROWS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAnalytics2Holders;
