import React from "react";
import tablecol1 from "../../assets/Analytics/tablecol1.png";
import tablelist1 from "../../assets/Analytics/tablelist1.png";
import tablelist2 from "../../assets/Analytics/tablelist2.png";
import tablelist3 from "../../assets/Analytics/tablelist3.png";
import tablelist4 from "../../assets/Analytics/tablelist4.png";
import tablelist5 from "../../assets/Analytics/tablelist5.png";

const AnalyticsTable = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed w-full text-left">
      <thead>
        <tr className="text-white">
          <th className="special:text-4xl">Name</th>
          <th className="special:text-4xl">LAUNCH STATS</th>
          <th className="special:text-4xl">XS (ATH)</th>
          <th className="special:text-4xl">TIME</th>
          <th className="special:text-4xl">LIQ. VARIATION</th>
          <th className="special:text-4xl">CURRENT MC ($)</th>
          <th className="special:text-4xl">LIQUIDITY ($)</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr>
              <td colSpan="6">
                <hr className="h-px bg-transparent border-0 py-2" />
              </td>
            </tr>
            <tr className="text-gray-400 hover:text-white hover:bg-gradient-to-l from-gray-500 text-sm">
              <td className="">
                <div className="flex gap-3">
                  <img
                    src={tablecol1}
                    alt="Arrow"
                    className="w-8 h-10 special:w-10"
                  />
                  <div>
                    <h1>{details.name1}</h1>
                    <h1>{details.name2}</h1>
                  </div>
                </div>
              </td>
              <td className="special:text-4xl">
                <div>
                  <h1 className="text-orange-700">MAYBE RUG</h1>
                  <h1>WALLETS: {details.launchstats1}</h1>
                  <h1>SELECTIVE : {details.launchstats2}</h1>
                  <h1>SNIPERS : {details.launchstats3}</h1>
                  <h1>FRESH : {details.launchstats4}</h1>
                </div>
              </td>
              <td className="special:text-4xl">{details.xs}</td>
              <td className="special:text-4xl">{details.time}</td>
              <td className="special:text-4xl">{details.liq}</td>
              <td className="special:text-4xl">{details.mc}</td>
              <td className="special:text-4xl">{details.liquidity}</td>
              <td className="special:text-4xl">
                <div>
                  <img src={tablelist1} alt="tablelist1" />
                  <div className="flex py-2 gap-1">
                    <img src={tablelist2} alt="tablelist2" />
                    <img src={tablelist3} alt="tablelist3" />
                    <img src={tablelist4} alt="tablelist4" />
                    <img src={tablelist5} alt="tablelist5" />
                  </div>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
