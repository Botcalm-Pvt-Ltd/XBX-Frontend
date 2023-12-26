import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MobileAnalyticsBarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          { x: "1", y: [0.5, 5], status: "up" },
          { x: "2", y: [1.5, 4], status: "up" },
          { x: "3", y: [3, 5], status: "down" },
          { x: "4", y: [1.75, 3], status: "down" },
          { x: "5", y: [2.5, 2], status: "up" },
          { x: "6", y: [1, 5], status: "down" },
          { x: "7", y: [1.75, 7], status: "down" },
          { x: "8", y: [1.25, 5], status: "up" },
          { x: "9", y: [1, 3.5], status: "up" },
          { x: "10", y: [3.5, 6.5], status: "up" },
        ],
      },
    ],
    options: {
      chart: {
        type: "rangeBar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        opposite: true,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },
  });

  const getFillColor = (status) => {
    return status === "up" ? "#00FFE0" : "#F54B4B";
  };

  chartData.series[0].data.forEach((dataPoint) => {
    dataPoint.fillColor = getFillColor(dataPoint.status);
  });


  return (
    <div id="chart">
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="rangeBar"
      height={200}
      width={300}
    />
  </div>
  )
}

export default MobileAnalyticsBarChart
