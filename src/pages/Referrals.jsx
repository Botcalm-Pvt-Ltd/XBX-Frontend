import React from "react";
import ReferralsCard from "../components/Referrals/ReferralsCard";
import ReferralsCardcodes from "../components/Referrals/ReferralsCardcodes";
import ReferralTable from "../components/Referrals/ReferralTable";
import { PaginationNav1Presentation } from "../components/Pagination";

const Referrals = () => {
  const LeaderBoardTable_ROWS = [
    {
      id: "1",
      wallet: "0xCR9...8732",
      volume: "0.00 ETH",
      code: "V8-COSTE",
    },
    {
      id: "2",
      wallet: "0xCR9...8732",
      volume: "22.4 ETH",
      code: "V8-COSTE",
    },
    {
      id: "3",
      wallet: "0xCR9...8732",
      volume: "50.0 ETH",
      code: "V8-COSTE",
    },
    {
      id: "4",
      wallet: "0xCR9...8732",
      volume: "7.48 ETH",
      code: "V8-COSTE",
    },
    {
      id: "5",
      wallet: "0xCR9...8732",
      volume: "0.00 ETH",
      code: "V8-COSTE",
    },
  ];
  return (
    <div>
      <div className="px-10 mr-20 pt-10">
        <div className="flex justify-between 4xl:justify-start gap-0 4xl:gap-[1500px]">
          <ReferralsCard />
          <ReferralsCardcodes />
        </div>
        <div className="relative top-16 4xl:top-40">
          <h1 className="text-white text-2xl">YOUR REFERRALS STATS</h1>
          <div>
            <ReferralTable TABLE_ROWS={LeaderBoardTable_ROWS} />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-8 4xl:top-60">
        <PaginationNav1Presentation />
      </div>
    </div>
  );
};

export default Referrals;
