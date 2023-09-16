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

  // Create an object to count the number of blogs per createDate
  const blogCountByDate = data.reduce((countByDate, blog) => {
    const createDate = blog.createDate;
    if (countByDate[createDate]) {
      countByDate[createDate]++;
    } else {
      countByDate[createDate] = 1;
    }
    return countByDate;
  }, {});

  // Extract unique dates and corresponding blog counts
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
    maintainAspectRatio: false, // Ensure the chart does not maintain its aspect ratio
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
          display: false, // Hide the Y-axis title
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12, // Adjust the Y-axis tick font size
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, 
        borderWidth: 2,
        borderColor: 'rgb(75, 192, 192)', // Custom color for the line
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Custom color for the fill
      },
      point: {
        radius: 3, // Adjust the point radius
        backgroundColor: 'rgb(75, 192, 192)', // Custom color for the points
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust the width as needed */}
      <Line
        options={options}
        data={{
          labels: uniqueDates,
          datasets: [
            {
              fill: {
                target: 'origin', // Fill from the origin line to the dataset
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






