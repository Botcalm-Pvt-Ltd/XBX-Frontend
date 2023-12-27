import React from "react";
import AnalyticsHead from "../components/AnalyticsHead/AnalyticsHead";
import AnalyticsTable from "../components/AnalyticsHead/AnalyticsTable";
import { PaginationNav1Presentation } from "../components/Pagination";
import { MobilePaginationNav1Presentation } from "../components/MobileView/MobilePagination";
import MobileAnalytics from '../components/MobileView/MobileAnalytics/MobileAnalytics'

const Analytics = () => {
  const LeaderBoardTable_ROWS = [
    {
      name1: "Bridgeme",
      name2: "Bridge Me",
      launchstats: "piecharttable",
      launchstats1: "",
      launchstats2: "0 / 0.00",
      launchstats3: "0 / 0.00",
      launchstats4: "0 / 0.00",
      xs: "0.00X ($0.00T)",
      time: "00:08:23",
      liq: "00:08:23",
      mc: "0.00T",
      liquidity: "0.00K",
    },
    {
      name1: "Bridgeme",
      name2: "Bridge Me",
      launchstats: "piecharttable",
      launchstats1: "",
      launchstats2: "0 / 0.00",
      launchstats3: "0 / 0.00",
      launchstats4: "0 / 0.00",
      xs: "0.00X ($0.00T)",
      time: "00:08:23",
      liq: "00:08:23",
      mc: "0.00T",
      liquidity: "0.00K",
    },
    {
      name1: "Bridgeme",
      name2: "Bridge Me",
      launchstats: "piecharttable",
      launchstats1: "",
      launchstats2: "0 / 0.00",
      launchstats3: "0 / 0.00",
      launchstats4: "0 / 0.00",
      xs: "0.00X ($0.00T)",
      time: "00:08:23",
      liq: "00:08:23",
      mc: "0.00T",
      liquidity: "0.00K",
    },
  ];
  return (
    <div className="4xl:mr-40">
      <div className="max-xl:hidden">
        <AnalyticsHead />
      </div>
      <div className="xl:hidden">
        <MobileAnalytics />
      </div>
      <div className="max-xl:hidden">
        <AnalyticsTable TABLE_ROWS={LeaderBoardTable_ROWS} />
      </div>
      <div className="flex justify-center max-xl:hidden pt-5 4xl:pt-20 pr-10">
        <PaginationNav1Presentation />
      </div>
      <div className="flex justify-center xl:hidden">
        <MobilePaginationNav1Presentation />
      </div>
    </div>
  );
};

export default Analytics;
