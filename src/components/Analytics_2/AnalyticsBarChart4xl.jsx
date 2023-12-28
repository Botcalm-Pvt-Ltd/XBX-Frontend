import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AnalyticsBarChart4xl = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          { x: "1", y: [0.5, 5], status: "up" },
          { x: "2", y: [1.5, 4], status: "up" },
          { x: "3", y: [3, 5], status: "down" },
          { x: "4", y: [1.75, 3], status: "down" },
          { x: "5", y: [2.5, 2], status: "up" },
          { x: "6", y: [1, 1], status: "down" },
          { x: "7", y: [1.75, 7], status: "down" },
          { x: "8", y: [1.25, 5], status: "up" },
          { x: "9", y: [1, 3.5], status: "up" },
          { x: "10", y: [3.5, 6.5], status: "up" },
          { x: "11", y: [2.25, 4.5], status: "up" },
          { x: "12", y: [0.5, 5.5], status: "up" },
          { x: "13", y: [1.5, 4], status: "up" },
          { x: "14", y: [2.25, 6], status: "up" },
          { x: "15", y: [0.75, 4], status: "up" },
          { x: "16", y: [0.25, 3.6], status: "up" },
          { x: "17", y: [3.5, 5.8], status: "up" },
          { x: "18", y: [2.25, 4.8], status: "up" },
          { x: "19", y: [1, 4.3], status: "up" },
          { x: "20", y: [1.75, 5], status: "up" },
          { x: "21", y: [1.5, 3.7], status: "down" },
          { x: "22", y: [0.75, 5.7], status: "down" },
          { x: "23", y: [2.75, 6.5], status: "down" },
          { x: "24", y: [1, 7], status: "down" },
          { x: "25", y: [1.5, 5.7], status: "down" },
          { x: "26", y: [2.5, 4.9], status: "down" },
          { x: "27", y: [0.25, 6.3], status: "down" },
          { x: "28", y: [3.5, 4.7], status: "down" },
          { x: "29", y: [1, 5.9], status: "down" },
          { x: "30", y: [1.5, 7], status: "down" },
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
        labels: {
            style: {
                fontSize: '30px',
                fontWeight: 400,
            },
        }
    ,
      },
      yaxis: {
        opposite: true,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
            style: {
                fontSize: '30px',
                fontWeight: 400,
            },
        }
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
    <div id="chart" className="pl-40">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="rangeBar"
        height={480}
        width={1800}
      />
    </div>
  );
};

export default AnalyticsBarChart4xl;
