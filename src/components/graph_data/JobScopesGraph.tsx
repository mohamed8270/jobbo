// 'use client';

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
//   ChartOptions,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// const LineChart = () => {
//   const data = {
//     labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
//     datasets: [
//       {
//         label: 'FY 2019-2020',
//         data: [5, 22, 20, 39, 50, 35],
//         fill: true,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const options: ChartOptions<'line'> = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: function(value: any) {
//             return value + 'k';
//           }
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'Line Chart',
//       },
//     },
//   };

//   return (
//     <div className="sm:w-[340px] sm:max-[340px] h-full w-full flex-1 flex flex-col gap-[20px] rounded-lg font-poppins">
//       <div className='sm:w-[340px] h-[300px] flex-1 flex flex-col relative gap-[25px] p-[15px] rounded-xl bg-jwhite border-2 border-jsgrey'>
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default LineChart;