import React from "react";
import LeaderBoardBody from "../components/Leadboard/leaderBoardBody";
import LeaderBoardTable from "../components/Leadboard/LeaderBoardTable";
import piecharttable from "../assets/Dashboard/piecharttable.png";
import { PaginationNav1Presentation } from "../components/Pagination";

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
    }
  ];
  return (
    <div className="overflow-y-hidden">
      <LeaderBoardBody />
      <div className="pt-16 px-20 special:pt-40 special:mr-80">
        <LeaderBoardTable TABLE_ROWS={LeaderBoardTable_ROWS} />
        <div className="flex justify-center">
          <PaginationNav1Presentation />
        </div>
      </div>
    </div>
  );
};

export default Leadboard;
