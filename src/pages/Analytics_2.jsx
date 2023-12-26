import React from "react";
import Analytics2Head from "../components/Analytics_2/Analytics2Head";
import Analytics2Card from "../components/Analytics_2/Analytics2Card";
import graph from "../assets/Analytics-2/graph.png";
import Analytics2Table from "../components/Analytics_2/Analytics2Table";
import Analytics2Holders from "../components/Analytics_2/Analytics2Holders";
import Analytics2Signals from "../components/Analytics_2/Analytics2Signals";
import Analytics2MobileTopCard from "../components/MobileView/Analytics2/Analytics2MobileTopCard";
import MobileGraph from "../assets/Mobile/MobileAnalytics_2/MobileGraph.png";
import MobileTableCard from "../components/MobileView/Analytics2/MobileTableCard";
import { MobilePaginationNav1Presentation } from "../components/MobileView/MobilePagination";
import MobileAnalytics2Holders from "../components/MobileView/Analytics2/MobileAnalytics2Holders";
import MobileAnalytics2Signals from "../components/MobileView/MobileReferrals/MobileAnalytics2Signals";
import Analytics2Graph from "../components/Analytics_2/Analytics2Graph";
import Analytics2MobileGraph from "../components/MobileView/Analytics2/Analytics2MobileGraph";

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
    <div>
      <div className="max-xl:hidden">
        <div className="pt-5 pr-28 4xl:ml-40 4xl:mr-72">
          <Analytics2Head />
          <div className="flex pt-10">
            <div className="">
              <Analytics2Card />
            </div>
            <div className="pl-10">
              <Analytics2Graph/>
              <div className="pt-5 4xl:pl-40">
                <Analytics2Table TABLE_ROWS={AnalyticsTable_ROWS} />
              </div>
              <div className="absolute left-[330px] pt-5 4xl:left-[480px]">
                <div className="flex max-2xl:gap-[60px] gap-[130px] 4xl:pt-20">
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
      </div>
      <div className="xl:hidden">
        <div className="flex max-sm:flex-col sm:gap-[110px] lg:gap-56 sm:pl-9 justify-center items-center lg:pt-10">
          <div>
            <Analytics2MobileTopCard />
          </div>
          <div className="max-sm:pt-10 sm:pt-10">
            <Analytics2MobileGraph/>
          </div>
        </div>
        <div className="pt-10 grid sm:grid-cols-2">
          {AnalyticsTable_ROWS.map((item) => (
            <div key={item.date}>
              <MobileTableCard
                date={item.date}
                type={item.type}
                usd={item.usd}
                zuzu={item.zuzu}
                weth={item.weth}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center xl:hidden">
          <MobilePaginationNav1Presentation />
        </div>
        <div className="flex max-sm:flex-col justify-center items-center max-2xl:gap-5 gap-10 lg:gap-44">
          <div>
            <MobileAnalytics2Holders />
          </div>
          <div>
            <MobileAnalytics2Signals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics_2;
