import React from 'react';

const ReferralTable = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed w-full text-left">
      <thead>
        <tr className="text-white">
          <th className="4xl:text-4xl"></th>
          <th className="4xl:text-4xl relative right-48 4xl:right-96">WALLET</th>
          <th className="4xl:text-4xl relative right-20">VOLUME</th>
          <th className="4xl:text-4xl relative left-10">CODE</th>
        </tr>
        <td colSpan="4">
                <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50" />
              </td>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr className="text-gray-400 hover:text-white">
              <td className="4xl:text-4xl">{details.id}</td>
              <td className="4xl:text-4xl relative right-48 4xl:right-96">{details.wallet}</td>
              <td className="4xl:text-4xl relative right-20">{details.volume}</td>
              <td className="4xl:text-4xl relative left-10">{details.code}</td>
            </tr>
            <tr>
              <td colSpan="4">
                <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ReferralTable;
