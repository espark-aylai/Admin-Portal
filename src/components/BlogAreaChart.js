// Updated working or Correct code
// import React, { useEffect, useState } from 'react';
// import {
//     Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';

// function BlogAreaChart() {
//   const { data } = useSelector((state) => state.blog);

//   // Create an object to count the number of blogs per createDate
//   const blogCountByDate = data.reduce((countByDate, blog) => {
//     const createDate = blog.createDate;
//     if (countByDate[createDate]) {
//       countByDate[createDate]++;
//     } else {
//       countByDate[createDate] = 1;
//     }
//     return countByDate;
//   }, {});

//   // Extract unique dates and corresponding blog counts
//   const uniqueDates = Object.keys(blogCountByDate);
//   const blogCounts = uniqueDates.map((date) => blogCountByDate[date]);

//   // Chart.js setup
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Filler,
//     Legend
//   );

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Blog Count by Date',
//       },
//     },
//   };

//   return (
//     <Line
//       options={options}
//       data={{
//         labels: uniqueDates,
//         datasets: [
//           {
//             fill: true,
//             label: 'Blog Count',
//             data: blogCounts,
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//           },
//         ],
//       }}
//     />
//   );
// }

// export default BlogAreaChart;

// Cheking new code
import React from 'react';
import {
 Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function BlogAreaChart() {
  const { data } = useSelector((state) => state.blog);

  
  const blogCountByDate = data.reduce((countByDate, blog) => {
    const createDate = blog.createDate;
    if (countByDate[createDate]) {
      countByDate[createDate]++;
    } else {
      countByDate[createDate] = 1;
    }
    return countByDate;
  }, {});

  const uniqueDates = Object.keys(blogCountByDate);
  const blogCounts = uniqueDates.map((date) => blogCountByDate[date]);

  // Chart.js setup
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false, // Hide the legend
        // position : 'top'
      },
      title: {
        display: false,
        text: 'Blog Count by Date',
        fontSize: 16,
      },
    },
    scales: {
      x: {
        title: {
          display: false, // Hide the X-axis title
        //   text : 'Create Date',
        //   fontSize : 16 
        },
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        title: {
          display: false,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          beginAtZero: true,  
          font: {
            size: 12, 
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, 
        borderWidth: 2,
        borderColor: 'rgb(75, 192, 192)', 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
      },
      point: {
        radius: 3, 
        backgroundColor: 'rgb(75, 192, 192)', 
      },
    },
  };

  return (
    <div  style={{ width: '100%', maxWidth: '700px' }}> 
      <Line
        options={options}
        data={{
          labels: uniqueDates,
          datasets: [
            {
              fill: {
                target: 'origin', 
              },
              label: 'Blog Count',
              data: blogCounts,
            },
          ],
        }}
      />
    </div>
  );
}

export default BlogAreaChart;