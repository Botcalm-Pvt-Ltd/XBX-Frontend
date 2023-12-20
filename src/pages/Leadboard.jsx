import React from "react";
import LeaderBoardBody from "../components/Leadboard/leaderBoardBody";
import LeaderBoardTable from "../components/Leadboard/LeaderBoardTable";
import piecharttable from "../assets/Dashboard/piecharttable.png";
import { PaginationNav1Presentation } from "../components/Pagination";
import { MobilePaginationNav1Presentation } from "../components/MobileView/MobilePagination";
import MobileLeadboard from "../components/MobileView/MobileLeadboard/MobileLeadboard";

const Leadboard = () => {
  const LeaderBoardTable_ROWS = [
    {
      Arrow: piecharttable,
      Rank: "00",
      wallet: "You",
      floppies: "00.0",
      referals: "0",
      volume: "53.37 ETH",
    },
    {
      Arrow: piecharttable,
      Rank: "01",
      wallet: "0X1B2D...6581",
      floppies: "295",
      referals: "1000",
      volume: "0.08 ETH",
    },
  ];
  return (
    <div>
      <div className="max-xl:hidden">
        <LeaderBoardBody />
      </div>
      <div className="xl:hidden">
        <MobileLeadboard />
      </div>
      <div className="pt-16 px-20 4xl:pt-40 4xl:mr-80">
        <div className="max-xl:hidden">
          <LeaderBoardTable TABLE_ROWS={LeaderBoardTable_ROWS} />
        </div>
        <div className="flex justify-center max-xl:hidden">
          <PaginationNav1Presentation />
        </div>
        <div className="flex justify-center xl:hidden">
          <MobilePaginationNav1Presentation />
        </div>
      </div>
    </div>
  );
};

export default Leadboard;
