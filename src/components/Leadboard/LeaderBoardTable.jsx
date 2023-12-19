import React from "react";
import doubleArrow from "../../assets/Dashboard/doubleArrow.png";

const LeaderBoardTable = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed w-full text-left">
      <thead>
        <tr className="text-white">
          <th className="">
            <img src={doubleArrow} alt="doubleArrow" className="special:w-14"/>
          </th>
          <th className="special:text-4xl">RANK</th>
          <th className="special:text-4xl">WALLET</th>
          <th className="special:text-4xl">FLOPPIES</th>
          <th className="special:text-4xl">REFERRALS</th>
          <th className="special:text-4xl">VOLUME</th>
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
            <tr className="text-gray-400 hover:text-white hover:bg-gradient-to-l from-gray-500">
              <td className="">
                <img src={details.Arrow} alt="Arrow" className="w-5 special:w-10" />
              </td>
              <td className="special:text-4xl">{details.Rank}</td>
              <td className="special:text-4xl">{details.wallet}</td>
              <td className="special:text-4xl">{details.floppies}</td>
              <td className="special:text-4xl">{details.referals}</td>
              <td className="special:text-4xl">{details.volume}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderBoardTable;
