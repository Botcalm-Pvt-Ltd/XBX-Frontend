import React from "react";
import ReferralsCard from "../components/Referrals/ReferralsCard";
import ReferralsCardcodes from "../components/Referrals/ReferralsCardcodes";
import ReferralTable from "../components/Referrals/ReferralTable";
import { PaginationNav1Presentation } from "../components/Pagination";
import { MobilePaginationNav1Presentation } from "../components/MobileView/MobilePagination";
import MobileReferralsCard from "../components/MobileView/MobileReferrals/MobileReferralsCard";
import MobileReferralsCardcodes from "../components/MobileView/MobileReferrals/MobileReferralsCardcodes";
import MobileReferralsContantCard from "../components/MobileView/MobileReferrals/MobileReferralsContantCard";

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
      volume: "0.00 ETH",
      code: "V8-COSTE",
    },
    {
      id: "3",
      wallet: "0xCR9...8732",
      volume: "0.00 ETH",
      code: "V8-COSTE",
    },
  ];
  return (
    <div>
      <div className="px-10 mr-20 pt-10 max-xl:hidden">
        <div className="flex justify-between 4xl:justify-start gap-0 4xl:gap-[1120px] 4xl:ml-28">
          <ReferralsCard />
          <ReferralsCardcodes />
        </div>
        <div className="relative top-16 4xl:top-40 4xl:ml-28">
          <h1 className="text-white text-2xl 4xl:text-5xl">YOUR REFERRALS STATS</h1>
          <div className="pt-5 4xl:mr-60">
            <ReferralTable TABLE_ROWS={LeaderBoardTable_ROWS} />
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <div className="flex max-sm:flex-col sm:gap-32 lg:gap-60 justify-center items-center">
          <div>
            <MobileReferralsCard />
          </div>
          <div className="pt-10">
            <MobileReferralsCardcodes />
          </div>
        </div>
        <div className="grid md:grid-cols-2 pt-10">
          {LeaderBoardTable_ROWS.map((item) => (
            <div key={item.id}>
              <MobileReferralsContantCard
                num={item.id}
                wallet={item.wallet}
                volume={item.volume}
                code={item.code}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center max-xl:hidden pt-14 4xl:pt-80 pr-10">
        <PaginationNav1Presentation />
      </div>
      <div className="flex justify-center xl:hidden">
        <MobilePaginationNav1Presentation />
      </div>
    </div>
  );
};

export default Referrals;
