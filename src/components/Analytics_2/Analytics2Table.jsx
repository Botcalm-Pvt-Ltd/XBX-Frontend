import React from "react";
import LeaderBoardButton from "../Leadboard/LeaderBoardButton";

const Analytics2Table = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed w-full text-left Grotesk 4xl:text-4xl">
      <thead>
        <tr className="text-gray-500">
          <th className="w-28 pb-5 4xl:w-80">DATE</th>
          <th className="w-28 pb-5 4xl:w-80">Type</th>
          <th className="w-28 pb-5 4xl:w-80">USD</th>
          <th className="w-28 pb-5 4xl:w-80">ZuZU</th>
          <th className="w-28 pb-5 4xl:w-80">WETH</th>
          <th className="w-28 pb-5 4xl:w-80">Price</th>
          <th className="w-28 relative left-5 pb-5 4xl:w-80">TXN</th>
        </tr>
        <td colSpan="8">
          <hr className="h-px w-[750px] bg-transparent border-1 py-2 border-gray-600/50" />
        </td>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr className="text-gray-400 text-left group">
              <td className="w-28 text-white/50 group-hover:text-white py-6">{details.date}</td>
              <td className="w-28 text-emerald-500/50 group-hover:text-emerald-500 py-6">
                {details.type}
              </td>
              <td className="w-28 text-emerald-500/50 group-hover:text-emerald-500 py-6">{details.usd}</td>
              <td className="w-28 text-emerald-500/50 group-hover:text-emerald-500 py-6">{details.zuzu}</td>
              <td className="w-28 text-orange-700/50 group-hover:text-orange-700 py-6">{details.weth}</td>
              <td className="w-28 text-orange-700/50 group-hover:text-orange-700 py-6">{details.price}</td>
              <td className="w-28">
                <div className="scale-50 flex">
                  <LeaderBoardButton />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="8">
                <hr className="h-px w-[750px] 4xl:w-[2100px] bg-transparent border-1 mt-3 border-gray-600/50" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Analytics2Table;
