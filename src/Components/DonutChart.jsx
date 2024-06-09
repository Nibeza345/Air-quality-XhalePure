import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['PM2.5', 'PM10', 'NO2', 'CO'],
  datasets: [
    {
      data: [40, 30, 20, 10],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
      hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Air Pollutant Distribution',
      position: 'top',
    },
  },
};

const DonutChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Air Pollutant Distribution</div>
        <div className="text-gray-500">This Month <span className="ml-1">&#9662;</span></div>
      </div>
      <Doughnut data={data} options={options} />
      <div className="flex justify-between mt-4">
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> PM2.5
        </div>
        <div className="text-sm">40%</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> PM10
        </div>
        <div className="text-sm">30%</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span> NO2
        </div>
        <div className="text-sm">20%</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center text-sm">
          <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span> CO
        </div>
        <div className="text-sm">10%</div>
      </div>
    </div>
  );
};

export default DonutChart;
