import React from 'react';

const ReferralTable = ({ TABLE_ROWS }) => {
  return (
    <table className="table-fixed w-full text-left">
      <thead>
        <tr className="text-white">
          <th className="special:text-4xl"></th>
          <th className="special:text-4xl relative right-32">WALLET</th>
          <th className="special:text-4xl">VOLUME</th>
          <th className="special:text-4xl relative left-40">CODE</th>
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, key) => (
          <React.Fragment key={key}>
            <tr className="text-gray-400 hover:text-white ">
              <td className="special:text-4xl">{details.id}</td>
              <td className="special:text-4xl relative right-32">{details.wallet}</td>
              <td className="special:text-4xl">{details.volume}</td>
              <td className="special:text-4xl relative left-40">{details.code}</td>
            </tr>
            <tr>
              <td colSpan="4">
                <hr className="h-px bg-transparent border-1 py-2 border-gray-600" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ReferralTable;
