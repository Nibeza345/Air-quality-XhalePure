import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'PM2.5 Level',
      data: [18, 20, 15, 22, 17, 21, 19],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
    {
      label: 'PM10 Level',
      data: [12, 15, 10, 16, 11, 14, 13],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Air Quality Trends',
    },
  },
};

const LineChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-red-500 font-semibold">PM2.5 Level</span> &bull; 
          <span className="text-blue-500 font-semibold ml-2">PM10 Level</span>
          <div className="text-gray-500 text-sm">Last 7 Days</div>
        </div>
        <div>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded mx-1">Day</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded mx-1">Week</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded mx-1">Month</button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
