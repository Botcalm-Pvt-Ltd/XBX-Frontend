import React from 'react'

const AnalyticsCardTable = ({ TABLE_ROWS }) => {
  return (
<table className="table-fixed w-full text-left Grotesk">
      <thead>
        <tr className="text-gray-500 4xl:text-4xl">
          <th className="">DATE</th>
          <th className="4xl:px-40">MC</th>
          <th className="relative max-2xl:right-10 4xl:px-60">SOCIAL</th>
        </tr>
        <td colSpan="3">
          <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50" />
        </td>
      </thead>
      <tbody>
        {TABLE_ROWS.map((details, index) => (
          <React.Fragment key={index}>
            <tr className="text-white text-left group 4xl:text-4xl">
              <td className="">{details.date}</td>
              <td className="4xl:px-40">
                {details.mc}
              </td>
              <td className="relative max-2xl:right-10 whitespace-nowrap 4xl:px-60">{details.social}</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr className="h-px bg-transparent border-1 py-2 border-gray-600/50" />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default AnalyticsCardTable
