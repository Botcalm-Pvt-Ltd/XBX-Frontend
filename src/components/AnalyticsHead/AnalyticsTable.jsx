import React from "react";
import tablecol1 from "../../assets/Analytics/tablecol1.png";
import tablelist1 from "../../assets/Analytics/tablelist1.png";
import tablelist2 from "../../assets/Analytics/tablelist2.png";
import tablelist3 from "../../assets/Analytics/tablelist3.png";
import tablelist4 from "../../assets/Analytics/tablelist4.png";
import tablelist5 from "../../assets/Analytics/tablelist5.png";
import { useNavigate } from "react-router-dom";

const AnalyticsTable = ({ TABLE_ROWS }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/analytics2")
  }
  return (
    <table className="table-fixed w-full text-left 4xl:ml-40">
      <thead>
        <tr className="text-gray-400">
          <th className="4xl:text-4xl">Name</th>
          <th className="4xl:text-4xl">LAUNCH STATS</th>
          <th className="4xl:text-4xl">XS (ATH)</th>
          <th className="4xl:text-4xl">TIME</th>
          <th className="4xl:text-4xl">LIQ. VARIATION</th>
          <th className="4xl:text-4xl">CURRENT MC ($)</th>
          <th className="4xl:text-4xl">LIQUIDITY ($)</th>
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
            <tr className="text-gray-400 hover:text-white hover:bg-gradient-to-l from-gray-500 text-sm 4xl:text-4xl cursor-pointer" onClick={handleNavigate}>
              <td className="">
                <div className="flex gap-3">
                <div className="flex justify-center items-center">
                    <h1>{key + 1}</h1>
                  </div>
                  <img
                    src={tablecol1}
                    alt="Arrow"
                    className="w-8 h-10 4xl:w-20 4xl:h-20"
                  />
                  <div>
                    <h1>{details.name1}</h1>
                    <h1>{details.name2}</h1>
                  </div>
                </div>
              </td>
              <td className="text-xs 4xl:text-2xl">
                <div className="flex flex-col gap-1 4xl:gap-3">
                  <h1 className="text-orange-700">MAYBE RUG</h1>
                  <h1>WALLETS: {details.launchstats1}</h1>
                  <h1>SELECTIVE : {details.launchstats2}</h1>
                  <h1>SNIPERS : {details.launchstats3}</h1>
                  <h1>FRESH : {details.launchstats4}</h1>
                </div>
              </td>
              <td className="4xl:text-4xl">{details.xs}</td>
              <td className="4xl:text-4xl">{details.time}</td>
              <td className="4xl:text-4xl">{details.liq}</td>
              <td className="4xl:text-4xl">{details.mc}</td>
              <td className="4xl:text-4xl">{details.liquidity}</td>
              <td className="4xl:text-4xl">
                <div>
                  <img src={tablelist1} alt="tablelist1" className="w-4 4xl:w-10 4xl:h-10" />
                  <div className="flex justify-start items-center py-2 gap-1">
                    <img src={tablelist2} alt="tablelist2" className="w-4 h-4 4xl:w-10 4xl:h-10"/>
                    <img src={tablelist3} alt="tablelist3" className="w-4 h-4 4xl:w-10 4xl:h-10"/>
                    <img src={tablelist4} alt="tablelist4" className="w-4 h-4 4xl:w-10 4xl:h-10"/>
                    <img src={tablelist5} alt="tablelist5" className="w-4 h-4 4xl:w-10 4xl:h-10"/>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="8">
                <hr className="h-px bg-transparent border-1 mt-5 border-gray-600/50" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
