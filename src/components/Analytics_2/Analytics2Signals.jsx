import React from "react";
import bottom_card2 from "../../assets/Analytics-2/bottom-card2.png";
import AnalyticsCardTable from "./AnalyticsCardTable";

const Analytics2Signals = () => {
  const AnalyticsTable_ROWS = [
    {
      date: "15s ago",
      mc: "0",
      social: "iToken - Ethereum",
    },
    {
      date: "15s ago",
      mc: "0",
      social: "iToken - Ethereum",
    },
    {
      date: "15s ago",
      mc: "0",
      social: "iToken - Ethereum",
    },
  ];
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bottom_card2} alt="bottom_card2" className="4xl:w-[1600px] 4xl:h-[500px]"/>
      </div>
      <div className="p-5 ml-5 4xl:pt-16 max-2xl:mr-10">
        <h1 className="text-white Grotesk pb-5 4xl:text-6xl">Signals</h1>
        <div className="max-2xl:mr-0 mr-20 4xl:pt-10">
          <AnalyticsCardTable TABLE_ROWS={AnalyticsTable_ROWS} />
        </div>
      </div>
    </div>
  );
};

export default Analytics2Signals;
