// 'use client';

// import React from 'react'
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
// import { Bar } from "react-chartjs-2";
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

// export function JobDataGraph({ChartData}: any) {
//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (data: any) {
//             return 'Peoples applied: ' + data.formattedValue;
//           },
//         },
//       },
//       datalabels: {
//         anchor: 'center',
//         align: 'center',
//         formatter: function (value: any, context: any) {
//            //custom money icon
//           return context.chart.data.labels[context.dataIndex];
//         },
//         color: "#FFFFFF",
//         font: {
//           weight: 'normal' as const,
//           size: 10,
//           family: 'poppins'
//         },
//         rotation: -90,
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: true,
//     scales: {
//       x: {
//         ticks: {
//           anchor: 'center',
//           align: 'center',
//           font: {
//             weight: 'bold' as const,
//             size: 8, // Adjust the size of the bottom labels here
//             family: 'poppins'
//           },
//           rotation: 0,
//         },
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };
//   const data = {
//     type: 'bar',
//     labels: ChartData.map((item: any) => item.jobName),
//     datasets: [
//       {
//         label: ChartData.map((item: any) => item.jobViewsValue),
//         data: ChartData.map((item: any) => item.jobAppliedValue),
//         backgroundColor: ["#099f84"],
//         borderWidth: 1,
//         borderRadius: 8,
//         minBarLength: 8,
//       },
//     ],
//   };

//   return (
//     <div className='h-[400px] w-full overflow-scroll'>
//       <Bar data={data} options={options} className='bg-jwhite flex justify-start items-center rounded-lg border-2 border-jsgrey h-[400px] max-w-full p-[10px] object-contain'/>
//     </div>
//   );
// }