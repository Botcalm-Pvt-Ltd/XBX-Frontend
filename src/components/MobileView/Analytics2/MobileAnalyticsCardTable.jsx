import React from 'react'

const MobileAnalyticsCardTable = ({ TABLE_ROWS }) => {
  return (
<table className="table-fixed w-72 text-left Grotesk text-base">
      <thead>
        <tr className="text-gray-500">
          <th className="">DATE</th>
          <th className="">MC</th>
          <th className="">SOCIAL</th>
        </tr>
        <td colSpan="3">
          <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50 w-60" />
        </td>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, index) => (
          <React.Fragment key={index}>
            <tr className="text-white text-left group">
              <td className="">{details.date}</td>
              <td className="">
                {details.mc}
              </td>
              <td className="">{details.social}</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50 w-60" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default MobileAnalyticsCardTable
