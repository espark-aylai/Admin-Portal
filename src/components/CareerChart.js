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

function CareerAreaChart() {
  const { careerdata} = useSelector((state) => state.career);

  // Create an object to count the number of blogs per createDate
  const careerCountByDate = careerdata?.reduce((countByDate, career) => {
    const createDate = career.createDate;
    if (countByDate[createDate]) {
      countByDate[createDate]++;
    } else {
      countByDate[createDate] = 1;
    }
    return countByDate;
  }, {});

  // Extract unique dates and corresponding Career Counts
  const uniqueDates = Object.keys(careerCountByDate);
  const careerCounts = uniqueDates.map((date) => careerCountByDate[date]);

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
        display: false, 
        // position : 'top'
      },
      title: {
        display: false,
        text: 'Career Count by Date',
        fontSize: 16,
      },
    },
    scales: {
      x: {
        title: {
          display: false, 
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
    <div style={{ width: '100%', maxWidth: '500px' }}> {/* Adjust the width as needed */}
      <Line
        options={options}
        data={{
          labels: uniqueDates,
          datasets: [
            {
              fill: {
                target: 'origin', 
              },
              label: 'Career Count',
              data: careerCounts,
            },
          ],
        }}
      />
    </div>
  );
}

export default CareerAreaChart;






