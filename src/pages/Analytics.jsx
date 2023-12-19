
import React from 'react'
import AnalyticsHead from '../components/AnalyticsHead/AnalyticsHead'
import AnalyticsTable from '../components/AnalyticsHead/AnalyticsTable'
import { PaginationNav1Presentation } from '../components/Pagination';

const Analytics = () => {
    const LeaderBoardTable_ROWS = [
        {
          name1: "Bridgeme",
          name2: "Bridge Me",
          launchstats: "piecharttable",
          launchstats1: "",
          launchstats2: "0 / 50",
          launchstats3: "0 / 50",
          launchstats4: "0 / 50",
          xs: "1.5X ($38T)",
          time: "00:08:23",
          liq: "00:08:23",
          mc: "5.79T",
          liquidity: "6.39K",
        },
        {
          name1: "Bridgeme",
          name2: "Bridge Me",
          launchstats: "piecharttable",
          launchstats1: "",
          launchstats2: "0 / 50",
          launchstats3: "0 / 50",
          launchstats4: "0 / 50",
          xs: "1.5X ($38T)",
          time: "00:08:23",
          liq: "00:08:23",
          mc: "5.79T",
          liquidity: "6.39K",
        },
        {
          name1: "Bridgeme",
          name2: "Bridge Me",
          launchstats: "piecharttable",
          launchstats1: "",
          launchstats2: "0 / 50",
          launchstats3: "0 / 50",
          launchstats4: "0 / 50",
          xs: "1.5X ($38T)",
          time: "00:08:23",
          liq: "00:08:23",
          mc: "5.79T",
          liquidity: "6.39K",
        }
      ];
  return (
    <div>
      <AnalyticsHead/>
      <AnalyticsTable TABLE_ROWS={LeaderBoardTable_ROWS}/>
      <div className="flex justify-center">
          <PaginationNav1Presentation />
        </div>
    </div>
  )
}

export default Analytics
