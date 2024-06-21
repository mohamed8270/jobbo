'use client';

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export function JobDataGraph({ChartData}: any) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data: any) {
            return 'Peoples applied: ' + data.formattedValue;
          },
        },
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        formatter: function (value: any) {
           //custom money icon
          return new Intl.NumberFormat("tr-TR").format(value);
        },
        color: "#FFFFFF",
        font: {
          weight: 'normal' as const,
          size:14,
          family: 'poppins'
        },
        rotation: -90,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight: 'bold' as const,
            size: 10, // Adjust the size of the bottom labels here
            family: 'poppins'
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  // The following colors will be used sequentially for the chart bars
  const backgroundColors = ["#099f84"];
  const data = {
    labels: ChartData.map((item: any) => item.jobName),
    datasets: [
      {
        label: ChartData.map((item: any) => item.jobName),
        data: ChartData.map((item: any) => item.jobAppliedValue),
        backgroundColor: backgroundColors,
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className='h-[400px] bg-jwhite flex justify-center items-center rounded-lg border-2 border-jsgrey'>
      <Bar data={data} options={options} />
    </div>
  );
}