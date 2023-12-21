import React, { useState } from "react";
import doubleArrow from "../../assets/Dashboard/doubleArrow.png";
import MaskGroup from '../../assets/Dashboard/MaskGroup.png';

const LeaderBoardTable = ({ TABLE_ROWS }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <table className="table-fixed w-full text-left">
      <thead>
        <tr className="text-white">
          <th className="">
            <img src={doubleArrow} alt="doubleArrow" className="4xl:w-14"/>
          </th>
          <th className="4xl:text-4xl">RANK</th>
          <th className="4xl:text-4xl">WALLET</th>
          <th className="4xl:text-4xl">FLOPPIES</th>
          <th className="4xl:text-4xl">REFERRALS</th>
          <th className="4xl:text-4xl">VOLUME</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, index) => (
          <React.Fragment key={index}>
            <tr>
              <td colSpan="6">
                <hr className="h-px bg-transparent border-0 py-2" />
              </td>
            </tr>
            <tr
              className={`${
                selectedRow === index
                  ? "bg-gradient-to-l from-gray-800 to-transparent text-white"
                  : "text-gray-400 hover:text-white hover:bg-gradient-to-l from-gray-800 to-transparent grayscale hover:grayscale-0"
              }`}
              onClick={() => handleRowClick(index)}
            >
              <td>
                <img src={details.Arrow} alt="Arrow" className="w-5 4xl:w-10" />
              </td>
              <td className="4xl:text-4xl">
                <div
                  className={`${
                    selectedRow === index
                      ? "bg-gray-400/40 rounded-full w-10 h-10 4xl:w-20 4xl:h-20 flex items-center justify-center relative right-3 4xl:right-6"
                      : ""
                  }`}
                >
                  {details.Rank}
                </div>
              </td>
              <td className="4xl:text-4xl">{details.wallet}</td>
              <td className="4xl:text-4xl">{details.floppies}</td>
              <td className="4xl:text-4xl">{details.referals}</td>
              <td className={`4xl:text-4xl relative ${selectedRow === index ? 'selected-row' : ''}`}>
                {details.volume}
                {selectedRow === index && (
                  <div className="mask-group-background">
                    <img src={MaskGroup} alt="MaskGroup" className="absolute inset-0 w-full h-full" />
                  </div>
                )}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderBoardTable;
