import React from 'react'

const AnalyticsCardTable = ({ TABLE_ROWS }) => {
  return (
<table className="table-fixed w-full text-left Grotesk 4xl:w-4/5">
      <thead>
        <tr className="text-gray-500 4xl:text-4xl">
          <th className="">DATE</th>
          <th className="">MC</th>
          <th className="relative max-2xl:right-10">SOCIAL</th>
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
              <td className="">
                {details.mc}
              </td>
              <td className="relative max-2xl:right-10 whitespace-nowrap">{details.social}</td>
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
