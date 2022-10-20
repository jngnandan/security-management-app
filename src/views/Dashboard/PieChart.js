
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { useContext, useState, useEffect } from 'react'
// import { ContentContext } from '../../src/context/ContentContext.js'


ChartJS.register(ArcElement, Tooltip, Legend);

// useEffect (() => {
//         const {employees} = useContext(ContentContext)
//         const {data} = employees
        
//         const labels = data.map((item) => item.name)
//         const values = data.map((item) => item.salary)

//         // setChartData({
//         //     labels: labels,
//         //     datasets: [
//         //         {
//         //             label: 'Salary',
//         //             data: values,
//         //             backgroundColor: [
//         //                 'rgba(255, 99, 132, 0.6)',
//         //                 'rgba(54, 162, 235, 0.6)',
//         //                 'rgba(255, 206, 86, 0.6)',
//         //                 'rgba(75, 192, 192, 0.6)',
//         //                 'rgba(153, 102, 255, 0.6)',
//         //                 'rgba(255, 159, 64, 0.6)',
//         //                 'rgba(255, 99, 132, 0.6)'
//         //             ]
//         //         }
//         //     ]
//         // })
//     }, [])
            
        

export const data = {
  labels: ['Security Guarding', 'Door Supervision', 'Close Protection', 'KeyHolding',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// export function App() {
//   return <Pie data={data} />;
// }
export default function PieChart() {
  return (
    <div>
      <Pie data={data} />
    </div>
  )
}