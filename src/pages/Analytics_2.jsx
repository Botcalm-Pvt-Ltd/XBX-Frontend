import React from "react";
import Analytics2Head from "../components/Analytics_2/Analytics2Head";
import Analytics2Card from "../components/Analytics_2/Analytics2Card";
import graph from "../assets/Analytics-2/graph.png";
import Analytics2Table from "../components/Analytics_2/Analytics2Table";
import Analytics2Holders from "../components/Analytics_2/Analytics2Holders";
import Analytics2Signals from "../components/Analytics_2/Analytics2Signals";

const Analytics_2 = () => {
  const AnalyticsTable_ROWS = [
    {
      date: "15s ago",
      type: "Buy",
      usd: "1,609.50",
      zuzu: "111,612",
      weth: "0.9932",
      price: "$0.01278",
    },
    {
      date: "15s ago",
      type: "Buy",
      usd: "1,609.50",
      zuzu: "111,612",
      weth: "0.9932",
      price: "$0.01278",
    },
    {
      date: "15s ago",
      type: "Buy",
      usd: "1,609.50",
      zuzu: "111,612",
      weth: "0.9932",
      price: "$0.01278",
    },
  ];

  return (
    <div className="pt-5 pr-28 ">
      <Analytics2Head />
      <div className="flex pt-10">
        <div className="">
          <Analytics2Card />
        </div>
        <div className="pl-10">
          <img src={graph} alt="graph" className="w-[800px] h-80" />
          <div className=" pt-5">
            <Analytics2Table TABLE_ROWS={AnalyticsTable_ROWS} />
          </div>
          <div className="absolute left-[330px] pt-5">
            <div className="flex gap-[130px]">
              <div>
                <Analytics2Holders />
              </div>
              <div>
                <Analytics2Signals />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics_2;
